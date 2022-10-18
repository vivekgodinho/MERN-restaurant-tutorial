const mongoose = require('mongoose');



const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://vivekgodinho:Elephant123@mern-restaurant-tutoria.5osbfrt.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connection success');
    } catch (err) {
        console.log(err);
    }
};

module.exports = connectDB;