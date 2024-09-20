import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.component.html',
  imports: [ IonicModule, ReactiveFormsModule ],
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent  implements OnInit {

  frmRegistro: FormGroup;

  constructor() { 
    this.frmRegistro = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      clave: new FormControl('', Validators.required)
    })
   }

   registro(){
    console.log(this.frmRegistro.value);
   }

  ngOnInit() {}

}
