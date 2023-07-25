import { getDbData, listAllDb, saveDb, setFile } from './fsMethods'
import { createNewDbPrompt } from '../menuPrompts/createDbFile'
import { newSpentPrompt } from '../menuPrompts/newSpentPrompt'
import { selectDbFile } from '../menuPrompts/selectDbFile'

export const createDb = async () => {
  const newDb = await createNewDbPrompt()
  await setFile(newDb.dbName)
}

export const newSpent = async () => {
  const fileList = await listAllDb()
  const selectedFile = await selectDbFile(fileList)
  const spent = await newSpentPrompt()
  const dbData = await getDbData(selectedFile.name)
  await saveDb(selectedFile.name, [...dbData, spent])
}
