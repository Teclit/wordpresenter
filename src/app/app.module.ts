import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import { MainContainerComponent } from './layout/maincontainer/maincontainer.component';
import {ShowBoxComponent } from './layout/showbox/showbox.component';
import {FormsModule} from "@angular/forms";
import {WordsService} from './services/words.service';
import { InputContainerComponent } from './layout/inputcontainer/inputcontainer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InputContainerComponent,
    MainContainerComponent,
    ShowBoxComponent
   
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
  providers: [WordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
