import { Component, OnInit } from '@angular/core';
import { PersonajesServiceService } from 'src/app/services/personajes-service.service';
import { filter, take } from 'rxjs/operators';
import { Info, Personaje } from 'src/app/models/personaje';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-personajes-listado',
  templateUrl: './personajes-listado.component.html',
  styleUrls: ['./personajes-listado.component.css']
})
export class PersonajesListadoComponent implements OnInit {

personajes : any;
pagina : number = 1;
info: any;

  constructor(private personajeService : PersonajesServiceService) {

  }

  ngOnInit(): void {

    this.listarPersonajes(this.pagina)

  }

  listarPersonajes(pag : number) : void {
    this.personajeService.getPersonajes(pag).pipe(take(1)).subscribe(data => {
     this.personajes = data
     this.info = this.personajes.info;
  //   console.log(data);
  //   console.log(this.personajes.results);
  //   console.log(this.personajes.info);
    });
  }

  avanzarPag(){
    if(this.info.next != null)
    this.pagina++;
 //   console.log(this.pagina)
    this.listarPersonajes(this.pagina)
    }


  retrocederPag(){
  if(this.info.prev != null)
    this.pagina--;
  //  console.log(this.pagina)
    this.listarPersonajes(this.pagina)
    }

}




