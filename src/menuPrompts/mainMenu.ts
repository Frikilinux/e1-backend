import inquirer from 'inquirer'

export const mainMenuPrompt = async () => {
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
          value: 'newSpent',
          name: 'Añadir un gasto',
        },
        {
          value: 'quit',
          name: 'Quit',
        },
      ],
    },
  ])
}
