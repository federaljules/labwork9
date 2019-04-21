import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sharepopup',

  template: `
     <ion-row class="shareIcon">
       <ion-col>
          <ion-icon name="logo-whatsapp"></ion-icon>
       </ion-col>
       <ion-col>
          <ion-icon name="logo-facebook"></ion-icon>
       </ion-col>
       <ion-col>
          <ion-icon name="logo-twitter"></ion-icon>
       </ion-col>
       <ion-col>
          <ion-icon name="logo-googleplus"></ion-icon>
       </ion-col>
     </ion-row>
 `,

  styleUrls: ['./sharepopup.page.scss'],
})
export class SharepopupPage{

  constructor(public modalController: ModalController) { }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SharepopupPage');
  }

  close() {
  this.modalController.dismiss();
  }
}
