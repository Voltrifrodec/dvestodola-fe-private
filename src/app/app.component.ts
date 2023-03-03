import { Component } from '@angular/core';
import { Menu } from './common/model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DveStodola';


  menu = Menu;
  actualMenu: Menu = Menu.USERS;

  changeMenu(menuItem: Menu): void {
    this.actualMenu = menuItem;
  }


}
