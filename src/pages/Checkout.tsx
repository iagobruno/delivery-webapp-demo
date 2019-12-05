import React, { useState, useMemo } from 'react'
import { useStore } from '../store'
import { configs } from '../data'
import { Link, useRouteMatch, useHistory } from 'react-router-dom'
import { currency } from '../common/constants'
import { sumAllPlatesPriceInBag, convertOrderItensIntoDescription, calcPercentage } from '../common/functions'
// @ts-ignore
import editIcon from '../../static/edit-icon.svg'
// @ts-ignore
import closeIcon from '../../static/close-icon.svg'
// @ts-ignore
import shoppingIcon from '../../static/shopping-basket.svg'

import Page from '../components/Page'
import Price from '../components/Price'

const CheckoutPage: React.FunctionComponent = () => {
  const { state: { bag } , actions } = useStore()
  const history = useHistory()
  const [deliveryType, setDeliveryType] = useState<'entrega' | 'retirada'>('entrega')
  const [coupon, setCoupon] = useState({
    applied: false,
    code: ''
  })

  const platesPrice = sumAllPlatesPriceInBag(bag.list)

  /** Verifica se o pedido pode ser realizado ou não */
  const cantFinish: boolean = useMemo(() => (
    bag.list.every(plate => plate.canBeBoughtAlone === false)
  ), [bag.list.length])

  const finalPrice = useMemo(() => {
    const couponDiscount = coupon.applied ? calcPercentage(10, platesPrice) : 0
    const deliveryFee = (deliveryType === 'entrega') ? configs.deliveryFee : 0

    return platesPrice - couponDiscount + deliveryFee

  }, [platesPrice, coupon.applied, deliveryType])

  function handleSubmit() {
    if (cantFinish) return;

    actions.createOrder({
      plates: bag.list,
      price: finalPrice,
      deliveryType,
    })
    actions.clearBag()

    history.push('/pedidos')
  }

  return (
    <Page id="checkout">
      <h1>Checkout</h1>
      <div className="row">
        {bag.list.length === 0 ? (
          <div className="emptyState">
            <strong>Sua sacola está vazia</strong>
            <Link to="/cardapio">
              <button className="matter-button-outlined">Ver pratos disponíveis</button>
            </Link>
          </div>
        ) : (
          <>
            <div className="page--checkout__list">
              {bag.list.map((order, orderIndex) => (
                <div className="order-item" key={orderIndex}>
                  <img className="order-item__image" src={order.image} />
                  <div style={{ flex: 1 }}>
                    <strong className="order-item__title">
                      {order.repetition! > 1 && ` ${order.repetition}x `}
                      {order.title}
                    </strong>
                    <div className="order-item__details">
                      {Object.values(order.chosenFields!).flat(1).length > 0 && (
                        <div>{convertOrderItensIntoDescription(order.chosenFields!)}.</div>
                      )}
                      {order.observations && (
                        <div>Obs.: {order.observations}</div>
                      )}
                    </div>
                  </div>
                  {/* Somar com o desconto para o comp Price mostrar que o item tem desconto */}
                  <Price
                    value={order.priceCache! + (order.discount ?? 0)}
                    discount={order.discount}
                    className="order-item__price"
                  />
                  <div className="order-item__icons">
                    <img
                      src={editIcon}
                      className="order-item__icon"
                      onClick={() => actions.editItemInBag(orderIndex)}
                      title="Editar item"
                    />
                    <img
                      src={closeIcon}
                      className="order-item__icon"
                      onClick={() => actions.removeFromBag(orderIndex)}
                      title="Remover item da sacola"
                    />
                  </div>
                </div>
              ))}
              <Link to="/cardapio">
                <button className="matter-button-outlined add-more-itens">Adicionar mais itens</button>
              </Link>
            </div>

            <aside>
              <div className="card">
                <div className="button-group">
                  <button className={`matter-button-${deliveryType === 'entrega' ? 'contained' : 'outlined'}`} onClick={() => setDeliveryType('entrega')}>Entrega</button>
                  <button className={`matter-button-${deliveryType === 'retirada' ? 'contained' : 'outlined'}`}onClick={() => setDeliveryType('retirada')}>Retirar na loja</button>
                </div>
              </div>

              <div className="card card--order-justify">
                <strong>Resumo do pedido</strong><br/>
                <div className="row">
                  <span>Pratos ({bag.list.length} {bag.list.length === 1 ? 'item' : 'itens'})</span>
                  <strong>{currency.format(platesPrice)}</strong>
                </div>
                {deliveryType === 'entrega' && (
                  <div className="order-justify__delivery-fee row">
                    <span>Taxa de entrega</span>
                    <strong>{currency.format(configs.deliveryFee)}</strong>
                  </div>
                )}
                {coupon.applied && (
                  <div className="order-justify__coupon row">
                    <span>Cupom</span>
                    <strong>-10%</strong>
                  </div>
                )}
                <div className="order-justify__final-price row">
                  <strong>Total</strong>
                  <strong>{currency.format(finalPrice)}</strong>
                </div>
                <button 
                  className="matter-button-contained"
                  onClick={handleSubmit}
                  disabled={cantFinish}
                 >REALIZAR PEDIDO</button>
              </div>

              <div className="card card--coupon">
                <div className="row">
                  <label className="matter-textfield-outlined" style={{ flex: 1 }}>
                    <input
                      type="text"
                      value={coupon.code}
                      placeholder="Cupom de desconto"
                      onChange={(evt) => setCoupon({ ...coupon, code: evt.target.value })}
                    />
                    <span>Cupom de desconto</span>
                  </label>
                  <button className="matter-button-contained" onClick={(evt) => setCoupon({ code: '', applied: true })}>
                    APLICAR
                  </button>
                </div>
                <div>Digite qualquer coisa para ganhar 10% de desconto!</div>
              </div>
            </aside>
          </>
        )}
      </div>
    </Page>
  )
}

export default CheckoutPage

export const CheckoutButton: React.FC = () => {
  const { state: { bag } } = useStore()
  const isCheckoutPage = useRouteMatch('/checkout')

  return (isCheckoutPage) ? null : (
    <Link to="/checkout">
      <button className="matter-button-contained floating-action-button" title="Sacola">
        <img src={shoppingIcon} />
        <span>{bag.list.length}</span>
      </button>
    </Link>
  )
}
