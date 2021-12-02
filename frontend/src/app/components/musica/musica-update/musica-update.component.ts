import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"
import { MusicaService } from './../musica.service';
import { Musica } from './../musica.model';

@Component({
  selector: 'app-musica-update',
  templateUrl: './musica-update.component.html',
  styleUrls: ['./musica-update.component.css']
})
export class MusicaUpdateComponent implements OnInit {
  musica: Musica;

  constructor(
    private musicaService: MusicaService,
    private router: Router,
    private route: ActivatedRoute) 
    {
      this.musica =  {nome : "", nomeautor: "",album:"", ano: 0}
    }
    
      
    

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id") || 0;
    id = +id;
    this.musicaService.readById(id).subscribe((musica): void => {
      this.musica = musica;
    });
  }
updateMusica(): void {
  this.musicaService.update(this.musica).subscribe(()=>{
    this.musicaService.showMessage("Musica Atualizada com Sucesso");
    this.router.navigate(["/musicas"]);
  });
}
cancel(): void {
  this.router.navigate(["/musicas"])
}
}
