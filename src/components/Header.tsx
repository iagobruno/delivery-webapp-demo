import React, { useMemo } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { configs } from '../data'
import { checkIfBusinessIsOpen } from '../common/functions'
import { relativeTime } from '../common/constants'
import { useStore } from '../store'
// @ts-ignore
import WhatsappIcon from '../../static/logo-whatsapp.svg'

type Props = {
  mode?: 'compact' | 'expanded'
  children?: never,
}

const Header: React.FunctionComponent<Props> = ({ mode = 'compact' }) => {
  const isOpenNow = useMemo(() => checkIfBusinessIsOpen(configs.deliveryTime), [])

  return (
    <>
      <header className={`header--${mode}`}>
        {mode === 'expanded' && <img className="header__cover" src={configs.headerCover} />}
        <div className="header__alignBottom center">
          <div className="col">
            <h1 className="header__title"><Link to="/">{configs.title}</Link></h1>
            <p className="header__infos">
              <span className={`header__infos__status ${isOpenNow ? 'opened' : 'closed'}`}>
                {isOpenNow ? 'Aberto!' : 'Fechado'}
              </span>{' • '}
              {configs.randomPlace}{' • '}
              Entrega {relativeTime.format(configs.averageDeliveryDuration, 'minutes')}
            </p>
          </div>
          <div className="col">
            <button className="matter-button-contained big">
              <img src={WhatsappIcon} />
              <span>{configs.fakePhone}</span>
            </button>
          </div>
        </div>
      </header>

      <NavBar />
    </>
  );
}

const NavBar: React.FunctionComponent = () => {
  const { state: { orders } } = useStore()
  const undeliverableOrders = orders.filter(order => order.status !== 'delivered')

  return (
    <nav className="navbar" role="navigation">
      <ul className="center">
        <li><NavLink exact to="/" className="matter-button-outlined">Página inicial</NavLink></li>
        <li><NavLink to="/cardapio" className="matter-button-outlined">Cardápio</NavLink></li>
        <li><NavLink to="/pedidos" className="matter-button-outlined">
          Meus pedidos
          {undeliverableOrders.length > 0 ? ` (${undeliverableOrders.length})` : ''}
        </NavLink></li>
      </ul>
    </nav>
  )
}

export default Header
