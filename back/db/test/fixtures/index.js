'use strict'

const uuid = require('uuid-base62')

const fixtures = {
  getTarea () {
    return {
      description: 'tarea numero ',
      userId: uuid.uuid()
    }
  },
  getImages (n) {
    let images = []
    while (n-- > 0) {
      images.push(this.getImage())
    }

    return images
  },
  getUser () {
    return {
      name: 'A random user',
      username: `user_${uuid.v4()}`,
      password: uuid.uuid(),
      email: `${uuid.v4()}@platzi.test`
    }
  }
}

module.exports = fixtures
