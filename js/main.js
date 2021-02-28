

const daysRef = document.querySelector('[data-value="days"]');
const hoursRef = document.querySelector('[data-value="hours"]');
const minsRef = document.querySelector('[data-value="mins"]');
const secsRef = document.querySelector('[data-value="secs"]');

class CountdownTimer {
    constructor({selector, targetDate}) {
        this.selector = selector; 
        this.targetDate = targetDate.getTime();
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
        daysRef.textContent = `${this.days} `;
        hoursRef.textContent = `${this.hours} `;
        minsRef.textContent = `${this.mins} `;
        secsRef.textContent = `${this.secs} `;
    }

    pad(value) {
        return String(value).padStart(2, '0')
    }
    
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jun 01, 2021'),
});
