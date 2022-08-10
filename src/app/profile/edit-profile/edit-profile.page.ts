import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource, ImageOptions } from "@capacitor/camera";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  base64:string="";

  constructor(private alertCtrl: AlertController,
    private navCtrl: NavController,
   
    
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) { }

  ngOnInit() {
    Camera.requestPermissions({permissions:['photos']})
  }

  pickImageFromGallery(){
    var options: ImageOptions={
      source: CameraSource.Photos,
      resultType:CameraResultType.DataUrl

    }
    Camera.getPhoto(options).then((result)=>{
      this.base64 = result.dataUrl;
    },(err)=>{
      alert(err);
    })
  }

  async onEditProfile() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        
        cssClass: 'bg-profile',
        message: 'Your Data was Edited!',
        duration: 3000,
        position: 'bottom'
        
      });

      toast.present();
      this.navCtrl.navigateForward('/profile');
    });
  }

  
  

}


