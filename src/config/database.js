const mongoose = require('mongoose')
mongoose.Promise = global.Promise
// module.exports = mongoose.connect('mongodb://localhost:27017/todo',{useMongoClient:true})
module.exports = mongoose.connect("mongodb://localhost:27018/todo", {
    useMongoClient: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
module.exports = mongoose;


