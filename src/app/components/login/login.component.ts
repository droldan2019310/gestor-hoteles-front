import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { RestUserService } from 'src/app/services/restUser/rest-user.service';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user:User;
  token:string;

  private readonly notifier;
  constructor(private notifierService:NotifierService, private restUserService: RestUserService, private router: Router) { 
    this.user = new User('','','','','','','','');
    this.notifier = notifierService;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.restUserService.login(this.user,'true').subscribe((res:any)=>{

      if(!res.token){
          this.notifier.notify("danger", "La petición no posee permiso de Token");
      }else{
        this.token = res.token;
        
        if(this.token.length<=0){
          this.notifier.notify("danger", "No se generó Token, intente nuevamente");
        }else{
          this.notifier.notify("success", "Logueado Correctamente");
          delete res.user.password;
          localStorage.setItem('token', this.token);
          localStorage.setItem('user', JSON.stringify(res.user));
          this.user = res.user;
          console.log(this.user.role);
          if(this.user.role == "ROLE_USER"){
            this.router.navigateByUrl("home");
          }else if(this.user.role == "ROLE_ADMIN"){
            this.router.navigateByUrl("InicioAdmin");
          }else if(this.user.role == "ROLE_ADMINHOTEL"){
            this.router.navigateByUrl("AdminHotel");
          }
        }
      }
    },
      error=>{
        this.notifier.notify("error", error.error.message);
      }
    ) 
  }
}
