import inquirer from 'inquirer'
import { createDb } from './helpers/tasks'

const main = async () => {
  let run = true
// start
  while (run) {
    const action = await inquirer.prompt([
      {
        type: 'list',
        name: 'chosenItem',
        message: 'Seleccione una acción:',
        choices: [
          {
            value: 'createDb',
            name: 'Crear Base de datos',
          },
          {
            value: 'createUser',
            name: 'Crear nuevo usuario',
          },
          {
            value: 'showUsers',
            name: 'Ver gastos totales',
          },
          {
            value: 'quit',
            name: 'quit',
          },
        ],
      },
    ])
    switch (action.chosenItem) {
      case 'createDb':
        createDb()
        break
      case 2:
        console.log('choice 2')
        break
      case 99:
        run = false
        break
      default:
        run = false
        break
    }
  }
}

main()
