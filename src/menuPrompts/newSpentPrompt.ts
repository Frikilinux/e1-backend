import inquirer from 'inquirer'
import uuid from '../utils/uuid'

interface IUser {
  product: string,
  price: number,
  date: string,
  id: string
};

export const newSpentPrompt = async (): Promise<IUser> => {
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
