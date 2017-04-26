import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  appItems = ['Photos', 'Albums', 'Random Stories'];
  genItems = ['Profile', 'Settings', 'Help'];

  constructor() { }

  ngOnInit() {
  }

}
