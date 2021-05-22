import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { CONNECTION } from 'src/app/services/global';
import { RestHotelService } from 'src/app/services/restHotel/rest-hotel.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private readonly notifier;
  public hotels:[];
  uri;
  constructor(private restHotel:RestHotelService,private notifierService:NotifierService) { 
    this.notifier = notifierService;
    this.uri = CONNECTION.URI;
  }

  ngOnInit(): void {
    this.getHotels()
  }
  getHotels(){
    this.restHotel.best3Hotel().subscribe((res:any)=>{
      if(res.hotelFind){
        this.hotels = res.hotelFind;
        console.log(this.hotels);
      }else{
        this.notifier.notify("error",res.message);
      }
    }, error=>{
      this.notifier.notify("error",error.error.message);
    })
  }
}
