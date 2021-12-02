import { Component, OnInit } from '@angular/core';
import { Musica } from '../musica.model';
import { MusicaService } from './../musica.service';

@Component({
  selector: 'app-musica-read',
  templateUrl: './musica-read.component.html',
  styleUrls: ['./musica-read.component.css']
})
export class MusicaReadComponent implements OnInit {
  musicas: Musica[];
  displayedColumns = ["id", "nome", "nomeautor", "album", "ano","action"];

  constructor(private musicaService: MusicaService) {
    this.musicas = [];
  }

  ngOnInit(): void {
    this.musicaService.read().subscribe((musicas) => {
      this.musicas = musicas;
      console.log(musicas);
    });
  }
}
