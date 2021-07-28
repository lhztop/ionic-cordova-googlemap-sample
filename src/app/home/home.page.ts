/*
 * @Author: your name
 * @Date: 2021-07-11 17:31:11
 * @LastEditTime: 2021-07-22 19:04:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /box_dev/Users/hy/proj/dev/javascript/ionic-cordova-googlemap-sample/src/app/home/home.page.ts
 */
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map: GoogleMap;

  constructor(public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    // This code is necessary for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': '(your api key for `https://`)',
      'API_KEY_FOR_BROWSER_DEBUG': '(your api key for `http://`)'
    });

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 39.99188446,
           lng: 116.46706996
         },
         zoom: 17,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create('map', mapOptions);

    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 39.993214,
        lng: 116.473222
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
  }

  markMe() {
    let marker: Marker = this.map.addMarkerSync({
      title: 'Ionic',
      // icon: 'blue',
      icon: {url: 'http://img.pptjia.com/image/20171223/ee12f4fbf3bfb8e1f4de2fd5183194ce.jpg',
          size: {
            width: 20,
            height: 20
          }
      },
      animation: 'DROP',
      position: {
        lat: 39.99188446,
        lng: 116.46706996
      },
      height: 20,
      widht: 20
    });
  }

  async alert(message: string) {
    let myalert= await this.alertCtrl.create({message: message});
    await myalert.present();
  }

  thisSize: boolean = true;
  toogleSize() {
    var ele = document.getElementById("map");
    if (this.thisSize) {
      ele.style.height = "60%";
      this.thisSize = false;
    }else {
      ele.style.height = "50%";
      this.thisSize = true;
    }


  }

}
