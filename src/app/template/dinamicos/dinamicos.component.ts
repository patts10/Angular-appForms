import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favorito: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Jona',
    favorito: [
      { id: 1, nombre: 'MetalGear' },
      { id: 2, nombre: 'MetalSlug' },
    ],
  };

  guardar() {
    console.log('prueba');
  }

  eliminar(index: number) {
    this.persona.favorito.splice(index, 1);
  }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favorito.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favorito.push( {...nuevoFavorito} )
    this.nuevoJuego = '';
  }
}
