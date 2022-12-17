const middleware = (req, res, next) => {
     console.log('meminta request ke path:',req.path);
     next()
}
module.exports = middleware