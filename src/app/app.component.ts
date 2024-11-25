import { Component } from '@angular/core';
import { MatrixComponent } from './matrix/matrix.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatrixComponent], // Importa el MatrixComponent aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'matrix-app';
}
