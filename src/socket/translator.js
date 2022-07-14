
function JsonTranslator() {


    this.toStr = function (message) {
        if (message) {
            if (Object.prototype.toString.call(message) === '[object Object]')
                return JSON.stringify(message);
        }
        return message;

    }
}

export {
    JsonTranslator
}
