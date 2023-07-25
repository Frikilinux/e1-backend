import inquirer from 'inquirer'

export const newSpentPrompt = async () => {
  return await inquirer.prompt([
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
}
