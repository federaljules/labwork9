import { Component, ViewChild, ElementRef ,NgZone} from '@angular/core';
import { IonicPage, NavController, NavParams } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;
@IonicPage()
@Component({
  selector: 'page-distance',
  templateUrl: 'distance.html',
})
export class DistancePage {
tabBarElement: any;
@ViewChild('map') mapElement: ElementRef;
map: any;
markerBounds: any;
markers=[{id:1,lat:30.795387, lng:31.001315, icon:"assets/images/pin_b.png"}];

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
     this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
     this.ionViewLoaded();
  }
  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

  ionViewLoaded(){
    this.loadMap();
  }
  loadMap(){
      this.markerBounds = new google.maps.LatLngBounds();
      this.geolocation.getCurrentPosition().then((position) => {

        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        let mapOptions = {
          center: latLng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.addMarker()// current
        this.addMarkersToMap()
      }, (err) => {
        console.log(err);
      });

    }
    
    addMarker(){
      var icon = {
        url: "assets/images/pin.png", // url
        scaledSize: new google.maps.Size(30, 50), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
      };
      var markerdata ={
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: this.map.getCenter()
          ,icon:icon 
      }
      let marker = new google.maps.Marker(markerdata);
      marker.setMap(this.map);
      this.markerBounds.extend( this.map.getCenter());
    }

    addMarkersToMap() {
        for(let item of this.markers) {
            var icon = {
                url: item.icon, // url
                scaledSize: new google.maps.Size(40, 40), // scaled size
                origin: new google.maps.Point(0,0), // origin
                anchor: new google.maps.Point(0, 0) // anchor
            };

            var position = new google.maps.LatLng(item.lat, item.lng); 
            var markerdata={position: position,icon:icon, title: item.id.toString()}
            var marker = new google.maps.Marker(markerdata);
            marker.setMap(this.map);
            this.markerBounds.extend(position);
        }
        this.map.fitBounds(this.markerBounds);
        this.map.setCenter(this.markerBounds.getCenter());
    }   

  }
