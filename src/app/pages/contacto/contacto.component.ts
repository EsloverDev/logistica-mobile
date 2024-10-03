import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IReqContacto } from '../../models/IReqContacto.interface';
import { ApiService } from '../../service/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  standalone: true,
  templateUrl: './contacto.component.html',
  imports: [ IonicModule, ReactiveFormsModule, HttpClientModule ],
  providers: [ ApiService ],
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent  implements OnInit {

  frmContacto: FormGroup;

  constructor(private api:ApiService) { 
    this.frmContacto = new FormGroup({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      ciudad: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      mensaje: new FormControl('', Validators.required)
    })
   }

   enviar(form: IReqContacto){
    console.log(form);
    this.api.contacto(form).subscribe(datosRetorno => {
      console.log(datosRetorno);
    })
   }

  ngOnInit() {}

}
