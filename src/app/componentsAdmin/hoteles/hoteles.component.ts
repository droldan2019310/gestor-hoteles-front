import { Component, DoCheck, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/Hotel';
import { User } from 'src/app/models/user';
import { RestHotelService } from 'src/app/services/restHotel/rest-hotel.service';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { NotifierService } from 'angular-notifier';
import { CONNECTION } from 'src/app/services/global';
import { Room } from 'src/app/models/room';


@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css']
})
export class HotelesComponent implements OnInit {
  sidebarStatus;
  hotel:Hotel;
  user:User;
  token:string;
  hotels:Hotel[];
  usersAdmin:[];
  userSelected:User;
  public  room;
  public filesToUpload:Array<File>;
  public filesToUpload2:Array<File>;
  public filesToUpload3:Array<File>;
  public fileRoom:Array<File>;
  private readonly notifier;
  uri;
  public hotelSelected;

  statusHabitacion;
  constructor(private restHotel: RestHotelService, private restUser: RestUserService, private notifierService:NotifierService) { 
    this.hotel = new Hotel('','',null,'','','','',[],[],[],[]);
    this.hotelSelected = new Hotel('','',null,'','','','',[],[],[],[]);
    this.user = restUser.getUser();
    this.token = restUser.getToken();
    this.sidebarStatus = 1;
    this.userSelected = new User('','','','','','','','');
    this.notifier = notifierService;
    this.uri = CONNECTION.URI;
    this.room = new Room('','',null,'','','','','','','');
    this.getHotels();
  }

  ngOnInit(): void {
    this.getUsers();
    this.getHotels();
  }

  status(status){
    this.sidebarStatus = status;
    this.getHotels();
  }
  
  onSubmit(form){

      this.restHotel.saveHotel(this.hotel).subscribe((res:any)=>{
        
        if(res.hotelSaved){
          this.getHotels();
          this.hotel = res.hotelSaved;
          this.setUser(res.hotelSaved._id,this.userSelected);
          
          this.setImages(res.hotelSaved._id,this.filesToUpload);
          this.setImages(res.hotelSaved._id,this.filesToUpload2);
          this.setImages(res.hotelSaved._id,this.filesToUpload3);
          this.getHotelsRes();
          this.getHotels();
          
          form.reset();
          this.notifier.notify("success",res.message);
        }else{
          this.notifier.notify("warning",res.message);
          
        }
      },  
        error=>{
            this.notifier.notify("error",error.error.message);
        }
      )
  }
  getHotels(){
    this.hotels = JSON.parse(localStorage.getItem("hotels"));
  }
  getHotelsRes(){
    this.restHotel.getHotels().subscribe((res:any)=>{
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

  getUsers(){
    this.restHotel.getUsersHotel().subscribe((res:any)=>{
      if(res.users){
        this.usersAdmin = res.users;
      }else{
        this.notifier.notify("error",res.message);
      }
    },
      error=>{
        this.notifier.notify("error", error.error.message);
      }
    )
  }

  setUser(idHotel, userSelected){
    console.log(idHotel);
    console.log(userSelected);
    this.restHotel.setUserHotel(idHotel,userSelected).subscribe((res:any)=>{
      if(res.pushUser){
      }else{
        this.notifier.notify("error",res.message);
        
      }
    },
      error=>{
        this.notifier.notify("error", error.error.message);
      }
    )
  }

  setImages(idHotel,files){
    this.restHotel.setImage(idHotel,[],files,this.token, 'image')
    .then((res:any)=>{
      if(res.hotel){
      }else{
        this.notifier.notify("error",res.message);
      }
    })
  }

  fileChange(fileInput){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  fileChange2(fileInput){
    this.filesToUpload2 = <Array<File>>fileInput.target.files;
  }

  fileChange3(fileInput){
    this.filesToUpload3 = <Array<File>>fileInput.target.files;
  }
  
 
 

  
}
