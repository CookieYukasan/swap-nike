import classNames, { ArgumentArray } from 'classnames'

export const cn = (...classes: ArgumentArray) => {
  return classNames(...classes)
}