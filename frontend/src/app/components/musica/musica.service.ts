import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Musica } from './musica.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {
  baseUrl = "http://localhost:3001/songs";
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}
  
  showMessage(msg: string, isError: Boolean = false): void{
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    } );
  }
 create(musica: Musica): Observable<Musica>{
   return this.http.post<Musica>(this.baseUrl, musica);
 }
 read(): Observable<Musica[]> {
   return this.http.get<Musica[]>(this.baseUrl);
 }
readById(id:number): Observable<Musica> {
  const url = `${this.baseUrl}/${id}`;
  return this.http.get<Musica>(url);
}
update(musica: Musica): Observable<Musica>{
  const url = `${this.baseUrl}/${musica.id}`
  return this.http.put<Musica>(url, musica);
}
delete (id:number ): Observable<Musica> {
  const url = `${this.baseUrl}/${id}`;
  return this.http.delete<Musica>(url);
}
}


