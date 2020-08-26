'use strict'

const chai = require('chai')

chai.use(require('chai-http'))

const DEFAULT_URL = `http://localhost:${process.env.LOCAL_PORT}/`

/**
 * Contains a set of (`chai`) `http` request methods
 * @class RequestMock
*/
class RequestMock {

  /**
   * Default `baseUrl` value
   *
   * @description `http://localhost:${process.env.LOCAL_PORT}/`
  */
  static get DEFAULT_URL() { return DEFAULT_URL }

  /**
   * Makes a `GET` request
   *
   * @param {string} path The `URI` path
   * @param {Object} [params] The `queryString` params
   * @param {string} [baseUrl] The base URL
   *
   * @return {Promise<Object>} The `chai` response object
  */
  static GET(path, params = {}, baseUrl = DEFAULT_URL) {
    return chai
      .request(baseUrl)
      .get(path)
      .query(params)
  }

  /**
   * Makes a `POST` request
   *
   * @param {string} path The `URI` path
   * @param {Object} [object] The `body` object
   * @param {Object} [params] The `queryString` params
   * @param {string} [baseUrl] The base URL
   *
   * @return {Promise<Object>} The `chai` response object
  */
  static POST(path, object = {}, params = {}, baseUrl = DEFAULT_URL) {
    return chai
      .request(baseUrl)
      .post(path)
      .query(params)
      .send(object)
  }

  /**
   * Makes a `DELETE` request
   *
   * @param {string} path The `URI` path
   * @param {Object} [params] The `queryString` params
   * @param {string} [baseUrl] The base URL
   *
   * @return {Promise<Object>} The `chai` response object
  */
  static DELETE(path, params = {}, baseUrl = DEFAULT_URL) {
    return chai
      .request(baseUrl)
      .del(path)
      .query(params)
      .send()
  }
}

module.exports = RequestMock