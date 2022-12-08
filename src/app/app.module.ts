import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http'
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { LogginService } from './logging.service';
@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
  ],
  bootstrap: [AppComponent],
  // providers:[LogginService]
})
export class AppModule {}
