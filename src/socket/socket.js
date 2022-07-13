import {Snowflake} from "~/util/msgId";

function SocketClient() {
    // 监听池
    let listenerPool = new Array(10)
    // socket对象
    let socket = null;
    // 预设5个启动监听池大小
    let openListenerPool = new Array(5)
    // 当前连接状态
    let status = WebSocket.CLOSED
    // 错误次数
    let errorNum = 0;
    // socket连接地址
    let socketAddress;
    // 心跳定时任务
    let heartTask;

    let translatorImpl;

    let snowflake = new Snowflake(1n, 1n, 0n);

    this.setAddress = function (address) {
        socketAddress = address
    }
    this.setTranslator = function (translator) {
        translatorImpl = translator
    }

    /**
     * 绑定监听器
     * @param listener 监听器
     */
    this.bindMessageListener = function (listener) {

        listenerPool.add(listener)
    }
    /**
     * 绑定连接建立监听器
     * @param listener 监听器
     */
    this.bindOpenListener = function (listener) {

        openListenerPool.add(listener)
    }
    /**
     * 连接方法
     * @returns {WebSocket} websocket对象
     */
    this.connect = function () {
        if (typeof (WebSocket) === "undefined") {
            alert("您的浏览器不支持socket")
        } else {
            // 实例化socket
            status = WebSocket.CONNECTING
            socket = new WebSocket(socketAddress);
            // 监听socket连接
            socket.onopen = this.onOpen;
            // 监听socket错误信息
            socket.onerror = this.onError;
            // 监听socket消息
            socket.onmessage = this.onMessage;
            // 心跳包
            // this.sendHeartTask();
        }
    }

    /**
     * 定时任务发送心跳包
     */
    this.sendHeartTask = function () {
        if (heartTask) {
            heartTask = setInterval(() => {
                this.sendHeart();

            }, 2000)
        }
    }
    /**
     * 发送心跳包
     */
    this.sendHeart = function () {

        if (socket && (WebSocket.CLOSED === status)) {
            this.connect()
            return;
        }
        if (socket && status === WebSocket.OPEN) {

            //重连
            console.log("发送心跳")
        } else {
            errorNum = errorNum + 1;
        }
    }
    /**
     * 建立连接事件
     */
    this.onOpen = function () {
        console.log("socket连接成功")
        status = WebSocket.OPEN
        for (let listener in openListenerPool) {
            listener.post()
        }
    }

    /**
     * 连接错误事件
     * @param ev
     */
    this.onError = function (ev) {
        console.log("连接错误")
        console.log(ev)
        status = WebSocket.CLOSING
    }

    /**
     * 监听到消息
     * @param msg
     */
    this.onMessage = function (msg) {
        for (let listener in listenerPool) {
            listener.call(msg)
        }
    }

    /**
     * 发送消息
     * @param message
     */
    this.send = function (message) {

        this.write(message)
    }



    /**
     * 关闭连接
     */
    this.close = function () {
        console.log("socket已经关闭")
        status = WebSocket.CLOSED
    }
    /**
     * 销毁链接
     */
    this.destroyed = function () {
        // 销毁监听
        socket.onclose = this.close;
        clearInterval(heartTask);
    }

    this.wrapMessage = function (message) {

        let body = translatorImpl.tobyte(message)
        let translator = message.translator || 1;
        let inLabel = message.inLabel || 0;
        let ack = message.ack || 0;
        let qos = message.qos || 0;
        let cmd = message.cmd;
        let messageId = message.messageId || snowflake.getId();
        return translator + ',' + inLabel + ',' + ack + ',' + qos + ',' + cmd + ',' + messageId + ',' + body
    }
    /**
     * 发送消息
     * @param message 消息体
     */
    this.write = function (message) {
        socket.send(this.wrapMessage(message));
    }
}


/**
 * 监听器
 * @param listener
 * @constructor
 */
function Listener(listener) {

    // 回调post方法
    function call(message) {
        listener.post(message)
    }

}

