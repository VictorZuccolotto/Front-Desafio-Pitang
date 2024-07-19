import { Component, inject } from '@angular/core';
import { LoadingService } from '../../../services/loading.service';
import { AsyncPipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [AsyncPipe, MatProgressSpinnerModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  loadingService = inject(LoadingService);
  loading$ = this.loadingService.loading$;
}
