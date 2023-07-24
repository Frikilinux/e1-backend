import fs from 'fs'

export const creatFile = (fileName: string) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./${fileName}.json`, '[]', (err) => {
      err && reject(err)
      resolve(console.log(`DB creada en el archivo ${fileName}.json`))
    })
  })
}

export const getWithFS = (file: string) => {
  return new Promise((resolve, reject) => {
    fs.readFile(`./${file}.json`, 'utf8', (err, content) => {
      if (err) {
        reject(err)
      }
      resolve(JSON.parse(content))
    })
  })
}
