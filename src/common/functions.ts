import { configs } from '../data'

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
