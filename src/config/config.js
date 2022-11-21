const config = {
    puerto: process.env.PORT || 8080,
    mongodb: {
        host: process.env.DB_URL_MONGO || 'mongodb+srv://acivano:coderhouse@cluster0.ko5jrhf.mongodb.net/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }
    }
}             

module.exports = config;