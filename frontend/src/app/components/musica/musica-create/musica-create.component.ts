import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicaService } from '../musica.service';
import { Musica } from '../musica.model'; 

@Component({
  selector: 'app-musica-create',
  templateUrl: './musica-create.component.html',
  styleUrls: ['./musica-create.component.css']
})
export class MusicaCreateComponent implements OnInit {
  musica: Musica = {
    nome: "",
    nomeautor:"",
    album:"",
    ano:0, 
  };

 constructor(private musicaService: MusicaService, private router: Router) {} 

  ngOnInit(): void {
  }

  createMusica(): void{
    this.musicaService.create(this.musica).subscribe(()=>{
      this.musicaService.showMessage("Musica cadastrada!");
      this.router.navigate(["/musicas"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/musicas"]);
  }
}
