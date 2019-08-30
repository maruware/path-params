import pathParams from '../path-params'

it('standard use', () => {
  const urlPattern = '/users/:id/messages/:message_id'
  const params = {
    id: 2,
    // eslint-disable-next-line @typescript-eslint/camelcase
    message_id: 'abc'
  }
  const url = pathParams(urlPattern, params)
  expect(url).toBe('/users/2/messages/abc')
})

it('use snack case transform', () => {
  const urlPattern = '/users/:id/messages/:message_id'
  const params = {
    id: 2,
    messageId: 'abc'
  }
  const url = pathParams(urlPattern, params, { toSnake: true })
  expect(url).toBe('/users/2/messages/abc')
})
