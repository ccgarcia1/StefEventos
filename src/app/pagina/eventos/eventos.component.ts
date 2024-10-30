import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { FormControl, ReactiveFormsModule } from '@angular/forms';

interface Evento {
  titulo: string;
  local: string;
  data: string;

}

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule, CardComponent, ReactiveFormsModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  listaEventos: Evento[]= [
  {
    titulo: 'Jornada Angular - Aula 1',
    local: 'Microsoft Teams',
    data: '10/10/2024'
  },
  {
    titulo: 'Jornada Angular - Aula 2',
    local: 'Microsoft Teams',
    data: '10/10/2024'
  },
  {
    titulo: 'Jornada Spring Boot - Aula 2',
    local: 'Microsoft Teams',
    data: '10/10/2024'
  },
  {
    titulo: 'Jornada Vue - Aula 1 ',
    local: 'Microsoft Teams',
    data: '05/05/2025'
  },
  {
    titulo: 'Jornada PL/SQL - Aula 1',
    local: 'Google Meet',
    data: '10/10/2025'
  }

];
listaEventosFiltrada: Evento[] = this.listaEventos;
filtroNome = new FormControl();
filtroLocal = new FormControl();

onChangeFiltroNome(){
 this.listaEventosFiltrada = this.listaEventos.filter((evento) => 
  evento.titulo.toUpperCase().includes(this.filtroNome.value.toUpperCase())
  );
}

onChangeFiltroLocal(){
  this.listaEventosFiltrada = this.listaEventos.filter((evento) => 
    evento.local.toUpperCase().includes(this.filtroLocal.value.toUpperCase())
    );
  }
}

