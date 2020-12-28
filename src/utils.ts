import * as fs from 'fs/promises'
import * as os from 'os'
import * as path from 'path'
import * as crypto from 'crypto'

const tmp = os.tmpdir()

export async function mkdtemp(): Promise<string> {
  return fs.mkdtemp(`${tmp}${path.sep}actions-mutex-`)
}

// return random string
export async function random(): Promise<string> {
  return new Promise(function (resolve, reject) {
    crypto.randomBytes(16, (err, buf) => {
      if (err) {
        reject(err)
      }
      resolve(buf.toString('hex'))
    })
  })
}
