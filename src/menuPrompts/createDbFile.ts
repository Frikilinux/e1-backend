import inquirer, { InputQuestion } from 'inquirer'

export const createNewDbPrompt = async (): Promise<InputQuestion> => {
  return await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Ingrese el nombre de la db:',
    },
  ])
}
