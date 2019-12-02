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
      <div className="row">
        <Price value={infos.priceEstimate || infos.price} discount={infos.discount} />
        {infos.cannotBePurchasedOnline && <span className="plate__badge">Somente na loja</span>}
      </div>
    </div>
  );
}

export default Plate
