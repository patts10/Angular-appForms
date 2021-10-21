import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { noPuedeSePatts } from '../../../shared/validator/validaciones';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [ Validators.required, Validators.pattern(this.validatorService.nombreApellidoPatern) ] ],
    email: [, [ Validators.required, Validators.pattern(this.validatorService.emailPattern) ] ],
    username: [, [ Validators.required, noPuedeSePatts ] ],
    password: [, [ Validators.required, Validators.minLength(6) ] ],
    password2: [, [ Validators.required ] ]
  }, {
    validators: [ this.validatorService.camposIguales('password', 'password2') ]
  })

  constructor( private fb: FormBuilder,
               private validatorService: ValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Jona Mendoza',
      email: 'test1@test.com',
      username: 'No puede ser pattsito'
    })
  }

  campoValido( campo: string ) {
    return this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched;
  }

  guardar() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
    
  }
}
