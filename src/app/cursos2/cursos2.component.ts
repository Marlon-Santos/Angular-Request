import { Component, OnInit } from '@angular/core';
import { CursosrootService } from '../cursos/cursosroot.service';
import { CursosplatformService } from '../cursos/cursosplataform.service';
import { CursosanyService } from '../cursos/cursosany.service';

@Component({
  selector: 'app-cursos2',
  templateUrl: './cursos2.component.html',
  styleUrls: ['./cursos2.component.scss'],
  providers: [CursosrootService, CursosanyService, CursosplatformService],
})
export class Cursos2Component implements OnInit {
  constructor(
    private root: CursosrootService,
    private any: CursosanyService,
    private plataform: CursosplatformService
  ) {}

  ngOnInit(): void {
    console.log('cursos2');

    this.root.test();
    this.any.test();
    this.plataform.test();
  }
}
