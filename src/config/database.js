const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost:27017/todo',{useMongoClient:true})


// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise
// var uri = ('mongodb://127.0.0.1:27017/todo')
// module.exports = mongoose.connect(uri,{useMongoClient:true});
// module.exports= MongoClient.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   });
