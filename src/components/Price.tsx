import React from 'react'
import { currency } from '../common/constants'

type Props = {
  value: number | undefined,
  discount?: number,
  className?: string,
  children?: never,
}

const Price: React.FunctionComponent<Props> = ({ value, discount, className = '' }) => (<>
  {typeof discount !== 'undefined' ? (
    // Tem desconto
    <div className={`plate__discount ${className}`}>
      {value === undefined ? (
        // Se NÃO tiver um preço inicial, mostrar o valor do desconto
        `-${currency.format(discount)} no preço final`
      ) : (
        // Se tiver um preço inicial, mostrar o preço final com desconto
        <>
          {currency.format(value - discount)}
          <div className={`plate__price`}>{currency.format(value)}</div>
        </>
      )}
    </div>
  ) : (
    // Não tem desconto
    value && <div className={`plate__price ${className}`}>{currency.format(value)}</div>
  )}
</>);

export default Price
