import { Component, OnInit } from '@angular/core';
import { EpisodeServiceService } from 'src/app/services/episode-service.service';
import { Episode, Result } from 'src/app/models/episode';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-episodios-listado',
  templateUrl: './episodios-listado.component.html',
  styleUrls: ['./episodios-listado.component.css']
})
export class EpisodiosListadoComponent implements OnInit {

episodes : any;
pagina : number = 1;
info : any;
mostrarRetro = true;
mostrarAvanzar = true;

  constructor (private episodeService : EpisodeServiceService) {

  }

  ngOnInit() :void {

    this.listarEpisodios(this.pagina);

  }

  listarEpisodios(page : number){
    this.episodeService.getEpisodes(page).subscribe(data => {
      this.episodes = data
      this.info = this.episodes.info;
   //   console.log(data);
  //    console.log(this.episodes.results);
   //   console.log(this.episodes.info);
    });
  }

  avanzarPag(){
    if(this.info.next != null)
    this.pagina++;
  //  console.log(this.pagina)
    this.listarEpisodios(this.pagina)
    }


  retrocederPag(){
  if(this.info.prev != null)
    this.pagina--;
  //  console.log(this.pagina)
    this.listarEpisodios(this.pagina)
    }


}
