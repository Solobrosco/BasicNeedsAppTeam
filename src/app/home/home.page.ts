import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppInfoService } from './../services/app-info.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(
    private router: Router,
    private info: AppInfoService,
    private menu: MenuController,
  ) {}

  ngOnInit() {
    this.menu.enable(true, "first");
  }

  logOut() {
    this.info.logout();
    // this.goToLoginPage();
  }

  print() {
    this.info.traverse();
  }

  goToLoginPage() {
    this.router.navigate(['/login']);
  }

}
