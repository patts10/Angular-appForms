import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { noPuedeSePatts } from '../../../shared/validator/validaciones';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [ Validators.required, Validators.pattern(this.validatorService.nombreApellidoPatern) ] ],
    email: [, [ Validators.required, Validators.pattern(this.validatorService.emailPattern) ], [ this.emailValidator ] ],
    username: [, [ Validators.required, noPuedeSePatts ] ],
    password: [, [ Validators.required, Validators.minLength(6) ] ],
    password2: [, [ Validators.required ] ]
  }, {
    validators: [ this.validatorService.camposIguales('password', 'password2') ]
  });

  get emailErrorMsg(): string {
    
    const errors = this.miFormulario.get('email')?.errors;

    if (errors?.required) return 'Email es obligatorio';
    if (errors?.pattern) return 'El valor no tiene formato de email';
    if (errors?.emailTomado) return 'Email ya ha sido tomado';

    return '';
  }

  constructor( private fb: FormBuilder,
               private validatorService: ValidatorService,
               private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Christian Mendoza',
      email: 'test1@test.com',
      username: 'patts10',
      password: '123456',
      password2: '123456'
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
