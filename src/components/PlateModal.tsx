import React, { useMemo } from 'react'
import { useStore } from '../store'
import { json } from 'overmind'
import { currency } from '../common/constants'
import { useLockBodyScroll, useKeyPress } from '../common/hooks'
import { calcPrice, getAllDefaultSelectedFieldOptions } from '../common/functions'
import { BagItemInterface, PlateInterface } from '../common/types'
// @ts-ignore
import starIcon from '../../static/star-icon.svg'

import { Formik, Form, Field, FormikValues } from 'formik'
import ChoiceField from './ChoiceField'

/**
 * Lembrete para o meu eu do futuro: Só nesse componente está acontecendo 6 loops a cada renderização
 * e fazendo uma análise dá pra reduzir para 3 loops com uma refatoração de performance.
 */
const PlateModal: React.FunctionComponent = () => {
  const { state, actions } = useStore()
  const plate = json(state.currentPlateModalInfos) as BagItemInterface

  useLockBodyScroll()
  useKeyPress('Escape', actions.closeModal)

  const initialFieldValues = useMemo(() => (
    plate.chosenFields ?? getAllDefaultSelectedFieldOptions(plate.fields)
  ), [])

  function handleSubmit(formValues) {
    const { repetition, observations, ...fields } = formValues
    const newItem = {
      ...plate,
      chosenFields: fields,
      repetition,
      observations,
      priceCache: calcPrice(plate.price, fields, repetition, plate.discount)
    }

    if (state.itemIndexToReplace !== undefined) {
      actions.replaceItemInBag({
        updatedItem: newItem,
        index: state.itemIndexToReplace
      })
    } else {
      actions.addToBag(newItem)
    }
    actions.closeModal()
  }

  return (
    <div className="plate-modal__container">
      <div className="plate-modal__backdrop" onClick={actions.closeModal} />
      <div className="plate-modal">
        <div className="plate-modal__close-button" onClick={actions.closeModal} />
        <div className="plate-modal__left-column">
          <img className="plate-modal__image" src={plate.image} />
          {plate.showRating !== false && (
            <div className="plate-modal__rating">
              <div className="stars">{Array(5).fill(null).map((_, index) => <img key={index} src={starIcon} />)}</div>
              12 Avaliações
            </div>
          )}
        </div>
        <Formik
          initialValues={{
            ...initialFieldValues,
            observations: plate.observations ?? '',
            repetition: plate.repetition ?? 1,
          }}
          validate={(values) => handleValidation(plate.fields, values)}
          onSubmit={handleSubmit}
          validateOnMount
        >{({ values, isValid, setFieldValue }) => (
          <Form className="plate-modal__form">
            <div className="plate-modal__infos">
              <h1 className="plate-modal__title">{plate.title}</h1>
              {plate.description && <p className="plate-modal__description">{plate.description}</p>}
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
                <Field
                  as="textarea"
                  name="observations"
                  placeholder="Exemplo: tirar a cebola, maionese à parte etc."
                />
              </label>
            </div>

            <div className="plate-modal__buttons">
              <div style={{ flex: 1 }}>
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
                <div className="plate-modal__final-price">
                  {currency.format(calcPrice(plate.price, values as any, values.repetition, plate.discount))}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="plate-modal__form__submit matter-button-contained"
                  disabled={!isValid}
                  children={state.itemIndexToReplace !== undefined ? 'Atualizar item' : 'Adicionar à sacola'}
                />
              </div>
            </div>
          </Form>
        )}</Formik>
      </div>
    </div>
  )
}

function handleValidation(plateFields: PlateInterface['fields'] = {}, values: FormikValues) {
  let errors = {} as Record<string, any>

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

const PlateModalController: React.FC = () => {
  const { state } = useStore()
  return state.plateModalIsOpen && state.currentPlateModalInfos
    ? <PlateModal />
    : null
}

export default PlateModalController
