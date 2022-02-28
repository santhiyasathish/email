import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  list: any = [];
  favItem: any = [];
  userDetail = [{
    id:1,
    name: 'Tony Soap',
    class: 'read',
    hour: '5h',
    mail: 'nali@gmail.com',
    body: `Hi Madison, <br><br><br>

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br><br><br>
    
    Regards,<br>
    Nadila <br>`,
    attachment: [{
      name: 'imag.jpg'
    },
    {
     name: 'image2.jpg' 
    }],
    fav:0,
    desc: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs'
  },
  {
    id:2,
    name: 'Tony Soap1',
    class: 'read',
    hour: '5h',
    mail: 'nali@gmail.com',
    body: `Hi Madison, <br><br><br>

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br><br><br>
    
    Regards,<br>
    Nadila <br>`,
    attachment: [{
      name: 'imag.jpg'
    },
    {
     name: 'image2.jpg' 
    }],
    fav:0,
    desc: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs'
  },
  {
    id:3,
    name: 'Tony Soap2',
    class: 'unread',
    hour: '5h',
    mail: 'nali@gmail.com',
    body: `Hi Madison, <br><br><br>

    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br><br><br>
    
    Regards,<br>
    Nadila <br>`,
    attachment: [{
      name: 'imag.jpg'
    },
    {
     name: 'image2.jpg' 
    }],
    fav:0,
    desc: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs'
  }];
  preview: any;
  constructor() { }

  ngOnInit(): void {
    this.preview = this.userDetail[0];
    this.list = this.userDetail;
  }

  selectItem(event: any){
    this.preview = event;
    console.log(event);
  }

  SelectMenu(event: any){
    console.log(event);
    if(event == 'fav'){
      this.list = this.favItem;
    }
    else{
      this.list = this.userDetail;
    }
  }

  actions(event: any){
    let userIndex = this.userDetail.findIndex((x:any) => x.id === this.preview.id);
    let index = this.favItem.findIndex((x:any) => x.id === this.preview.id);
    this.userDetail[userIndex].fav = event.fav;
    // this.favItem[index] = event.fav;
   if(event.delete == 0){
    if(index != -1){
      this.favItem.splice(index, 1);
    }
    if(userIndex != -1){
      this.userDetail.splice(userIndex, 1);
      // console.log(this.userDetail);
    }
    this.preview = this.userDetail[0];
   }
   else{
     console.log(event.fav, this.userDetail[userIndex].fav);
     this.preview.fav = event.fav;

     console.log(this.userDetail);
    if(index == -1){
      this.favItem.push(this.preview);
      // console.log(this.favItem);
    }
    else{
      this.favItem.splice(index, 1);
    }
  // console.log(event);
   }
   this.list = this.userDetail;
  }

}
