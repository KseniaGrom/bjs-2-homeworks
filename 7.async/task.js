class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error("Отсутствуют обязательные аргументы");
        } else if (this.alarmCollection.length > 0 ) {
            for (let i = 0; i < this.alarmCollection.length; i++ ) {
                if (this.alarmCollection[i].time === time) {
                    console.warn("Уже присутствует звонок на это же время");
                }
            }
        }
        this.alarmCollection.push({time: time, callback: callback, canCall: true});
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter((element) => element.time !== time);
    }

    getCurrentFormattedTime() {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let formatHours = hours < 10 ? "0" + hours : hours;
        let formatMinutes = minutes < 10? "0" + minutes : minutes;
        return formatHours + ":" + formatMinutes;
    }

    start() {
        if (this.intervalId) {
            return;
        } else {
            this.intervalId = setInterval(() => {
                let currentTime = this.getCurrentFormattedTime();
                this.alarmCollection.forEach(alarm => {
                    if (alarm.time === currentTime && alarm.canCall === true) {
                        alarm.canCall = false;
                        alarm.callback();
                    }
                })
            }, 1000)
        }
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(element => {
            element.canCall = true;
        })
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
