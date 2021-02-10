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
   * Returns the `chai` http mock
   *
   * @param {Object} headers The `headers` attrs
   *
   * @return {Object} The `chai` http mock
  */
  static getHTTPHeaders(chaiHTTPMock, headers) {
    for (const attr in headers)
      chaiHTTPMock.set(attr, headers[attr])

    return chaiHTTPMock
  }

  /**
   * Makes a `GET` request
   *
   * @param {string} path The `URI` path
   * @param {Object} [params] The `queryString` params
   * @param {string} [baseUrl] The base URL
   *
   * @return {Promise<Object>} The `chai` response object
  */
  static GET(path, params = {}, headers = {}, baseUrl = DEFAULT_URL) {
    const httpMock = chai
      .request(baseUrl)
      .get(path)

    return RequestMock
      .getHTTPHeaders(httpMock, headers)
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
  static POST(path, object = {}, params = {}, headers = {}, baseUrl = DEFAULT_URL) {
    const httpMock = chai
      .request(baseUrl)
      .post(path)

    return RequestMock
      .getHTTPHeaders(httpMock, headers)
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
  static DELETE(path, params = {}, headers = {}, baseUrl = DEFAULT_URL) {
    const httpMock = chai
      .request(baseUrl)
      .del(path)

    return RequestMock
      .getHTTPHeaders(httpMock, headers)
      .query(params)
      .send()
  }
}

module.exports = RequestMock