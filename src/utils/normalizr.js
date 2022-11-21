const { normalize, schema } = require('normalizr')

function normalizeChat(chat) {

    const chatMsgs = chat.map((msg) => {
        return {
            author: msg.author,
            text: msg.text
    }
})

    const authorSchema = new schema.Entity('author', {}, { idAttribute: 'email' });

    const mensajeSchema = new schema.Entity('messages', {
        author: authorSchema
    }, {idAttribute: "text"})

    const normalizedData = normalize(chatMsgs, [mensajeSchema]);
    return normalizedData;
}

module.exports = normalizeChat