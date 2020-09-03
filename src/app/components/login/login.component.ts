import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../classes/usuario';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usr:string;
  public pass:string;

  public credentials: Usuario;

  constructor(private router : Router) { }

  login()
  {
    if(this.usr == "admin" && this.pass == "admin")
    {
      this.router.navigate(['/bienvenido']);
    } else {
      this.router.navigate(['/error']);
    }
  }

  ngOnInit(): void {
  }

}
