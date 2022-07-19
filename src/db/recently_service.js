import {connection} from "./jsstore_con";

export class RecentlyService {

    constructor() {
        this.tableName = "tb_recently";
    }

    addRecently(recently) {

        return connection.insert({
            into: this.tableName,
            values: [message],
            return: true
        })
    }
    addRecentlyBatch(recently) {
        for (let r of recently) {
            r['timestamp'] = Date.now()
        }
        return connection.insert({
            into: this.tableName,
            values: recently,
            return: true
        })
    }

    recentlyPage(query) {
        return connection.select({
            from: this.tableName,
            limit: query.limit,
            skip: query.skip
        })
    }

    updateTimestampById(id) {
        return connection.update({
            in: this.tableName,
            set: {
                timestamp: Date.now()
            },
            where: {
                id: id
            }
        })
    }

}
