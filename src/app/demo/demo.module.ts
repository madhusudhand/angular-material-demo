import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { MatItemsComponent } from './mat-items/mat-items.component';
import { NoDataComponent } from './no-data/no-data.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  declarations: [
    DemoComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    CardsComponent,
    MatItemsComponent,
    NoDataComponent
  ]
})
export class DemoModule { }
