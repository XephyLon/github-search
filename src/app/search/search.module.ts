import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { ResultCardComponent } from './result-card/result-card.component';
import { SearchRoutingModule } from "./search-routing.module";
import { MaterialModule } from "../shared/material.module";
import { SharedModule } from "../shared/shared.module";
import { NoResultsComponent } from './no-results/no-results.component';



@NgModule({
  declarations: [SearchComponent, ResultCardComponent, NoResultsComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class SearchModule { }
