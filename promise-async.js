/**
 * Created by byte_developer on 2018/5/21.
 */
const fs = require('fs')
const util = require('util')
const readAsnyc = util.promisify(fs.readFile)
async  function init() {
  try {
    let data = await readAsnyc('./package.json')
    data = JSON.parse(data)
    console.log(data.name)
  } catch (err) {
    console.log(err)
  }
}
init()