import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import {
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MaterialSortOrderComponent } from './material-sort-order/material-sort-order.component';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const modules = [
  CommonModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatAutocompleteModule,
  MatPaginatorModule,
  MatCardModule,
  MatToolbarModule,
  MatSidenavModule,
  MatSelectModule,
  MatSnackBarModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules, MaterialSortOrderComponent],
  declarations: [MaterialSortOrderComponent],
})
export class MaterialModule {}
