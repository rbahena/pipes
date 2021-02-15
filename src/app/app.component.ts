import { Component } from '@angular/core';
import { resolve } from 'q';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    //variables para pipes
    nombre: string = 'Capitán Amércia';
    nombre2: string = 'RAmIrO BaHeNa';
    Personajes = ['Thanos', 'Venom', 'IronMan', 'Groot', 'Superman'];
    PI: number = Math.PI;
    porcentaje: number = 0.234;
    salario: number = 1234.5;
    heroe = {
        nombre: 'logan',
        clave: 'Wolverine',
        edad: 500,
        direccion: {
            calle: 'Central',
            casa: 20
        }
    };
    valorPromesa = new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve('Llego la data');
        }, 4500);
    });

    fecha: Date = new Date;
    videoUrl: string = 'https://www.youtube.com/embed/GzxQksKS3Hs';
}
