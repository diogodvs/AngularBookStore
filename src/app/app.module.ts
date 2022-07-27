import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { NavComponent } from './component/shared/nav/nav.component';
import { BookStoreAppComponent } from './component/book-store-app/book-store-app.component';
import { FiltersComponent } from './component/bookStore-app/filters/filters.component';
import { ProductListComponent } from './component/bookStore-app/product-list/product-list.component';
import { ProductItemComponent } from './component/bookStore-app/product-list/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './component/bookStore-app/product-list/product-list.component.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BookStoreAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
