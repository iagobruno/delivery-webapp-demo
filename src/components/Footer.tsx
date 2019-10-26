import React from 'react'
import { configs } from '../data'

const Footer: React.FunctionComponent = () => (
  <footer>
    <h1 className="footer__title">{configs.title}</h1>
    <div className="footer__columns center">
      <div>
        <div className="footer__column__title">Horários de Funcionamento</div>
        <p>
          {Object.entries(configs.deliveryTime).map(([dayOfWeek, hours]) => (
            <p>{dayOfWeek}: {hours === null ? 'Não abre' : hours}</p>
          ))}
        </p>
      </div>
      <div>
        <div className="footer__column__title">Como chegar</div>
        <p>
          <img className="mapImage" src="/map.jpg" /><br/>
          {configs.randomPlace} <br/> Fone {configs.fakePhone}
        </p>
      </div>
      <div>
        <div className="footer__column__title">Formas de pagamento</div>
        <p>
          Dinheiro:<br/>
          <img src="MONEY.webp" height={26} /><br/>
          Cartão de Crédito:<br/>
          <img src="RDREST.webp" height={26} />{' '}
          <img src="REC.webp" height={26} />{' '}
          <img src="DNREST.webp" height={26} />{' '}
          <img src="VSREST.webp" height={26} /><br/><br/>
          Não aceitamos cheques.<br/>
          Aceitamos Ticket Restaurante, VisaVale e Sodexo.
        </p>
      </div>
    </div>
    <div className="footer__infos">
      <a href="https://www.iagobruno.com/">Criado e hospedado por Iago Bruno</a>
    </div>
  </footer>
)

export default Footer
