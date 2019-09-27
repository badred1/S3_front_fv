import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef,MatDialogConfig} from '@angular/material';
import { SigninFComponent } from '../signin-f/signin-f.component';
@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(public dialog: MatDialog ) { }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width="auto";
    dialogConfig.height="auto";
    dialogConfig.scrollStrategy
    
    
    

    
    const dialogRef = this.dialog.open(SigninFComponent,dialogConfig);

   /* dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });*/
   /* dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
  );    */
  }
  
}
