import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { TestInterfaceComponent } from './test-interface/test-interface.component';
import { ConvertToSpacePipe } from './shared/convert-to-space-Pipr';
import { StartComponent } from './start/start.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent, 
    TestInterfaceComponent,
    ConvertToSpacePipe,
    StartComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
