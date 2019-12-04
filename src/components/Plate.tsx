import React from 'react'
import { PlateInterface } from '../common/types'
import { useStore } from '../store'
import Price from './Price'

type Props = PlateInterface;

const Plate: React.FunctionComponent<Props> = (infos) => {
  const { actions } = useStore()

  return (
    <div
      className={`plate ${infos.canBePurchasedOnline === false ? 'cannotBePurchasedOnline' : ''}`}
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
        {infos.canBePurchasedOnline === false && <span className="plate__badge">Somente na loja</span>}
      </div>
    </div>
  );
}

export default Plate
