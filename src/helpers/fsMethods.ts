import chalk from 'chalk'
import fs from 'fs'
import { ListOptions, Spent } from '../interfaces/interfaces'

interface saveDbOptions {
  fileName?: string
  content?: Spent[]
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
      resolve(console.log(chalk.bgBlue(`\n  ${message}  \n`)))
    })
  })
}

export const removeFile = async ({
  fileName,
  message,
}: saveDbOptions): Promise<void> => {
  return new Promise((resolve, reject) => {
    fs.unlink(`./${fileName}.json`, (err) => {
      if (err) {
        reject(err)
      }
      resolve(console.log(chalk.bgBlue(`\n  ${message}  \n`)))
    })
  })
}

export const listAllDb = (dbFolder: string = './'): Promise<ListOptions[]> => {
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

export const getDbData = (fileName: string): Promise<Spent[]> => {
  return new Promise((resolve, reject) => {
    fs.readFile(`./${fileName}.json`, 'utf8', (err, content) => {
      err && reject(err)
      resolve(JSON.parse(content))
    })
  })
}
