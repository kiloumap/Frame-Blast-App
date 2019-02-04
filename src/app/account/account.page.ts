import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-account',
    templateUrl: './account.page.html',
    styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
    public nbPoint = 0;
    private pseudo = 'Kiloumap';
    private email = 'laurent.martinez@ynov.com';
    public displayName = 'Has No Name';

    constructor() {
        if (this.email) {
            this.displayName = this.email;
        }
        if (this.pseudo) {
            this.displayName = this.pseudo;
        }
    }

    ngOnInit() {
    }

}
