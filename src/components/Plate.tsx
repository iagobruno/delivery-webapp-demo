import React from 'react'
import { PlateType } from '../data'
import { useStore } from '../store'
import Price from './Price'

type Props = PlateType;

const Plate: React.FunctionComponent<Props> = (infos) => {
  const { actions } = useStore()

  return (
    <div
      className={`plate ${infos.cannotBePurchasedOnline ? 'cannotBePurchasedOnline' : ''}`}
      onClick={() => actions.openModal(infos)}
    >
      {infos.image && (
        <div className="plate__image__container">
          <img className="plate__image" src={infos.image} loading="lazy" />
        </div>
      )}
      <h3 className="plate__title">{infos.title}</h3>
      <Price value={infos.priceEstimate || infos.price} discount={infos.discount} />
    </div>
  );
}

export default Plate
