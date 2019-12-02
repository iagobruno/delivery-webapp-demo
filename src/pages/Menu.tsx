import React, { useState, useMemo, Fragment } from 'react'
import { availableKinds } from '../data'
import { useMenuFilter } from '../common/hooks'
import { isEmptyObject } from '../common/functions'

import Page from '../components/Page'
import Collection from '../components/Collection'
import Plate from '../components/Plate'

const MenuPage: React.FunctionComponent = () => {
  const {
    filters,
    setFilter,
    clearFilters,
    filteredMenu,
  } = useMenuFilter(['kind', 'price', 'withDiscount', 'customizable'])

  function buttonAttrs(key: string, value: string | boolean) {
    return {
      disabled: filters[key] !== null && filters[key] !== value,
      onClick: () => setFilter(key, value),
      title: filters[key] !== null && filters[key] === value ? 'Clique para remover este filtro' : undefined,
    }
  }

  function filterItemClassName(key: string) {
    return `filters__item ${filters[key] !== null ? 'filters__item--filled' : ''}`
  }

  return (
    <Page id="menu">
      <h1>Cardápio</h1>
      <div className="filters">
        <div
          data-label="Limpar"
          className="filters__item"
          style={{ display: (isEmptyObject(filters, null) ? 'none' : 'block') }}
        >
          <button className="matter-button-outlined" onClick={clearFilters} title="Limpar filtros">&times;</button>
        </div>

        <div
          className={filterItemClassName('kind')}
          data-label="Tipo"
        >
          {availableKinds.map(kind => (
            <Fragment key={kind}>
              <button className="matter-button-outlined" {...buttonAttrs('kind', kind)}>{kind}</button>
              <span />
            </Fragment>
          ))}
        </div>
        <div
         className={filterItemClassName('price')}
         data-label="Ordenar por"
        >
          <button className="matter-button-outlined" {...buttonAttrs('price', 'cheap')}>Mais baratos</button>
          <span />
          <button className="matter-button-outlined" {...buttonAttrs('price', 'expensive')}>Mais caros</button>
        </div>
        <div
          className={filterItemClassName('withDiscount')}
        >
          <button className="matter-button-outlined" {...buttonAttrs('withDiscount', true)}>Com desconto</button>
        </div>
        <div
          className={filterItemClassName('customizable')}
        >
          <button className="matter-button-outlined" {...buttonAttrs('customizable', true)}>Personalizável</button>
        </div>
      </div>

      <div className="collection">
        <div className="collection__list">
          {filteredMenu.length === 0 &&  (
            <div className="emptyState">
              <strong>Nenhum prato encontrado :(</strong>
              <button className="matter-button-outlined" onClick={clearFilters}>Limpar filtros</button>
            </div>
          )}
          {filteredMenu.map(plate => (
            <Plate
              key={plate.id}
              {...plate}
            />
          ))}
        </div>
      </div>
    </Page>
  )
}

export default MenuPage