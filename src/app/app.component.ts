import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareasService } from './services/services.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  listaTareas:string[] = [];
  nuevaTarea:string = '';

  private _tareasService = inject(TareasService);
tareasCompletadas: any;
tareasPendientes: any;


  ngOnInit(): void {
    this.listaTareas = this._tareasService.getTareas();
  }

  agregarTarea(){
    this._tareasService.agregarTarea(this.nuevaTarea);
    this.nuevaTarea = '';
    this.listaTareas = this._tareasService.getTareas();
  }

  eliminarTarea(index: number){
    this._tareasService.eliminarTarea(index);
    this.listaTareas = this._tareasService.getTareas();
  }

};

// esta seria otra forma de hacerlo

// export class nuevaTarea {
//   tareas: any[] = [];
//   tareasPendientes: number = 0;
//   tareasCompletadas: number = 0;
//   nuevaTarea: string | undefined;

//   constructor (private _tareasService: TareasService) {
//     // Carga inicial de las tareas desde LocalStorage
//     this.cargarTareas();
//   }

//   agregarTarea() {
//     if (this.nuevaTarea) {
//       const tarea = {
//         texto: this.nuevaTarea,
//         completada: false
//       };

//       this.tareas.push(tarea);
//       this.actualizarContadores();
//       this.guardarTareas();
//       this.nuevaTarea = '';
//     }
//   }

//   eliminarTarea(indice: number) {
//     this.tareas.splice(indice, 1);
//     this.actualizarContadores();
//     this.guardarTareas();
//   }

//   actualizarTarea(indice: number) {
//     this.tareas[indice].completada = !this.tareas[indice].completada;
//     this.actualizarContadores();
//     this.guardarTareas();
//   }

//   cargarTareas() {
//     const tareasAlmacenadas = localStorage.getItem('tareas');
//     if (tareasAlmacenadas) {
//       this.tareas = JSON.parse(tareasAlmacenadas);
//     }
//     this.actualizarContadores();
//   }

//   guardarTareas() {
//     localStorage.setItem('tareas', JSON.stringify(this.tareas));
//   }

//   actualizarContadores() {
//     this.tareasPendientes = this.tareas.filter(tarea => !tarea.completada).length;
//     this.tareasCompletadas = this.tareas.filter(tarea => tarea.completada).length;
//   }
// }


