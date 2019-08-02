import {group} from "k6"
import posts from './posts.js'
import _ from './vendor/lodash.js'

export let options = {
    vus: 2,
    duration: "10s",
    thresholds: {
        http_req_duration: ["avg<100", "p(95)<200"],
        errors: ["rate<0.1"], // <10% errors
      },
    
  }

export function setup() {
}

export default function() {
    group("Fake REST service", function() {
        posts.createPost()
        posts.getPost(1)
    })  
}
