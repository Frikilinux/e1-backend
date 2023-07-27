import { getDbData, listAllDb, removeFile, saveDb } from './fsMethods'
import { createNewDbPrompt } from '../menuPrompts/createDbFile'
import { newSpentPrompt } from '../menuPrompts/newSpentPrompt'
import { selectList } from '../menuPrompts/selectMenu'
import { ListOptions, Spent } from '../interfaces/interfaces'
import { Answers } from 'inquirer'
import { dataTemplate } from './showDataTemplate'

export const createDb = async () => {
  const newDb = await createNewDbPrompt()
  await saveDb({
    fileName: newDb.name,
    message: `Creada la DB ${newDb.name}`,
  })
}

export const removeDB = async (): Promise<void> => {
  const fileList = await listAllDb()
  const selectedFile: Answers = await selectList(
    fileList,
    'Seleccione una base de datos'
  )
  await removeFile({
    fileName: selectedFile.name,
    message: `Base de datos ${selectedFile.name} eliminada`,
  })
}

export const newSpent = async (): Promise<void> => {
  const fileList = await listAllDb()
  const selectedFile: Answers = await selectList(
    fileList,
    'Seleccione una base de datos'
  )
  const dbData: Spent[] = await getDbData(selectedFile.name)
  const spent: Spent = await newSpentPrompt()
  await saveDb({
    fileName: selectedFile.name,
    content: [...dbData, spent],
    message: 'Nuevo gasto añadido',
  })
}

export const showSpents = async () => {
  const fileList = await listAllDb()
  const selectedFile: Answers = await selectList(
    fileList,
    'Seleccione una base de datos'
  )
  const dbData: Spent[] = await getDbData(selectedFile.name)

  dbData.forEach((spent) => {
    dataTemplate(spent)
  })
}

export const deleteSpent = async () => {
  const fileList = await listAllDb()
  const selectedFile: Answers = await selectList(
    fileList,
    'Seleccione una base de datos'
  )

  const dbData = await getDbData(selectedFile.name)

  const spentsData = (): ListOptions[] => {
    return [...dbData].map(({ id, product }) => {
      return {
        value: id,
        name: product,
      }
    })
  }
  const selectedSpent: Answers = await selectList(
    spentsData(),
    'Seleccione el gasto a eliminar:'
  )

  const newData: Spent[] = [...dbData].filter(
    (spent) => spent.id !== selectedSpent.name
  )

  await saveDb({
    fileName: selectedFile.name,
    content: newData,
    message: 'Gasto eliminado',
  })
}
