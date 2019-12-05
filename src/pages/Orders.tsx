import React from 'react'
import { useStore } from '../store'
import { Link } from 'react-router-dom'
import { convertOrderItensIntoDescription } from '../common/functions'
import { relativeTime, currency, orderStatus } from '../common/constants'
import { OrderInterface } from '../common/types'
import { configs } from '../data'

import PageWrapper from '../components/PageWrapper'

const OrdersPage: React.FunctionComponent = () => {
  const { state: { orders }, actions } = useStore()

  function handleClick(index: number, item: OrderInterface) {
    const status = orderStatus[
      orderStatus.findIndex(status => status === item.status)+1
    ]

    actions.updateOrder({
      index,
      updatedItem: {
        ...item,
        status,
      }
    })
  }

  return (
    <PageWrapper id="orders">
      <h1>Meus pedidos</h1>
      {orders.length === 0 ? (
        <div className="emptyState">
          <strong>Você não tem nenhum pedido pendente</strong>
          <Link to="/cardapio">
            <button className="matter-button-outlined">Ver cardápio</button>
          </Link>
        </div>
      ) : (
        <div className="page--checkout__list">
          {orders.map((order, orderIndex) => (
            <div className="order-item" key={orderIndex}>
              <div>{convertOrderItensIntoDescription(order.plates)}</div>
              <div>{currency.format(order.price)}</div>
              <strong>Status: {
                order.status === 'awaiting_payment' ? 'Aguardando confirmação de pagamento' :
                order.status === 'pending' ? 'Pendente' :
                order.status === 'in_preparation' ? `Em preparo. Estimativa: ${relativeTime.format(order.preparationTimeEstimate, 'minutes').replace(/em /gi, '')}` :
                order.status === 'ready_for_delivery' ? (
                  order.deliveryType === 'retirada' ? 'Pronto para retirada!' : 'Aguardando o entregador'
                ) :
                order.status === 'on_the_way' ? `Entregador a caminho. Chega ${relativeTime.format(configs.averageDeliveryDuration, 'minutes')}` :
                order.status === 'delivered' ? 'Entregue!' :
                null
              }</strong>
              {order.status !== 'delivered' && (
                <button
                  onClick={() => handleClick(orderIndex, order)}
                  style={{ color: 'black' }}
                >Alterar status</button>
              )}
            </div>
          ))}
        </div>
      )}
    </PageWrapper>
  );
}

export default OrdersPage