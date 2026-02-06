import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
  selector: 'wf-today',
  templateUrl: 'today.page.html',
})
export class TodayPage {}
