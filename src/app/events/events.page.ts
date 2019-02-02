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
            icon: '/assets/icon/burger_icon.PNG',
            title: 'Foodtrucks',
            desc: 'BURGER, FRIES, HOT DOGS, DRINKS...'
        }, {
            icon: '/assets/icon/vr_icon.PNG',
            title: 'VR',
            desc: 'TRY CS:GO IN VR...'
        }, {
            icon: '/assets/icon/burger_icon.PNG',
            title: 'Training',
            desc: 'Be train to improove your skill by pro gamer !'
        }, {
            icon: '/assets/icon/burger_icon.PNG',
            title: 'Goodies',
            desc: 'Buy many goodies from Blast.'
        }, {
            icon: '/assets/icon/burger_icon.PNG',
            title: 'Partnership',
            desc: 'Buy many stuff from our partner.'
        }, {
            icon: '/assets/icon/burger_icon.PNG',
            title: 'Holograms',
            desc: 'Let see many weapons skins with holograms technologies!'
        }, {
            icon: '/assets/icon/burger_icon.PNG',
            title: 'Demonstration',
            desc: 'Play with your mates in CS:GO'
        }, {
            icon: '/assets/icon/burger_icon.PNG',
            title: 'Counter Strike',
            desc: 'Exclusive box to buy only here !'
        }
    ];
    constructor() {
    }

    ngOnInit() {
    }
}
