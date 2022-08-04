import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  constructor(private alertCtrl: AlertController,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  async showPrompt() {
    const alert = await this.alertCtrl.create({
      header: "Confirm",
      message: "Are You Confirm?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel the form");
            this.navCtrl.navigateRoot('/profile/edit-profile'); 
          },
        },
        {
          text: "Okay",
          handler: () => {
            console.log("Submit the form");
            this.navCtrl.navigateRoot('/profile'); 
          },
        },
      ],
    });
  
    await alert.present();
  }

  

}


