import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './container/product/product.component';
import { SearchComponent } from './container/search/search.component';
import {FormsModule} from "@angular/forms";
import { ContainerComponent } from './container/container.component';
import { ItemComponent } from './container/product/item/item.component';
import { FilterComponent } from './container/product/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    SearchComponent,
    ContainerComponent,
    ItemComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
