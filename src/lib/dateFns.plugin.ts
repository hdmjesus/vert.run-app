import {
  compareAsc,
  format,
  isSameDay,
  parse,
  parseISO,
  differenceInYears,
  isToday,
  differenceInWeeks,
  intlFormatDistance,
  formatDistanceToNow
} from 'date-fns'
import { es } from 'date-fns/locale'

const compareDates = (date1: string, date2: string) => {
  const dateParseIsoOne = parseISO(date1)
  const dateParseIsoTwow = parseISO(date2)
  return compareAsc(dateParseIsoOne, dateParseIsoTwow)
}

const getBirthday = (date: number) => {
  const fechaNacimiento = new Date(date)
  const fechaActual = new Date()

  const edad = differenceInYears(fechaActual, fechaNacimiento)
  return edad
}

const formartDate = (date: string | Date | number, formatString: string) => {
  let dateToFormat: Date

  if (!date) {
    return ''
  }
  // Si es una cadena numérica larga, convertirla a número y luego a Date
  if (typeof date === 'string' && /^\d+$/.test(date)) {
    dateToFormat = new Date(Number(date))
  }
  // Si es una cadena en formato ISO
  else if (typeof date === 'string') {
    dateToFormat = parseISO(date)
  }
  // Si es un número (timestamp)
  else if (typeof date === 'number') {
    dateToFormat = new Date(date)
  }
  // Si es un objeto Date
  else if (date instanceof Date) {
    dateToFormat = date
  } else {
    throw new Error('Formato de fecha no válido')
  }

  return format(dateToFormat, formatString, { locale: es })
}

const getDistanceDate = (date1: string, date2: string) => {
  const dateParseIso1 = parseISO(date1)
  const dateParseIso2 = parseISO(date2)
  intlFormatDistance(dateParseIso1, dateParseIso2)
}

const isSameDateDay = (dateLeft: string, dateRight: string): boolean => {
  const dateParseIso1 = parseISO(dateLeft)
  const dateParseIso2 = parseISO(dateRight)
  return isSameDay(dateParseIso1, dateParseIso2)
}

const isMoreThanWeek = (dateLeft: string): boolean => {
  const dateParseIso1 = parseISO(dateLeft)
  const weeks = differenceInWeeks(new Date(), dateParseIso1)
  return weeks > 1
}

const parseDate = (date: string, formatString: string) => {
  return parse(date, formatString, new Date())
}

const getFormatDistanceToNow = (date: string) => {
  const dateParseIso1 = parseISO(date)
  const fromNow = formatDistanceToNow(dateParseIso1, {
    locale: es,
    addSuffix: false
  })

  return `${fromNow}`
}

const getFormatDistanceToNowValue = (date: string) => {
  const dateParseIso1 = parseISO(date)
  const fromNow = formatDistanceToNow(dateParseIso1, { locale: es })
  return fromNow
}
const isTodayDate = (date: string) => {
  const dateParseIso1 = parseISO(date)
  return isToday(dateParseIso1)
}

export {
  compareDates,
  formartDate,
  parseDate,
  getBirthday,
  isSameDateDay,
  isMoreThanWeek,
  getDistanceDate,
  getFormatDistanceToNowValue,
  getFormatDistanceToNow,
  isTodayDate
}
