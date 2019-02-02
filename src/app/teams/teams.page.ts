import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
    private teams = [
        {
            icon: '/assets/icon/anon_team.PNG',
            name: 'TBA',
            flag: '/assets/icon/france_flag.PNG',
            country: 'TBA'
        }, {
            icon: '/assets/icon/anon_team.PNG',
            name: 'TBA',
            flag: '/assets/icon/france_flag.PNG',
            country: 'TBA'
        }, {
            icon: '/assets/icon/anon_team.PNG',
            name: 'TBA',
            flag: '/assets/icon/france_flag.PNG',
            country: 'TBA'
        }, {
            icon: '/assets/icon/anon_team.PNG',
            name: 'TBA',
            flag: '/assets/icon/france_flag.PNG',
            country: 'TBA'
        }, {
            icon: '/assets/icon/anon_team.PNG',
            name: 'TBA',
            flag: '/assets/icon/france_flag.PNG',
            country: 'TBA'
        }, {
            icon: '/assets/icon/anon_team.PNG',
            name: 'TBA',
            flag: '/assets/icon/flag_anon.PNG',
            country: 'TBA'
        }
    ];
  constructor() { }

  ngOnInit() {
  }

}
