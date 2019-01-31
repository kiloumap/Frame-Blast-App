import {Component, Input} from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})

export class HomePage {
    private eventTime = new Date('2019-05-10T10:00:00').getTime();
    private duration = moment.duration(this.eventTime - new Date().getTime(), 'milliseconds');
    private interval = 1000;

    constructor() {
        setInterval( () => {
            this.duration = moment.duration(this.eventTime - new Date().getTime(), 'milliseconds');
            // $('.countdown').text(duration.hours() + ":" + duration.minutes() + ":" + duration.seconds())
        }, this.interval);
    }
}
