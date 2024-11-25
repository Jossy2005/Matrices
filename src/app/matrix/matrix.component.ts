import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-matrix',
  standalone: true, // Configurar como standalone
  imports: [CommonModule, ButtonModule], // Importar CommonModule y PrimeNG
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent {
  matrix: number[][] = [];
  cellSize: number = 50; // Tamaño en píxeles
  cellColor: string = 'rgb(133, 255, 159)';

  generateMatrix(size: number): void {
    this.matrix = Array.from({ length: size }, () => Array(size).fill(0));
  }
}
