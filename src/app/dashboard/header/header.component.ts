import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],  
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  userDetail = {
    name: 'Madison Eve',
    role: 'admin'
  };
  badges = {
    message: 2,
    announcement: 2
  }
  constructor() { }

  ngOnInit(): void {
  }

}
