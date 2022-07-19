
export const Snowflake = /** @class */ function () {
    function Snowflake() {
        this.twepoch = 1288834974657;
        //this.twepoch = 0;

        this.sequenceBits = 12;
        this.sequenceMask = -1 ^ (-1 << this.sequenceBits); // 值为：4095
        this.lastTimestamp = -1;
    }

    this.tilNextMillis = function (lastTimestamp) {
        var timestamp = this.timeGen();
        while (timestamp <= lastTimestamp) {
            timestamp = this.timeGen();
        }
        return BigInt(timestamp);
    };
    this.timeGen = function () {
        return  BigInt(Date.now());
    };
    this.nextId = function () {
        var timestamp = this.timeGen();
        if (timestamp < this.lastTimestamp) {
            throw new Error('Clock moved backwards. Refusing to generate id for ' +
                (this.lastTimestamp - timestamp));
        }
        if (this.lastTimestamp === timestamp) {
            this.sequence = (this.sequence + 1) & this.sequenceMask;
            if (this.sequence === 0) {
                timestamp = this.tilNextMillis(this.lastTimestamp);
            }
        } else {
            this.sequence = 0;
        }
        this.lastTimestamp = timestamp;
        return timestamp.toString() + String(this.sequence);
    };

    return String(Snowflake);
};

var msg = new Snowflake()

