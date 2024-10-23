import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent} from './componente/cabecalho/cabecalho.component'
import { RodapeComponent } from './componente/rodape/rodape.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CabecalhoComponent,RodapeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stefeventos';
}
