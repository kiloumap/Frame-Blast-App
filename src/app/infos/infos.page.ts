import {Component, ElementRef, NgZone, ViewChild} from '@angular/core';

declare var google: any;

@Component({
    selector: 'app-infos',
    templateUrl: './infos.page.html',
    styleUrls: ['./infos.page.scss'],
})
export class InfosPage {
    @ViewChild('Map') mapElement: ElementRef;
    map: any;
    mapOptions: any;
    location = {lat: null, lng: null};
    markerOptions: any = {position: null, map: null, title: null};
    marker: any;
    apiKey: any = 'AIzaSyAthjeqcJb605ukuZ9YpvlZkEdBXtDRNtM'; /*Your API Key*/
    constructor(public zone: NgZone) {
        /*load google map script dynamically */
        const script = document.createElement('script');
        script.id = 'googleMap';
        if (this.apiKey) {
            script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey;
        } else {
            script.src = 'https://maps.googleapis.com/maps/api/js?key=';
        }
        document.head.appendChild(script);
        /*Get Current location*/
        // this.geolocation.getCurrentPosition().then((position) => {
        //     this.location.lat = position.coords.latitude;
        //     this.location.lng = position.coords.longitude;
        //     console.log( position.coords);
        // });
        this.location.lat = 43.5235859;
        this.location.lng = 5.432496200000001;
        /*Map options*/
        this.mapOptions = {
            center: this.location,
            zoom: 15,
            mapTypeControl: false
        };
        setTimeout(() => {
            this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
            /*Marker Options*/
            this.markerOptions.position = this.location;
            this.markerOptions.map = this.map;
            this.markerOptions.title = 'Blast Pro Series';
            this.marker = new google.maps.Marker(this.markerOptions);
        }, 3000);
    }
}
