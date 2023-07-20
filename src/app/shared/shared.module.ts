import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';



@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent
  ],
  exports: [
    PokeHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
