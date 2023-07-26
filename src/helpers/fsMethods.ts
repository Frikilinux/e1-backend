import chalk from 'chalk'
import fs from 'fs'

interface IUser {
  product: string
  price: number
  date: string
  id: string
}

interface dbList {
  value: string
  name: string
}

interface saveDbOptions {
  fileName?: string
  content?: IUser[]
  message?: string
}

export const saveDb = ({
  fileName,
  content = [],
  message,
}: saveDbOptions): Promise<void> => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./${fileName}.json`, JSON.stringify(content), (err) => {
      if (err) {
        reject(err)
      }
      resolve(console.log(chalk.blue.bold(message)))
    })
  })
}

export const listAllDb = (dbFolder: string = './'): Promise<dbList[]> => {
  return new Promise((resolve, reject) => {
    fs.readdir(dbFolder, (err, files) => {
      err && reject(err)
      resolve(
        files.map((file) => ({
          value: file.split('.json').join(''),
          name: file,
        }))
      )
    })
  })
}

export const getDbData = (fileName: string): Promise<IUser[]> => {
  return new Promise((resolve, reject) => {
    fs.readFile(`./${fileName}.json`, 'utf8', (err, content) => {
      err && reject(err)
      resolve(JSON.parse(content))
    })
  })
}
