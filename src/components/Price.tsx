import React from 'react'
import { currency } from '../common/constants'

type Props = {
  value: number | undefined,
  discount?: number,
  className?: string,
  children?: never,
}

const Price: React.FunctionComponent<Props> = ({ value, discount, className = '' }) => (<>
  {discount === undefined || value === discount ? (
    // Não tem desconto
    value && <div className={`plate__price ${className}`}>{currency.format(value)}</div>
  ) : (
    // Tem desconto
    <div className={`plate__discount ${className}`}>
      {value === undefined ? (
        // Se NÃO tiver um preço inicial, mostrar o valor do desconto
        `-${currency.format(discount)} no preço final`
      ) : (
        // Se tiver um preço inicial, mostrar o preço final com desconto
        <>
          <div className={`plate__price`}>{currency.format(value)}</div>
          {currency.format(value - discount)}
        </>
      )}
    </div>
  )}
</>);

export default Price
