async function beforeRender(req, res) {
  console.log('Template Data: ', req.template.data)
  req.data = req.template.data
}
