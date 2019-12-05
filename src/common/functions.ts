import { configs } from '../data'
import { BagItemInterface, PlateInterface, PlateModalFormikValues } from '../common/types'

const daysOfWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

type BusinessSchedule = typeof configs.deliveryTime

/**
 * @see https://gist.github.com/iagobruno/b39211ff046892bbed95ce749c241a11
 */
export function checkIfBusinessIsOpen(schedule: BusinessSchedule): boolean {
  const now = new Date()
  const currentDayOfWeek = daysOfWeek[now.getDay()]
  const schedulesOfToday = schedule[currentDayOfWeek]

  if (schedulesOfToday === '24 hours') return true;
  if (schedulesOfToday === null) return false;

  const hours = schedulesOfToday.split('às')
  const openAt = format(hours[0])
  const closesAt = format(hours[1])

  return (now.getTime() >= openAt && now.getTime() <= closesAt)

  function format(hours: string) {
    return new Date(`${now.getMonth()+1}/${now.getDate()}/${now.getFullYear()} ${hours.trim()}`).getTime()
  }
}

/**
 * Fazer um loop em todos os campos e retornar somente os itens que
 * são selecionados por padrão para povoar o estado inicial do Formik.
 */
export function getAllDefaultSelectedFieldOptions(
  fields: PlateInterface['fields'] = {}
): PlateModalFormikValues {
  const entries = Object.entries(fields)
    .map(([key, field]) => {
      return [key, field.options.filter(opt => opt.selectedByDefault === true)]
    })

  return Object.fromEntries(entries)
}

/**
 * Calcular o preço do prato com base nas opções escolhidas.
 */
export function calcPrice(
  initialPrice: number = 0,
  formikValues: PlateModalFormikValues = {},
  repetition: number = 1,
  discount: number = 0
): number {
  const fields = Object.values(formikValues)
    .flat(1)
    .filter(isObject)
  const choicesPrice = fields.reduce((lastValue, item) => (
    lastValue + (item.price || 0)
  ), 0)

  return (initialPrice + choicesPrice - discount) * repetition
}

/**
 * Somar o preço de todos os itens da sacola.
 */
export function sumAllPlatesPriceInBag(bagList: BagItemInterface[]): number {
  return bagList.reduce(
    (last, current) => last + (current.priceCache || 0),
    0
  )
}

function isObject(obj: any) {
  return typeof obj === 'object' && !Array.isArray(obj)
}

export function isEmptyObject(obj: Record<any, any>, valueToCheck: any = undefined) {
  let result = true

  for (const key in obj) {
    if (obj[key] !== valueToCheck) {
      result = false
      break;
    }
  }

  return result
}

/**
 * @example
 * convertArrayIntoObject(['um', 'dois']) // { 'um': undefined, 'dois': undefined }
 */
export function convertArrayIntoObject<I extends string>(arr: I[], defaultValue: any = null) {
  return arr.reduce((obj, current) => ({
    ...obj,
    [current]: defaultValue
  }), {})
}

export function convertOrderItensIntoDescription(
  fields: PlateModalFormikValues | BagItemInterface[]
): string {
  const itens = Array.isArray(fields) ? fields : Object.values(fields)

  return itens
    .flat(1)
    .map(item => `${item.repetition > 1 ? `${item.repetition}x ` : ''}${item.title}`)
    .join(', ')
}

export function calcPercentage(percentage: number, total: number): number {
  return (percentage / 100) * total
}