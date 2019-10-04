import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { HomePageModule } from './../home/home.module';
import { StorePageModule } from './../store/store.module';
import { ResourcesPageModule } from './../resources/resources.module';
import { ForumPageModule } from './../forum/forum.module';
import { NotificationsPageModule } from './../notifications/notifications.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    StorePageModule,
    ResourcesPageModule,
    ForumPageModule,
    NotificationsPageModule,
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
