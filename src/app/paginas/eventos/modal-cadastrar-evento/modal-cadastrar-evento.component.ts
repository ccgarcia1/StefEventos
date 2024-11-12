import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-cadastrar-evento',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-cadastrar-evento.component.html',
  styleUrl: './modal-cadastrar-evento.component.css'
})
export class ModalCadastrarEventoComponent {
 formNewEvento: FormGroup;

 constructor(private formBuilder: FormBuilder){
  this.formNewEvento = this.formBuilder.group({
    titulo: [""],
    data: [""],
    cep: [""],
    logradouro: [""],
    complemento: [""],
    bairro: [""],
    cidade: [""],
    uf: [""],

  });

 }
}
