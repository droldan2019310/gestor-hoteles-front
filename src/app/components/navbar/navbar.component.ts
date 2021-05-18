import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  show = true;
  showFixed = false;
  constructor() { }

  ngOnInit(): void {
   
  }
  
  changeClass(){
    let scrollPosition = window.pageYOffset;
    if(scrollPosition != 0){
      if(this.showFixed == false ){
        this.showFixed = true;
        this.show = false;
      }
    }else{
      if(this.show == false ){
        this.show = true;
        this.showFixed = false;
      }
    }
  }
}
