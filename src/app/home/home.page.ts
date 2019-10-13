import { Component } from '@angular/core';

import { ApisService } from '../services/apis.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lists;

  constructor(private apis: ApisService) {
    this.lists = [{name:'s'},{name:'sas'}];//this.apis.getLists();
  }

}
