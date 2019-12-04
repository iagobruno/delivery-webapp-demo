import React from 'react'
import { configs } from '../data'
// @ts-ignore
import Map from '../../static/map.jpg'
// @ts-ignore
import MoneyIcon from '../../static/MONEY.webp'
// @ts-ignore
import RDRESTIcon from '../../static/RDREST.webp'
// @ts-ignore
import RECIcon from '../../static/REC.webp'
// @ts-ignore
import DNRESTIcon from '../../static/DNREST.webp'
// @ts-ignore
import VSRESTIcon from '../../static/VSREST.webp'

const Footer: React.FunctionComponent = () => (
  <footer className="footer">
    <h1 className="footer__title">{configs.title}</h1>
    <div className="footer__columns center">
      <div>
        <div className="footer__column__title">Horários de Funcionamento</div>
        <div>
          {Object.entries(configs.deliveryTime).map(([dayOfWeek, hours]) => (
            <p key={dayOfWeek}>{dayOfWeek}: {hours === null ? 'Não abre' : hours}</p>
          ))}
        </div>
      </div>
      <div>
        <div className="footer__column__title">Como chegar</div>
        <div>
          <img className="mapImage" src={Map} /><br/>
          {configs.randomPlace} <br/> Fone {configs.fakePhone}
        </div>
      </div>
      <div>
        <div className="footer__column__title">Formas de pagamento</div>
        <div>
          Dinheiro:<br/>
          <img src={MoneyIcon} height={26} /><br/>
          Cartão de Crédito:<br/>
          <img src={RDRESTIcon} height={26} />{' '}
          <img src={RECIcon} height={26} />{' '}
          <img src={DNRESTIcon} height={26} />{' '}
          <img src={VSRESTIcon} height={26} /><br/><br/>
          Não aceitamos cheques.<br/>
          Aceitamos Ticket Restaurante, VisaVale e Sodexo.
        </div>
      </div>
    </div>
    <div className="footer__infos">
      <a href="https://www.iagobruno.com/">Criado e hospedado por Iago Bruno</a>
    </div>
  </footer>
)

export default Footer
