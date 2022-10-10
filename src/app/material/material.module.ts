import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';

const COMPONENTS = [
  MatTableModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [],
  imports: [COMPONENTS],
  exports: [COMPONENTS],
})
export class MaterialModule {}
