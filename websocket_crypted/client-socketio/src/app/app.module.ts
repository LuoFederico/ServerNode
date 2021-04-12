
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SocketService } from './socket.service';
import { CesarService } from './cesar.service';
import { CyptoJsService } from './crypto.service';
import { FormsModule } from '@angular/forms';

const config: SocketIoConfig = { url: 'https://3000-red-mongoose-txur80jt.ws-eu03.gitpod.io/',  options: {/*transport : ['websocket'], withCredentials:false*/} };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    FormsModule
  ],
  providers: [SocketService, CesarService, CyptoJsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

