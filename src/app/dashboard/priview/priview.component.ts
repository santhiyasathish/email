import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-priview',
  templateUrl: './priview.component.html',
  styleUrls: ['./priview.component.scss']
})
export class PriviewComponent implements OnInit {
  @Input() previewItem: any;
  @Output() actionItem = new EventEmitter<string>();
  favOption: string = 'un_fav';
  b: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


  action(fav: string){
    console.log(this.previewItem);
    if(fav == 'f'){
      this.favOption = 'fav';
      this.previewItem.fav = 1;
    }
    if(fav == 'uf'){
      this.favOption = 'un_fav';
      this.previewItem.fav = 0;
    }
    if(fav == 'd'){
      this.favOption = 'delete';
      this.previewItem.delete = 0;
    }
    this.actionItem.emit(this.previewItem);
  }

  ngAfterContentInit(){
    console.log(this.previewItem);
  }

  fav(b: boolean){
    this.b = !this.b;
    if(this.previewItem.fav == 1){
      this.previewItem.fav = 0;
    }
    else{
      this.previewItem.fav = 1;
    }
    console.log(this.previewItem.fav);
  }

}
