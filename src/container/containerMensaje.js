const mongoose = require('mongoose');
const config = require('../config/config');
const { ChatModel } = require('../model/chatModel');

// const ClienteMensajeSql = require('../../sqLiteScripts.js')

// const { options } = require('../../options/SQLite3.js')

const normalizeChat = require('../utils/normalizr');


mongoose.connect(config.mongodb.host, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) console.log(err);
});


class ContainterMensaje {


    async save(mensaje){
        try {
            console.log('nuevo mensaje')
            const nuevo = new ChatModel(mensaje)
            console.log(nuevo)
            await nuevo.save()

            return { Exito: "El mensaje se guardó correctamente" };
        } catch (err) {
            console.log(err)
        }
    }
    async getAll(){
        try {
            const mensajes = await ChatModel.find({},{_id:0});
            
            return normalizeChat(mensajes);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = ContainterMensaje