import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgStylesComponent } from './components/ng-styles/ng-styles.component';
import { CssComponent } from './components/css/css.component';
import { ClasesComponent } from './components/clases/clases.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ResaltadoDirective } from './directivas/resaltado.directive';
import { GirarDirective } from './directivas/girar.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgStylesComponent,
    CssComponent,
    ClasesComponent,
    LoadingComponent,
    ResaltadoDirective,
    GirarDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
