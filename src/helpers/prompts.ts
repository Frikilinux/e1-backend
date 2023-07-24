import inquirer from 'inquirer'

export const createNewDbPrompt = async () => {
  return await inquirer.prompt([
    {
      type: 'input',
      name: 'dbName',
      message: 'Ingrese el nombre de la db:',
    },
  ])
}
