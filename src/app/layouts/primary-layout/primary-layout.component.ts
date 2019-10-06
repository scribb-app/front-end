import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-primary-layout',
  templateUrl: './primary-layout.component.html',
  styleUrls: ['./primary-layout.component.scss'],
})
export class PrimaryLayoutComponent implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {}

  pullDrawer() {
    this.menu.enable(true, 'drawer');
    this.menu.open('drawer');
  }

}
