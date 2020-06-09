import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cursos2Component } from './cursos2.component';
import { CursosanyService } from '../cursos/cursosany.service';
import { CursosplatformService } from '../cursos/cursosplataform.service';
import { CursosrootService } from '../cursos/cursosroot.service';

@NgModule({
  declarations: [Cursos2Component],
  imports: [CommonModule],
  providers: [CursosanyService, CursosplatformService, CursosrootService],
  exports: [Cursos2Component],
})
export class Cursos2Module {}
