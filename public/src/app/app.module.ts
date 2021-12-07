import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './notes/notes.component';
import { NotesService } from './notes/notes.service';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
