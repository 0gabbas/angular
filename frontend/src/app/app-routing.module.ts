import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { MusicaComponent } from "./views/musica/musica.component";
import { MusicaCreateComponent } from "./components/musica/musica-create/musica-create.component";
import { MusicaDeleteComponent } from "./components/musica/musica-delete/musica-delete.component";
import { MusicaUpdateComponent } from "./components/musica/musica-update/musica-update.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "musicas",
    component: MusicaComponent,
  },
  {
    path: "musicas/create",
    component: MusicaCreateComponent ,
  },
  {
    path: "musicas/update/:id",
    component: MusicaUpdateComponent ,
  },
  {
    path: "musicas/delete/:id",
    component: MusicaDeleteComponent ,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
