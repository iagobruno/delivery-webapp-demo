import React from 'react'
import { currency } from '../common/constants'
import { PlateType } from '../data'

type Props = PlateType;

const Plate: React.FunctionComponent<Props> = (props) => {
  return (
    <div
      className={`plate ${props.cannotBePurchasedOnline ? 'cannotBePurchasedOnline' : ''}`}
    >
      {props.image && (
        <div className="plate__image__container">
          <img className="plate__image" src={props.image} loading="lazy" />
        </div>
      )}
      <h3 className="plate__title">{props.title}</h3>
      {props.description && <p className="plate__description">{props.description}</p>}
      {typeof props.discount !== 'undefined' ? (
        // Tem desconto
        <div className="plate__discount">
          {props.price === null ? (
            // Se NÃO tiver um preço inicial, mostrar o valor do desconto
            `-${currency.format(props.discount)} no preço final`
          ) : (
            // Se tiver um preço inicial, mostrar o preço final com desconto
            <>
              {currency.format(props.price - props.discount)}
              <div className="plate__price">{currency.format(props.price)}</div>
            </>
          )}
        </div>
      ) : (
        // Não tem desconto
        props.price && <div className="plate__price">{currency.format(props.price)}</div>
      )}
    </div>
  );
}

export default Plate
