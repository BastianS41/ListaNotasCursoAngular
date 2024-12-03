import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { TablaAlumnosComponent } from "./components/tabla-alumnos/tabla-alumnos.component";
import { TablaCursosComponent } from "./components/tabla-cursos/tabla-cursos.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  standalone: true, 
  imports: [CommonModule, TablaAlumnosComponent, TablaCursosComponent] 
})
export class AppComponent {
  cursos: boolean = true;

  handleCambio() {
    this.cursos = !this.cursos;
  }
}
