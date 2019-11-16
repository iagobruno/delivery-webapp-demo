import React from 'react'
import { PlateType } from '../data'
import Price from './Price'

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
      <Price value={props.price} discount={props.discount} />
    </div>
  );
}

export default Plate
