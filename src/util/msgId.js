export const randomLenNum = (len, date) => {
    return tempSnowflake.getId()
}
export const Snowflake = /** @class */ (function() {
    function Snowflake(_workerId, _dataCenterId, _sequence) {
        this.twepoch = 1288834974657;
        //this.twepoch = 0;
        this.workerIdBits = 5;
        this.dataCenterIdBits = 5;
        this.maxWrokerId = -1 ^ (-1 << this.workerIdBits); // 值为：31
        this.maxDataCenterId = -1 ^ (-1 << this.dataCenterIdBits); // 值为：31
        this.sequenceBits = 12;
        this.workerIdShift = this.sequenceBits; // 值为：12
        this.dataCenterIdShift = this.sequenceBits + this.workerIdBits; // 值为：17
        this.timestampLeftShift = this.sequenceBits + this.workerIdBits + this.dataCenterIdBits; // 值为：22
        this.sequenceMask = -1 ^ (-1 << this.sequenceBits); // 值为：4095
        this.lastTimestamp = -1;
        //设置默认值,从环境变量取
        this.workerId = 1;
        this.dataCenterId = 1;
        this.sequence = 0;
        if (this.workerId > this.maxWrokerId || this.workerId < 0) {
            throw new Error('_workerId must max than 0 and small than maxWrokerId-[' + this.maxWrokerId + ']');
        }
        if (this.dataCenterId > this.maxDataCenterId || this.dataCenterId < 0) {
            throw new Error('_dataCenterId must max than 0 and small than maxDataCenterId-[' + this.maxDataCenterId + ']');
        }

        this.workerId = BigInt(_workerId);
        this.dataCenterId = BigInt(_dataCenterId);
        this.sequence = BigInt(_sequence);
    }
    Snowflake.prototype.tilNextMillis = function(lastTimestamp) {
        var timestamp = this.timeGen();
        while (timestamp <= lastTimestamp) {
            timestamp = this.timeGen();
        }
        return BigInt(timestamp);
    };
    Snowflake.prototype.timeGen = function() {
        return BigInt(Date.now());
    };
    Snowflake.prototype.nextId = function() {
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
        return ((timestamp - this.twepoch) << this.timestampLeftShift) |
            (this.dataCenterId << this.dataCenterIdShift) |
            (this.workerId << this.workerIdShift) |
            this.sequence;
    };
    Snowflake.prototype.getId = function() {
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

        return new Date().getTime().toString() +  this.sequence.toString()
    };
    return Snowflake;
}());

var tempSnowflake = new Snowflake(1, 1, 0);
