import { creatFile } from "./fsMethods"
import { createNewDbPrompt } from "./prompts"

export const createDb = async () => {

  const newDb = await createNewDbPrompt()
  creatFile(newDb.dbName)
}
