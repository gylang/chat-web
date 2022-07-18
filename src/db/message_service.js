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
    recentlyMessage(message) {

        // 先用模拟数据
        return [
            {
                contactId: 1,
                contactName: '冰山蝶雨',
                avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                message: 'GiLang你好, 现在有空?...',
                timestamp: 1657632888846,
                num: 4512
            }, {
                contactId: 2,
                contactName: '新萝卜蹲',
                avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                message: 'GiLang你好, 现在有空?...',
                timestamp: 1657632888846,
                num: 421
            }, {
                contactId: 3,
                contactName: '起床困难户',
                avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                message: 'GiLang你好, 现在有空?...',
                timestamp: 1657632888846,
                num: 124
            }, {
                contactId: 4,
                contactName: '舍不得五个萌娃@',
                avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                message: 'GiLang你好, 现在有空?...',
                timestamp: 1657632888846,
                num: 54
            }, {
                contactId: 5,
                contactName: '春日终章',
                avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                message: 'GiLang你好, 现在有空?...',
                timestamp: 1657632888846,
                num: 523
            }, {
                contactId: 6,
                contactName: '^你和喵',
                avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                message: 'GiLang你好, 现在有空?...',
                timestamp: 1657632888846
            }, {
                contactId: 7,
                contactName: '爱洗澡的跳跳虎',
                avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                message: 'GiLang你好, 现在有空?...',
                timestamp: 1657632888846,
                num: 523
            }, {
                contactId: 8,
                contactName: '奶包妹纸ε么哒哒∩_∩',
                avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                message: 'GiLang你好, 现在有空?...',
                timestamp: 1657632888846,
                num: 523
            }, {
                contactId: 9,
                contactName: '我来自熊猫星',
                avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                message: 'GiLang你好, 现在有空?...',
                timestamp: 1657632888846,
                num: 523
            }, {
                contactId: 10,
                contactName: '不过一场颠覆',
                avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                message: 'GiLang你好, 现在有空?...',
                timestamp: 1657632888846,
                num: 523
            }, {
                contactId: 11,
                contactName: '初懵',
                avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                message: 'GiLang你好, 现在有空?...',
                timestamp: 1657632888846,
                num: 523
            }, {
                contactId: 12,
                contactName: '可愛到飞起',
                avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                message: 'GiLang你好, 现在有空?...',
                timestamp: 1657632888846,
                num: 523
            }, {
                contactId: 13,
                contactName: '校服一穿就变乖',
                avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                message: 'GiLang你好, 现在有空?...',
                timestamp: 1657632888846,
                num: 523
            }, {
                contactId: 14,
                contactName: '草莓ぇ宝',
                avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                message: 'GiLang你好, 现在有空?...',
                timestamp: 1657632888846,
                num: 523
            }, {
                contactId: 15,
                contactName: '麦兜兜',
                avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                message: 'GiLang你好, 现在有空?...',
                timestamp: 1657632888846
            }, {
                contactId: 16,
                contactName: '酒醒梦断',
                avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                message: 'GiLang你好, 现在有空?...',
                timestamp: 1657632888846
            },
        ];
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
