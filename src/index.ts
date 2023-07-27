import { Answers } from 'inquirer'
import { createDb, deleteSpent, newSpent, removeDB, showSpents } from './helpers/tasks'
import { mainMenuPrompt } from './menuPrompts/mainMenu'

const main = async () => {
  let run = true
  // start
  while (run) {
    const mainMenuAnswer: Answers = await mainMenuPrompt()

    switch (mainMenuAnswer.mainMenu) {
      case 'createDb':
        await createDb()
        break
      case 'removeDB':
        await removeDB()
        break
      case 'newSpent':
        await newSpent()
        break
      case 'showSpents':
        await showSpents()
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
