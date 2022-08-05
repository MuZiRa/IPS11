import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { menuController } from '@ionic/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

    //when navigate to filter page
    toFilter(){
      menuController.toggle();
      this.router.navigateByUrl('/filter');
    }
  
    //when navigate to categories page
    toCategories(){
      menuController.toggle();
      this.router.navigateByUrl('/categories');
    }

  //when navigate to about page
    aboutUs(){
      menuController.toggle();
      this.router.navigateByUrl('/about');
    }

   //when navigate to settings page
   settings(){
    menuController.toggle();
    this.router.navigateByUrl('/settings');
  }

    //when user enter logout from sidebar
    logout(){
      
    }
}
