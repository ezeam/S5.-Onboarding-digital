import { Component, Input, OnInit } from '@angular/core';
import { iStep  } from '../Interfaces/iStep';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.css'
})
export class EscenaComponent implements OnInit{
  @Input() steps: iStep[] = [];

  currentStep: number = 0;

  ngOnInit(): void {
    console.log("CurrentStep al principio:", this.currentStep);
  }

  setCurrentStep(index: number) {
    this.currentStep = index;
    console.log("Current step:", this.currentStep);
  }

  irAdelante(i:number) {
    if (this.currentStep >= 0 && this.currentStep < this.steps.length -1) {      
      this.currentStep++;
      console.log("current step adelante",this.currentStep);
    } else {
      this.currentStep = this.steps.length - 1;
    }
  }

  irAtras(i: number) {
    if (this.currentStep > 0 && this.currentStep < this.steps.length) {
      this.currentStep--;
      console.log("current step adelante",this.currentStep);
    } else {
      this.currentStep = 0;
    }
  }
}


