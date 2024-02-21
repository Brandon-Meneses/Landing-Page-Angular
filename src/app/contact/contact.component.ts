import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  formularioContacto: FormGroup;
  tipoDni: string = 'DNI';
  
  constructor(private form: FormBuilder) {
    this.formularioContacto = this.form.group({
      nombre: ['',[Validators.required, Validators.minLength(3)]],
      apellido: [''],
      tipoDni: [''],
      dni: [''], 
      email: ['',[Validators.required,Validators.email]]
    })

  }
  ngOnInit(): void {
    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(value=> {
      this.tipoDni = value;
    }
    );

  }
  hasErrors(controlName: string, errortype: string) {
    return this.formularioContacto.get(controlName)?.hasError(errortype) && this.formularioContacto.get(controlName)?.touched;
  }
  
  enviar() {
    console.log(this.formularioContacto);
  }

}
