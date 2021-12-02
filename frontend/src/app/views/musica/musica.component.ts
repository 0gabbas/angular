import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {
constructor(private router: Router) {}
    
  ngOnInit(): void {}

  navigateToProductCreate(): void{
    this.router.navigate(["/musicas/create"]);
  }
}
