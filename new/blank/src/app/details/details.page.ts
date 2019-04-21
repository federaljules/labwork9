import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { SharepopupPage } from '../sharepopup/sharepopup.page'
import { from } from 'rxjs';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage{
tabBarElement: any;
selecttype:any;
icons:Array<any>;

  constructor(public popoverCtrl: PopoverController, public modalController: ModalController) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.icons = ['star', 'star', 'star', 'star-half', 'star-outline'];  
   }


  showMap(index){
    this.selecttype=index;
  }

  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }
  
  sharePopover(myEvent) {

  let popover = this.popoverCtrl.create({
    component: SharepopupPage,
    cssClass: 'share-popover',
    ev: myEvent
    
  });

  popover.present();

}
}
