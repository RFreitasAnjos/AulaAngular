import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente04',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente04.component.html',
  styleUrl: './componente04.component.css',
})
export class Componente04Component {
  // Váriavel de exibição
  exibir: boolean = true;
  
  acao(){
    if(this.exibir = true){
      this.exibir=false
    } else{
      this.exibir=true
    }
  }
}
