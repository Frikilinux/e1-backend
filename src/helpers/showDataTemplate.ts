import chalk from 'chalk'

interface TemplateParams {
  product: string
  price: number
  date: string
}

export const dataTemplate = ({ product, price, date }: TemplateParams): void => {
  console.log(
    `
${chalk.blue('Producto:')} ${chalk.green(product)}
${chalk.blue('Precio:')} ${chalk.green(`$${price}`)}
${chalk.blue('Fecha:')} ${chalk.green(date)}
${chalk.magenta('--------------------------------')}`
  )
}
