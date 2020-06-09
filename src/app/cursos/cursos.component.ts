import { Component, OnInit } from '@angular/core';
import { CursosrootService } from './cursosroot.service';
import { CursosanyService } from './cursosany.service';
import { CursosplatformService } from './cursosplataform.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  constructor(
    private root: CursosrootService,
    private any: CursosanyService,
    private plataform: CursosplatformService
  ) {}

  ngOnInit(): void {
    console.log('cursos');

    this.root.test();
    this.any.test();
    this.plataform.test();
  }
}
