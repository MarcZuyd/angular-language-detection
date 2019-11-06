import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguageInputComponent } from './components/language-input/language-input.component';
import { DetectionResultsComponent } from './components/detection-results/detection-results.component';
import { LanguageModelViewerComponent } from './components/language-model-viewer/language-model-viewer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';


import {MatInputModule} from '@angular/material/input'; 


import {MatPaginatorModule} from '@angular/material/paginator'; 


import {MatTableModule} from '@angular/material/table'; 


import {MatSortModule} from '@angular/material/sort'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card';
import { MenuComponent } from './components/menu/menu.component'; 
import { HttpClientModule } from '@angular/common/http';
import { OutputComponent } from './components/detection-results/output/output.component';


import {MatGridListModule} from '@angular/material/grid-list'; 
@NgModule({
  declarations: [
    AppComponent,
    LanguageInputComponent,
    DetectionResultsComponent,
    LanguageModelViewerComponent,
    MenuComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
