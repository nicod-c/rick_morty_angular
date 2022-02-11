import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonajesServiceService } from 'src/app/services/personajes-service.service';

@Component({
  selector: 'app-personajes-detalle',
  templateUrl: './personajes-detalle.component.html',
  styleUrls: ['./personajes-detalle.component.css']
})
export class PersonajesDetalleComponent implements OnInit {

  personaje : any;
  rutaId : string = "";


  constructor(private personajeService : PersonajesServiceService, activatedRoute : ActivatedRoute) {

    activatedRoute.params.subscribe ( params => {
      this.rutaId = params [ 'id' ];});

  }

  ngOnInit(): void {

    this.mostrarPersonaje(this.rutaId);

  }

  mostrarPersonaje(id : string){
    this.personajeService.getPersonajeById(id).subscribe(data => {
      this.personaje = data
      console.log(data);
    });
  }


}
