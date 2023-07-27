import inquirer from 'inquirer'
import uuid from '../utils/uuid'
import { Spent } from '../interfaces/interfaces'
import moment from 'moment'

export const newSpentPrompt = async (): Promise<Spent> => {
  const spent = await inquirer.prompt([
    {
      type: 'input',
      name: 'product',
      message: 'Producto adquirido:',
    },
    {
      type: 'number',
      name: 'price',
      message: 'Importe del consumo: $',
    },
  ])

  return {
    ...spent,
    date: `${moment().format('D MMMM YYYY, HH:mm')}`,
    id: uuid(),
  }
}
