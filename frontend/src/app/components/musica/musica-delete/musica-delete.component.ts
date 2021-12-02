import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"
import { MusicaService } from './../musica.service';
import { Musica } from './../musica.model';

@Component({
  selector: 'app-musica-delete',
  templateUrl: './musica-delete.component.html',
  styleUrls: ['./musica-delete.component.css']
})
export class MusicaDeleteComponent implements OnInit {
  musica: Musica;

  constructor(
    private musicaService: MusicaService,
    private router: Router,
    private route :ActivatedRoute
  ) {
    this.musica =  {nome : "", nomeautor: "",album:"", ano: 0}
   }

   ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id") || 0;
    id = +id;
    this.musicaService.readById(id).subscribe((musica): void => {
      this.musica = musica;
    });

}
deleteMusica(): void {
  this.musicaService.delete(this.musica.id || 0 ).subscribe(()=>{
    this.musicaService.showMessage("Musica excluida com sucesso")
    this.router.navigate(["/musicas"]);
  })
}
cancel(): void{
  this.router.navigate(["/musicas"])
}
}
