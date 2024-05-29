import { Component, OnInit } from '@angular/core';
import { EscenaComponent } from '../escena/escena.component';
import { iStep  } from '../Interfaces/iStep';
import { StepsService } from '../steps.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  steps: iStep[] = [];

  constructor (private frasesServicio: StepsService){}

  ngOnInit(): void {
    this.steps = this.frasesServicio.getSteps();
  }
}
