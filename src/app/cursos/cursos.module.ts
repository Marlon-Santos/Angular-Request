import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosanyService } from './cursosany.service';
import { CursosplatformService } from './cursosplataform.service';
import { CursosrootService } from './cursosroot.service';

@NgModule({
  declarations: [CursosComponent],
  imports: [CommonModule],
  exports: [CursosComponent],
  providers: [CursosanyService, CursosplatformService, CursosrootService],
})
export class CursosModule {}
