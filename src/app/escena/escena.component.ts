import { Component, Input } from '@angular/core';
import { iStep  } from '../Interfaces/iStep';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.css'
})
export class EscenaComponent {  
  @Input() steps: iStep[] = [];

  currentStep: number = 0;

  irAdelante(){
   const totalPasos: number = 3;

   if(this.currentStep <= totalPasos){
    this.currentStep++;
   }
  }

  isAtras(){
    if(this.currentStep > 0){
      this,this.currentStep--;
    }
  }
}


