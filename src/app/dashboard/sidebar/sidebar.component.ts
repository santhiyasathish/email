import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuList: any = [
    {
      icon: 'home',
    },
    {
      icon: 'email',
    },
    {
      icon: 'people_outline',
    },
    {
      icon: 'attach_money',
    },
    {
      icon: 'add_task',
    }
  ];
  selected: string = '';
  constructor() { }

  ngOnInit(): void {
    this.selected = this.menuList[0].icon;
  }

  selectMenu(opt: string){
    this.selected = opt;
  }

}
