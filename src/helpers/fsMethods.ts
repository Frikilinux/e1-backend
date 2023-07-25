import chalk from 'chalk'
import fs from 'fs'

export const setFile = (fileName: string, content = '[]') => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./${fileName}.json`, content, (err) => {
      err && reject(err)
      resolve(
        console.log(chalk.blue.bold(`DB creada en el archivo ${fileName}.json`))
      )
    })
  })
}

export const saveDb = (fileName:string, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./${fileName}.json`, JSON.stringify(content), (err) => {
      if (err) {
        reject(err)
      }
      resolve(console.log(chalk.blue.bold(`Nuevo gasto guardado`)))
    })
  })
}

export const listAllDb = (dbFolder = './') => {
  return new Promise((resolve, reject) => {
    fs.readdir('./', (err, files) => {
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

export const getDbData = (fileName: string) => {
  return new Promise((resolve, reject) => {
    fs.readFile(`./${fileName}.json`, 'utf8', (err, content) => {
      if (err) {
        reject(err)
      }
      resolve(JSON.parse(content))
    })
  })
}
