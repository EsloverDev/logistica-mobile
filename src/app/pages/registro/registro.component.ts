import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IReqRegistro } from '../../models/IReqRegistro.interface';
import { ApiService } from '../../service/api.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.component.html',
  imports: [ IonicModule, ReactiveFormsModule, HttpClientModule],
  providers: [ApiService],
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent  implements OnInit {

  frmRegistro: FormGroup;

  constructor(private api:ApiService) { 
    this.frmRegistro = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      clave: new FormControl('', Validators.required)
    })
   }

   registro(form: IReqRegistro){
    console.log(form);
    this.api.registro(form).subscribe(datosRetorno => {
      console.log(datosRetorno);
    })
   }

  ngOnInit() {}

}
