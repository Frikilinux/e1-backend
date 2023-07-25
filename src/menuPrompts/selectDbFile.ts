import inquirer from 'inquirer'
import { listAllDb } from '../helpers/fsMethods'

// Any everywere
export const selectList = async (dbFiles: any, message: string) => {
  return await inquirer.prompt([
    {
      type: 'list',
      name: 'name',
      message,
      choices: dbFiles
    },
  ])
}
