import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/templates/header/header.component';
import { NavComponent } from './components/templates/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { ListaParcitipanteCRUDComponent } from './views/lista-parcitipante-crud/lista-parcitipante-crud.component';
import { ContabilidadeCRUDComponent } from './views/contabilidade-crud/contabilidade-crud.component';

import {HttpClientModule} from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';

import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';

import { ParticipanteCreateComponent } from './components/lista-participantes//participantes/participante-create/participante-create.component';
import { ParticipantesReadComponent } from './components/lista-participantes/participantes/participantes-read/participantes-read.component';

import localePt from '@angular/common/locales/pt';

import {registerLocaleData} from '@angular/common';
import { ParticipantesUpdateComponent } from './components/lista-participantes/participantes/participantes-update/participantes-update.component';
import { ConfirmDialogComponent } from './components/templates/dialogs/confirm-dialog/confirm-dialog.component';
import { ConvidadosReadComponent } from './components/lista-participantes/convidados/convidados-read/convidados-read.component';
import { ConvidadosUpdateComponent } from './components/lista-participantes/convidados/convidados-update/convidados-update.component';
import { ConvidadosCreateComponent } from './components/lista-participantes/convidados/convidados-create/convidados-create.component';
import { ContabilidadeReadComponent } from './components/contabilidade/contabilidade-read/contabilidade-read.component';
import { CompraCreateComponent } from './components/compras/compra-create/compra-create.component';
import { CompraUpdateComponent } from './components/compras/compra-update/compra-update.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    ListaParcitipanteCRUDComponent,
    ContabilidadeCRUDComponent,
    ParticipanteCreateComponent,
    ParticipantesReadComponent,
    ParticipantesUpdateComponent,
    ConfirmDialogComponent,
    ConvidadosReadComponent,
    ConvidadosUpdateComponent,
    ConvidadosCreateComponent,
    ContabilidadeReadComponent,
    CompraCreateComponent,
    CompraUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatTabsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatSnackBarModule,    
    MatFormFieldModule,
    MatRadioModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
