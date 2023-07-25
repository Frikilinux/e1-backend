import inquirer from 'inquirer'
import { listAllDb } from '../helpers/fsMethods'

// Any everywere
export const selectDbFile = async (dbFiles: any) => {
  return await inquirer.prompt([
    {
      type: 'list',
      name: 'name',
      message: 'Selecione una base de datos',
      choices: dbFiles
    },
  ])
}
