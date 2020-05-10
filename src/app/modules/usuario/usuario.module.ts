import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule} from './usuario-routing.module';
import { ContestarEncuestaComponent } from './contestar-encuesta/contestar-encuesta.component';
import { ContestarPreguntaComponent } from './contestar-pregunta/contestar-pregunta.component';
import { EncuestasUsuarioComponent } from './encuestas-usuario/encuestas-usuario.component';
import { EstadisticasUsuarioComponent } from './estadisticas-usuario/estadisticas-usuario.component';
import { FechasUsuarioComponent } from './fechas-usuario/fechas-usuario.component';
import { FooterComponent } from './footer/footer.component';
import { GraficasUsuarioComponent } from './graficas-usuario/graficas-usuario.component';
import { HeaderComponent } from './header/header.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { ListaEncuestasUsuarioComponent } from './lista-encuestas-usuario/lista-encuestas-usuario.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PoliciesComponent } from './policies/policies.component';
import { GraficasUsuario2Component } from './graficas-usuario2/graficas-usuario2.component';
import { GraficasUsuario3Component } from './graficas-usuario3/graficas-usuario3.component';


@NgModule({
  declarations: [AboutComponent,
                PoliciesComponent,
                ContestarEncuestaComponent,
                ContestarPreguntaComponent,
                EncuestasUsuarioComponent,
                EstadisticasUsuarioComponent,
                FechasUsuarioComponent,
                FooterComponent,
                GraficasUsuarioComponent,
                HeaderComponent,
                HeaderNavbarComponent,
                HomeComponent,
                HomeCarouselComponent,
                ListaEncuestasUsuarioComponent,
                GraficasUsuario2Component,
                GraficasUsuario3Component
                ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
  ]
})
export class UsuarioModule { }
