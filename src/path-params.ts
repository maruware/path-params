function camelToSnake(v: string) {
  return v.replace(/([A-Z])/g, s => {
    return '_' + s.charAt(0).toLowerCase()
  })
}

export interface PathParamsOptions {
  toSnake?: boolean
}

export default function pathParams(
  urlPattern: string,
  params: object,
  options?: PathParamsOptions
): string {
  let url = urlPattern
  for (const key in params) {
    const v = params[key]
    let k = key
    if (options && options.toSnake) {
      k = camelToSnake(k)
    }
    url = url.replace(`:${k}`, v)
  }
  return url
}
