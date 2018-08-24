const userRoutes = require('./user')

module.exports = (app) => {
    app.use('/api/user', userRoutes)
}
  