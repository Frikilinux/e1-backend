import inquirer from 'inquirer'
import ListPrompt from 'inquirer/lib/prompts/list'

export const mainMenuPrompt = async (): Promise<ListPrompt> => {
  return await inquirer.prompt([
    {
      type: 'list',
      name: 'mainMenu',
      message: 'Seleccione una acción:',
      choices: [
        {
          value: 'createDb',
          name: 'Crear Base de datos',
        },
        {
          value: 'removeDB',
          name: 'Eliminar una Base de datos',
        },
        {
          value: 'newSpent',
          name: 'Añadir un gasto',
        },
        {
          value: 'showSpents',
          name: 'Mostrar todos los gastos',
        },
        {
          value: 'deleteSpent',
          name: 'Eliminar un gasto',
        },
        new inquirer.Separator(),
        {
          value: 'quit',
          name: 'Salir',
        },
      ],
    },
  ])
}
