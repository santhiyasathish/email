import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list: any;
  @Output() listItem = new EventEmitter<string>();
  page: any = [{
    number:1
  },
  {
    number:2
  },
  {
    number:3
  }
];
selected: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  selectOption(opt: number){
    this.selected = opt;
  }

  selectItem(value: string) {
    this.listItem.emit(value);
  }
}
