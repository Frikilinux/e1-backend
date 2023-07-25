import inquirer from 'inquirer'
import uuid from '../utils/uuid'

export const newSpentPrompt = async () => {
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

  return { ...spent, date: `${new Date()}`, id: uuid() }
}
