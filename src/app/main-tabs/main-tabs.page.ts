import { Component } from '@angular/core';
import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calendar, nutrition, person, time } from 'ionicons/icons';

@Component({
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
  selector: 'wf-tabs',
  templateUrl: 'main-tabs.page.html',
})
export class MainTabsPage {
  constructor() {
    addIcons({ calendar, time, person, nutrition });
  }
}
