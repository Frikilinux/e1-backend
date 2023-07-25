import { getDbData, listAllDb, saveDb } from './fsMethods'
import { createNewDbPrompt } from '../menuPrompts/createDbFile'
import { newSpentPrompt } from '../menuPrompts/newSpentPrompt'
import { selectList } from '../menuPrompts/selectDbFile'

export const createDb = async () => {
  const newDb = await createNewDbPrompt()
  await saveDb({
    fileName: newDb.dbName,
    message: `Creada la DB ${newDb.dbName}`,
  })
}

export const newSpent = async () => {
  const fileList = await listAllDb()
  const selectedFile = await selectList(
    fileList,
    'Seleccione una base de datos'
  )
  const spent = await newSpentPrompt()
  const dbData = await getDbData(selectedFile.name)
  await saveDb({
    fileName: selectedFile.name,
    content: [...dbData, spent],
    message: 'Nuevo gasto añadido',
  })
}

export const deleteSpent = async () => {
  const fileList = await listAllDb()
  const selectedFile = await selectList(
    fileList,
    'Seleccione una base de datos'
  )

  const dbData = await getDbData(selectedFile.name)

  const spentsData = async () => {
    return [...dbData].map(({ id, product }) => {
      return {
        value: id,
        name: product,
      }
    })
  }
  const selectedSpent = await selectList(spentsData, 'Seleccione un gasto')

  const newData:[] = [...dbData].filter(
    (spent) => spent.id !== selectedSpent.name
  )

  await saveDb({
    fileName: selectedFile.name,
    content: newData,
    message: 'Gasto eliminado',
  })
}
