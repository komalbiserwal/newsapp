import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';
import {HttpClientModule} from "@angular/common/http"
import { TcnewsapiService } from './service/tcnewsapi.service';
import { TechComponent } from './tech/tech.component';
import { SportComponent } from './sport/sport.component';
import { BussinesComponent } from './bussines/bussines.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  declarations: [
    AppComponent,
    TopheadlineComponent,
    TechComponent,
    SportComponent,
    BussinesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"",component:TopheadlineComponent},
      {path:"tech",component:TechComponent},
      {path:"sport",component:SportComponent},
      {path:"bussiness",component:BussinesComponent}
    ]),
    LoadingBarHttpClientModule
  ],
  providers: [  TcnewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
