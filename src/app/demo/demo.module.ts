import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { HeaderComponent } from './header/header.component';
import { MdToolbarModule, MdButtonModule, MdIconModule, MaterialModule } from '@angular/material';
import { TabsComponent } from './tabs/tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    // MdToolbarModule,
    // MdButtonModule,
    // MdIconModule,
    MaterialModule
  ],
  declarations: [DemoComponent, HeaderComponent, TabsComponent, SidenavComponent]
})
export class DemoModule { }
