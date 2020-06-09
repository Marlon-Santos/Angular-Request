import { Component, OnInit } from '@angular/core';
import { CursosrootService } from './cursos/cursosroot.service';
import { CursosanyService } from './cursos/cursosany.service';
import { CursosplatformService } from './cursos/cursosplataform.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
}
