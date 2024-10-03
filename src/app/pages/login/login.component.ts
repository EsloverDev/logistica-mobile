import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../../service/api.service';
import { IReqLogin } from '../../models/IReqLogin.interface';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [ IonicModule, ReactiveFormsModule, HttpClientModule ],
  providers: [ ApiService ],
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  frmLogin: FormGroup;

  constructor(private api:ApiService) {
    this.frmLogin = new FormGroup({
      user: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required)
    })
  }

  login(form: IReqLogin){
    console.log(form);
    this.api.login(form).subscribe(datosRetorno => {
    console.log(datosRetorno);
    })
  }
  ngOnInit() {}

}
