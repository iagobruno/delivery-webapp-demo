import React, { useMemo } from 'react'
import { currency } from '../common/constants'
import { FieldOptionInterface, PlateFieldInterface } from '../common/types'
import { useFormikContext, FormikValues } from 'formik'

type Props = Pick<PlateFieldInterface, 'limit' | 'atLeast' | 'options'> & {
  /** Título da sessão que será mostrado para o usuário e também será usada como chave para identificar o campo no estado do Formik. */
  label: string;
}

const ChoiceField: React.FunctionComponent<Props> = ({ label, limit = Infinity, atLeast = 0, options }) => {
  const formik = useFormikContext<FormikValues>()

  function handleChange(checked: boolean, item: FieldOptionInterface) {
    let oldFieldValue = [...formik.values[label]]
    let newFieldValue;

    if (checked) {
      if (oldFieldValue.length >= limit) {
        oldFieldValue.shift()
      }

      // Adicionar item na lista de selecionados
      newFieldValue = [...oldFieldValue, item]
    } else {
      // Remover item da lista de selecionados
      newFieldValue = oldFieldValue.filter(opt => opt.id !== item.id)
    }

    formik.setFieldValue(label, newFieldValue)
  }

  const isRadioOrCheckbox = limit === 1 ? 'radio' : 'checkbox'

  return (
    <div className="plate-modal__choice-list">
      <strong className="plate-modal__choice-list__title">{label}</strong>
      {formik.errors[label] && formik.touched[label] ? (
        <div className="plate-modal__choice-list__error">{formik.errors[label]}</div>
      ) : (
        <div className="plate-modal__choice-list__tip">
          Escolha {limit === Infinity ? 'quantas opções quiser' : `${limit} ${limit === 1 ? 'opção' : 'opções'}`}
        </div>
      )}
      {options.map(item => (
        <label
          className={`plate-modal__choice-list__item matter-${isRadioOrCheckbox}`}
          key={item.id}
        >
          <input
            type={isRadioOrCheckbox}
            onChange={(evt) => handleChange(evt.target.checked, item)}
            checked={formik.values[label].find(opt => opt.id === item.id) !== undefined}
          />
          <span>
            <span className="plate-modal__choice-list__item__title">{item.title}</span>
            {item.description && (
              <span className="plate-modal__choice-list__item__description">{item.description}</span>
            )}
            {item.price !== undefined && item.price !== 0 && (
              <span className="plate-modal__choice-list__item__price">+ {currency.format(item.price)}</span>
            )}
          </span>
        </label>
      ))}
    </div>
  )
}

export default ChoiceField
