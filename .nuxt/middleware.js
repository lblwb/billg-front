const middleware = {}

middleware['admin'] = require('../middleware/admin.js')
middleware['admin'] = middleware['admin'].default || middleware['admin']

middleware['merchant'] = require('../middleware/merchant.js')
middleware['merchant'] = middleware['merchant'].default || middleware['merchant']

export default middleware
