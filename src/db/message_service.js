import {connection} from "~/db/jsstore_con";

export class MessageService {

    constructor() {
        this.tableName = "tb_message";
    }

    addMessage(message) {
        console.log('addMessage')

        return connection.insert({
            into: this.tableName,
            values: [message],
            return: true
        })
    }

    getMessagesByContact(query) {
        console.log('getMessagesByContact')
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

}
