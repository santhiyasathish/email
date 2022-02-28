import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() chooseOption: any;
  @Output() SelectMenu = new EventEmitter<string>();
  
  selected: string = 'inbox';
  selectedLable: string = 'work';
  count = {
    inbox: 20,
    sent: 0,
    favourite: 0,
    draft: 0,
    important: 0,
    schedule: 0 
  }
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(){
    this.count.favourite = this.chooseOption.length;
  }

  selectOption(opt: string){
    this.selected = opt;
      this.SelectMenu.emit(opt);
  }

  selectLable(opt: string){
    this.selectedLable = opt;
  }

}
