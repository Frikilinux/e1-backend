import inquirer from 'inquirer'
import { createDb, deleteSpent, newSpent } from './helpers/tasks'
import { mainMenuPrompt } from './menuPrompts/mainMenu'

const main = async () => {
  let run = true
  // start
  while (run) {
    const mainMenuAns = await mainMenuPrompt()

    switch (mainMenuAns.mainMenu) {
      case 'createDb':
        await createDb()
        break
      case 'newSpent':
        await newSpent()
        break
      case 'deleteSpent':
        await deleteSpent()
        break
      case 'quit':
        run = false
        break
      default:
        run = false
        break
    }
  }
}

main()
