const mongoose = require('mongoose');

const url = 'mongodb+srv://mdsaif123:786Gmail@cluster0.tyums2q.mongodb.net/mydatabase?retryWrites=true&w=majority'

mongoose.connect(url)
.then((result) => {
    // console.log(result);
    console.log('database connected');
    
})
.catch((err) => {
    console.error(err);
    
});

module.exports = mongoose;

