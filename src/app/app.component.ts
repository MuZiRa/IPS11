import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { menuController } from '@ionic/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router,
    menu: MenuController) {}

  //when navigate to about page
    aboutUs(){
      menuController.toggle();
      this.router.navigateByUrl('/about');
    }

    //when user enter logout from sidebar
    logout(){
      
    }
}
