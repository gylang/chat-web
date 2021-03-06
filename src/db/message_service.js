import {connection} from "./jsstore_con";

export class MessageService {

    constructor() {
        this.tableName = "tb_message";
    }

    addMessage(message) {

        return connection.insert({
            into: this.tableName,
            values: [message],
            return: true
        })
    }
    addMessageBatch(messages) {

        return connection.insert({
            into: this.tableName,
            values: messages,
            return: true
        })
    }

    getMessagesByContact(query) {
        return connection.select({
            from: this.tableName,
            where: {
                contact: query.contact
            },
            limit: query.limit,
            skip: query.skip
        })
    }

    updateSuccessById(id) {
        return connection.update({
            in: this.tableName,
            set: {
                success: true
            },
            where: {
                id: id
            }
        })
    }

    currentMessage(contactId) {
        return connection.select({
            from: this.tableName,
            where: {
                contact: contactId
            },
            order : {
                by: 'timestamp',
                type : 'desc'
            }
        })
    }
}
