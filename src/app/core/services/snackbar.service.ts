import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  snackBar = inject(MatSnackBar)
  constructor() { }

  success(message:string):void{
    this.snackBar.open(message,'',{
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration : 3000,
      panelClass: ['snackbar-success']
    })
  }

  error(message:string):void{
    this.snackBar.open(message,'',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration : 3000,
      panelClass: ['snackbar-error']
    })
  }
}
