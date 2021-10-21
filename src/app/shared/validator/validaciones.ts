import { FormControl } from "@angular/forms";

export const nombreApellidoPatern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const noPuedeSePatts = ( control: FormControl ) => {
  const valor: string = control.value?.trim().toLowerCase();
  if (valor === 'patts') {
    return {
      noPatts: true
    }
  }
  return null;
}