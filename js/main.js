

class CountdownTimer {
    constructor({selector, targetDate}) {
        this.selector = selector; 
        this.targetDate = targetDate;
        this.refs = {
            days: document.querySelector(`${this.selector} [data-value="days"]`),
            hours: document.querySelector(`${this.selector} [data-value="hours"]`),
            mins: document.querySelector(`${this.selector} [data-value="mins"]`),
            secs: document.querySelector(`${this.selector} [data-value="secs"]`),
        }

           setInterval(() => {
            this.currentTime = Date.now();
            this.updateTime(this.targetDate - this.currentTime);
        }, 1000);
    }

    updateTime(time) {
        this.days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        this.hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        this.mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        this.secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        this.refs.days.textContent = `${this.days} `;
        this.refs.hours.textContent = `${this.hours} `;
        this.refs.mins.textContent = `${this.mins} `;
        this.refs.secs.textContent = `${this.secs} `;
    }

    pad(value) {
        return String(value).padStart(2, '0')
    }
    
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jun 01, 2021'),
});
