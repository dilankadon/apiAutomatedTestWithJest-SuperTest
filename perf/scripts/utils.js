import moment from './vendor/moment.js'
import _ from './vendor/lodash.js'

var baseurl = "http://standalone:3333"
let getFakeAPISLA = 2500

function getRandomId() {
  return moment().millisecond(_.random(0, 999))
}

function createPostPayload(){
  let randId = getRandomId()
  // let randId = 10
  let payload = {
    title: 'foo', 
    body: 'bar', 
    userId: 1}
  
  return { randId, payload }
}

export default Object.freeze({
	createPostPayload,
	getRandomId,
  getFakeAPISLA,
  baseurl
})
