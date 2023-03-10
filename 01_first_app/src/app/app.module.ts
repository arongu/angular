import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from "./warning-alert/warning-alert.component";
import { UsernameComponent } from './username/username.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    UsernameComponent,
    DisplayDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
