import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-contacto',
  standalone: true,
  templateUrl: './contacto.component.html',
  imports: [ IonicModule, ReactiveFormsModule ],
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent  implements OnInit {

  frmContacto: FormGroup;

  constructor() { 
    this.frmContacto = new FormGroup({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      ciudad: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      mensaje: new FormControl('', Validators.required)
    })
   }

   enviar(){
    console.log(this.frmContacto.value);
   }

  ngOnInit() {}

}
