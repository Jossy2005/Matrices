import { bootstrapApplication } from '@angular/platform-browser';
import { MatrixComponent } from './app/matrix/matrix.component';

bootstrapApplication(MatrixComponent).catch(err => console.error(err));
