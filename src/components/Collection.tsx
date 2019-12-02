import React, { ReactNode, useMemo } from 'react'
import { menu, PlateType } from '../data'

import Plate from './Plate'

type Props = {
  title: string,
  listOfIds: number[],
  children?: never,
}

const Collection: React.FunctionComponent<Props> = ({ title, listOfIds }) => {
  const plates = useMemo(() => convertIdListToPlateList(listOfIds), [...listOfIds])

  return (
    <section className="collection">
      <h2 className="collection__title">{title}</h2>
      <div className="collection__list">
        {plates.map(plate => (
          <Plate
            key={plate.id}
            {...plate}
          />
        ))}
      </div>
    </section>
  );
}

function convertIdListToPlateList(listOfIds: Props['listOfIds']) {
  return listOfIds
    .map((id) => (
      menu.find(plate => plate.id === id)
    ))
    .filter(plate => typeof plate !== 'undefined') as PlateType[]
}

export default Collection
