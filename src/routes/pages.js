const routes = require('express').Router()




//forgot password
routes.get(`/forgot`, (req, res) => res.redirect('/dashboard'))

//logout
routes.get(`/logout`, (req, res) => {
    res.clearCookie('token')

    return res.redirect('/login')
})

module.exports = routes
