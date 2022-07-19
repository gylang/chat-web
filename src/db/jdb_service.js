import {connection} from "./jsstore_con";
import {DATA_TYPE} from "jsstore";

const getDatabase = () => {
    const tb_message = {
        name: 'tb_message',
        columns: {
            // 消息id
            msgId: {
                primaryKey: true,
                autoIncrement: false,
                dataType: DATA_TYPE.String
            },
            // 发送人
            sender: {
                notNull: true,
                dataType: DATA_TYPE.String
            },
            // 接收人
            receive: {
                dataType: DATA_TYPE.String,
                notNull: true,
            },
            //所属联系人
            contact: {
                dataType: DATA_TYPE.String,
                notNull: true,
            },
            // 内容
            content: {
                notNull: true,
                dataType: DATA_TYPE.String
            },
            // 时间
            timestamp: {
                dataType: DATA_TYPE.Number,
                notNull: true,
            },
            success: {
                dataType: DATA_TYPE.Boolean,
                notNull: true,
                default: true
            }
        }
    };

    const tb_recently = {
        name: 'tb_recently',
        columns: {

            //所属联系人
            contactId: {
                dataType: DATA_TYPE.String,
                notNull: true,
            },
            // 内容
            contactName: {
                notNull: true,
                dataType: DATA_TYPE.String
            },// 内容
            avatar: {
                notNull: true,
                dataType: DATA_TYPE.String
            },
            // 时间
            timestamp: {
                dataType: DATA_TYPE.Number,
                notNull: true,
                default: Date.now()
            }
        }
    };
    const dataBase = {
        name: "GiLang",
        tables: [tb_message, tb_recently]
    };
    return dataBase;
};

export const initJsStore = async () => {
    const dataBase = getDatabase();
    console.log(dataBase)
    return await connection.initDb(dataBase);
};
