import {Component, OnInit, Pipe} from '@angular/core';

/*

 */

@Component({
    selector: 'app-events',
    templateUrl: './events.page.html',
    styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
    private activities = [
        {
            icon: 'burger',
            title: 'Foodtrucks',
            desc: 'BURGER, FRIES, HOT DOGS, DRINKS...'
        }, {
            icon: 'info',
            title: 'VR',
            desc: 'TRY CS:GO IN VR...'
        }, {
            icon: 'info',
            title: 'Training',
            desc: 'Be train to improove your skill by pro gamer !'
        }, {
            icon: 'info',
            title: 'Goodies',
            desc: 'Buy many goodies from Blast.'
        }, {
            icon: 'info',
            title: 'Partnership',
            desc: 'Buy many stuff from our partner.'
        }, {
            icon: 'info',
            title: 'Holograms',
            desc: 'Let see many weapons skin in holograms !'
        }, {
            icon: 'info',
            title: 'Demonstration',
            desc: 'Je c plus'
        }, {
            icon: 'info',
            title: 'Counter Strike',
            desc: 'Exclusive box to buy only here !'
        }
    ];
    constructor() {
    }

    ngOnInit() {
    }
}
