import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NFC } from '@ionic-native/nfc';
import {Platform} from "ionic-angular/index";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, platform: Platform, private nfc: NFC) {
    platform.ready().then(()=>{
      //console.log('ready to go');
      this.addNfcListeners();
      nfc.addTagDiscoveredListener((tagEvent:Event) => this.tagListenerSuccess(tagEvent));
    })
  }

  addNfcListeners(): void {
    //NFC.addTagDiscoveredListener((tagEvent:Event) => this.tagListenerSuccess(tagEvent));
  }

  tagListenerSuccess(tagEvent:Event) {
    console.log(tagEvent);
  }

}
