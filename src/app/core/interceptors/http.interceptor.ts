import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, finalize, tap } from 'rxjs';
import { LoadingService } from '../services/loading.service';
import { inject } from '@angular/core';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService)
  loadingService.show();
  
  return next(req).pipe(

    finalize(() => {  
      loadingService.hide();
    })
  );


}
  
