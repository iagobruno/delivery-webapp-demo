import React, { useMemo } from 'react'
import { useStore } from '../store'
import { json } from 'overmind'
import { configs, PlateField, FieldOption, PlateType } from '../data'
import { useLockBodyScroll, useKeyPress } from '../common/hooks'
import { currency } from '../common/constants'
import { calcFinalPrice, FormikValues, getAllDefaultSelectedFieldOptions } from '../common/functions'

import { Formik, Form, useFormikContext } from 'formik'
import Price from './Price'

const PlateModal: React.FunctionComponent = () => {
  const { state, actions } = useStore()
  const plate = json(state.currentPlateModalInfos) as PlateType

  useLockBodyScroll()
  useKeyPress('Escape', actions.closeModal)

  const initialFieldValues = useMemo(() => (
    getAllDefaultSelectedFieldOptions(plate.fields)
  ), [])

  return (
    <div className="plate-modal__container">
      <div className="plate-modal__backdrop" onClick={actions.closeModal} />
      <div className="plate-modal">
        <div className="plate-modal__close-button" onClick={actions.closeModal} />
        <img className="plate-modal__imagem" src={plate.image} />
        <Formik
          initialValues={{
            ...initialFieldValues,
            observations: '',
            repetition: 1,
          }}
          validate={(values) => handleValidation(plate.fields, values)}
          onSubmit={(values) => {
            console.log(values)
          }}
          validateOnMount
        >{({ isValid, values, handleChange, setFieldValue }) => (
          <Form className="plate-modal__form">
            <div className="plate-modal__infos">
              <h1 className="plate-modal__title">{plate.title}</h1>
              {plate.description && <p className="plate-modal__description">{plate.description}</p>}
              <Price value={plate.priceEstimate || plate.price} discount={plate.discount} />
              {plate.fields && (
                Object.entries(plate.fields).map(([label, field]) => (
                  <ChoiceField
                    key={label}
                    label={label}
                    {...field}
                  />
                ))
              )}
              <label className="plate-modal__form__observations matter-textfield-filled">
                <strong>Algum comentário?</strong>
                <textarea
                  name="observations"
                  value={values.observations}
                  onChange={handleChange}
                  placeholder="Exemplo: tirar a cebola, maionese à parte etc."
                />
              </label>
            </div>

            <div className="plate-modal__buttons">
              <div className="plate-modal__repetition">
                <button
                  type="button"
                  className="matter-button-outlined"
                  onClick={() => setFieldValue('repetition', Math.max(1, values.repetition-1))}
                  disabled={values.repetition <= 1}
                  children="–"
                />
                <span>{values.repetition}</span>
                <button
                  type="button"
                  className="matter-button-outlined"
                  onClick={() => setFieldValue('repetition', values.repetition+1)}
                  children="+"
                />
              </div>
              <div>
                <div className="plate-modal__final-price">
                  {currency.format(calcFinalPrice(plate.price, values, values.repetition, plate.discount))}
                </div>
                <button
                  type="submit"
                  className="plate-modal__form__submit matter-button-contained"
                  disabled={!isValid}
                >Adicionar a sacola</button>
              </div>
            </div>
          </Form>
        )}</Formik>
      </div>
    </div>
  )
}

function handleValidation(plateFields: PlateType['fields'] = {}, values: FormikValues) {
  let errors = {}

  // Percorrer todos os campos e verificar se o usuário escolheu o número certo de itens em cada campo
  Object.entries(plateFields).forEach(([label, field]) => {
    if (field.atLeast && values[label].length < field.atLeast) {
      errors[label] = `Selecione pelo menos ${field.atLeast} ${field.atLeast === 1 ? 'item' : 'itens'}.`
    }
    if (field.limit && values[label].length > field.limit) {
      errors[label] = `Selecione no máximo ${field.limit} ${field.limit === 1 ? 'item' : 'itens'}.`
    }
  })

  if (values.repetition < 1) {
    errors.repetition = 'O mínimo é 1!'
  }

  return errors
}

type ChoiceFieldProps = Pick<PlateField, 'limit' | 'atLeast' | 'options'> & {
  /** Título da sessão que será mostrado para o usuário e também será usada como chave para identificar o campo no estado do Formik. */
  label: string;
}

const ChoiceField: React.FC<ChoiceFieldProps> = ({ label, limit = Infinity, atLeast = 0, options }) => {
  const formik = useFormikContext<FormikValues>()

  function handleChange(checked: boolean, item: FieldOption) {
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

const PlateModalController: React.FC = () => {
  const { state } = useStore()
  return state.plateModalIsOpen ? <PlateModal /> : null
}

export default PlateModalController
