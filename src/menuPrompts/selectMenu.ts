import inquirer, { InputQuestionOptions } from 'inquirer'
import { ListOptions, Spent } from '../interfaces/interfaces'

export const selectList = async (
  options: ListOptions[],
  message: string
): Promise<InputQuestionOptions> => {
  return await inquirer.prompt([
    {
      type: 'list',
      name: 'name',
      message,
      choices: options,
    },
  ])
}
