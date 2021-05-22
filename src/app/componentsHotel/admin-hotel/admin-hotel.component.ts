import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { Hotel } from 'src/app/models/Hotel';
import { User } from 'src/app/models/user';
import { RestHotelService } from 'src/app/services/restHotel/rest-hotel.service';
import { RestRoomService } from 'src/app/services/restRoom/rest-room.service';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';

@Component({
  selector: 'app-admin-hotel',
  templateUrl: './admin-hotel.component.html',
  styleUrls: ['./admin-hotel.component.css']
})
export class AdminHotelComponent implements OnInit {
  navbarStatus;
  public user:User;
  public hotel;
  public readonly notifier;

  constructor(private restUser:RestUserService, private restHotel: RestHotelService, private notifierService:NotifierService, private restRoom:RestRoomService) { 
    this.navbarStatus = 1;
    this.user = restUser.getUser();
    this.hotel = new Hotel('','',null,'','','','',[],[],[],[]);
    this.notifier = notifierService;
    this.getHotel();
  }

  ngOnInit(): void {
    this.getHotel();
  }
  changeStatus(status){
    this.navbarStatus = status;
  }
  getHotel(){
    this.restUser.findHotelAdmin(this.user._id).subscribe((res:any)=>{
      if(res.hotelFind){
        localStorage.setItem("hotel", JSON.stringify(res.hotelFind));
        this.hotel = res.hotelFind;
        
        this.getFeatures();
        this.getRooms();
        console.log(this.hotel)
      }else{
        this.notifier.notify("warning",res.message);
      }
    },error=>{
      this.notifier.notify("error",error.error.message);
    })
  }
  getFeatures(){
    console.log(this.hotel);
    let features = this.hotel.features;
    localStorage.setItem("features", JSON.stringify(features));
  }
  
  getRooms(){
     this.restRoom.getRoomsHotel(this.hotel._id).subscribe((res:any)=>{
       if(res.hotels){

        localStorage.setItem("rooms",JSON.stringify(res.hotels.rooms));
       }else{
          this.notifier.notify("error",res.message);
       }
     }, error=>{
        this.notifier.notify("error",error.error.message);
     })
  }
}
