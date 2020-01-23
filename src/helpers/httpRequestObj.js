export default function httpRequestObj (req = {}) {
  return Object.freeze({
    path: req.path,
    pathParams: req.params,
    method: req.method
  })
}
