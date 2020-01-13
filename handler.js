'use strict';

module.exports = {
  create: async (event, context) => {
    let bodyObj = {}
    try {
      bodyObj = JSON.parse(event.body)
    } catch(jsonError) {
      console.log('There was an error parsing the body', jsonError)
      return {
        statusCode: 400
      }
    }
    if(typeof bodyObj.name == 'undefined' || 
    typeof bodyObj.age == 'undefined') {
      console.log('Missing parameters')
      return {
        statusCode: 400
      }
    } 
  },
  list: async (event, context) = {

  },
  get: async (event, context) = {

  },
  update: async (event, context) = {

  },
  delete: async (event, context) = {

  },
};
