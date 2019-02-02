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
            icon: '../../assets/icon/icone-burger-bleue.png',
            title: 'Foodtrucks',
            desc: 'BURGER, FRIES, HOT DOGS, DRINKS...'
        }, {
            icon: '../../assets/icon/icone-vr.png',
            title: 'VR',
            desc: 'TRY CS:GO IN VR...'
        }, {
            icon: '../../assets/icon/icone-meeting.png',
            title: 'Training',
            desc: 'Be train to improove your skill by pro gamer !'
        }, {
            icon: '../../assets/icon/icone-goodies.png',
            title: 'Goodies',
            desc: 'Buy many goodies from Blast.'
        }, {
            icon: '../../assets/icon/icone-partnership.png',
            title: 'Partnership',
            desc: 'Buy many stuff from our partner.'
        }, {
            icon: '../../assets/icon/icone-hologram.png',
            title: 'Holograms',
            desc: 'Let see many weapons skins with holograms technologies!'
        }, {
            icon: '../../assets/icon/icone-demo.png',
            title: 'Demonstration',
            desc: 'Play with your mates in CS:GO'
        }, {
            icon: '../../assets/icon/icone-skins-cases.png',
            title: 'Counter Strike',
            desc: 'Exclusive box to buy only here !'
        }
    ];
    constructor() {
    }

    ngOnInit() {
    }
}
