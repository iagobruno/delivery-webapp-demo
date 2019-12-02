import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { configs } from '../data'
import { checkIfBusinessIsOpen } from '../common/functions'

type Props = {
  mode?: 'compact' | 'expanded'
  children?: never,
}

const Header: React.FunctionComponent<Props> = ({ mode = 'compact' }) => {
  const isOpenNow = useMemo(() => checkIfBusinessIsOpen(configs.deliveryTime), [])

  return (
    <header className={`header--${mode}`}>
      {mode === 'expanded' && <img className="header__cover" src={configs.headerCover} />}
      <div className="header__alignBottom center">
        <div className="col">
          <Link to="/">
            <h1 className="header__title">{configs.title}</h1>
          </Link>
          <p className="header__infos">
            <span className={`header__infos__status ${isOpenNow ? 'opened' : 'closed'}`}>
              {isOpenNow ? 'Aberto!' : 'Fechado'}
            </span>{' • '}
            {configs.randomPlace}{' • '}
            Entrega {configs.averageDeliveryDuration}
          </p>
        </div>
        <div className="col">
          <button className="matter-button-contained big">
            <img src="/logo-whatsapp.svg"/>
            <span>{configs.fakePhone}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header
