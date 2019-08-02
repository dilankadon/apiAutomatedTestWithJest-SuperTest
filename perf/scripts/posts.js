import http from "k6/http"
import { sleep, check, group } from "k6"
import utils from './utils.js'
import _ from './vendor/lodash.js'


function createPost() {
  let createData = utils.createPostPayload()
  group("Create a post", function() {
    let url = `${utils.baseurl}/posts`
    let res = http.post(url, JSON.stringify(createData.payload))
    check(res, {
      "status was 201": (r) => r.status == 201,
      "transaction time OK": (r) => r.timings.duration < utils.getFakeAPISLA,
    })
    sleep(1)
  })
  return createData.randId
}

function getPost(id) {
  group("Get a post", function() {
    let url = `${utils.baseurl}/posts/${id}`
    let res = http.get(url)
      check(res, {
        "status was 200": (r) => r.status == 200,
        "transaction time OK": (r) => r.timings.duration < utils.getFakeAPISLA,

      })
      sleep(1)
  })
}
 
export default Object.freeze({
  createPost,
  getPost
})



