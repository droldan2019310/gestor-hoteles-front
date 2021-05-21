import { Component, OnInit } from '@angular/core';
import { RestHotelService } from 'src/app/services/restHotel/rest-hotel.service';
import { NotifierService } from 'angular-notifier';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.component.html',
  styleUrls: ['./inicio-admin.component.css']
})
export class InicioAdminComponent implements OnInit {
  navbarStatus;
  private readonly notifier;
  constructor(private resHotel:RestHotelService, private notifierService:NotifierService, private restUser: RestUserService) {
    this.navbarStatus=1;
    notifier: notifierService;
    this.getUser();
   }

  ngOnInit(): void {
    this.getHotels();
  }

  getHotels(){
    this.resHotel.getHotels().subscribe((res:any)=>{
      if(res.hotels){
        localStorage.setItem("hotels",JSON.stringify(res.hotels))
      }else{
        this.notifier.notify("warning",res.message);
      }
    },
      error=>{
        this.notifier.notify("error",error.error.message);
      }
    )
  }
  getUser(){
    this.restUser.getUsers().subscribe((res:any)=>{
      if(res.users){
          localStorage.setItem("users", JSON.stringify(res.users));
      }else{
        this.notifier.notify("warning", res.message);
      }
    }, error=>{
      this.notifier.notify("error", error.error.message);
    })
  }

  changeStatus(status){
    this.navbarStatus=status;
  }
}
