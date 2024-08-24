// import mongoose from 'mongoose';

// const Connection = () => {

//     const MONGODB_URI = 'mongodb+srv://user:todolist@mern-todo.bvm7o.mongodb.net/?retryWrites=true&w=majority&appName=mern-todo';
//     mongoose.connect(MONGODB_URI, );

//     mongoose.connection.on('connected', () => {
//         console.log('Database connected Successfully');
//     })

//     mongoose.connection.on('disconnected', () => {
//         console.log('Database disconnected');
//     })

//     // mongoose.connection.on('error', () => {
//     //     console.log('Error while connecting with the database ', error);
//     // })
// }


import mongoose from 'mongoose';

const Connection = async () => {
    try {
        console.log('Attempting to connect to MongoDB...');
        await mongoose.connect('mongodb+srv://user:todolist@mern-todo.bvm7o.mongodb.net/?retryWrites=true&w=majority&appName=mern-todo', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Could not connect to MongoDB:', error.message);
        console.error('Detailed Mongoose Error:', error);
    }
};

Connection();
export default Connection;