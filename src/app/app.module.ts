import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { NavComponent } from './component/shared/nav/nav.component';
import { FiltersComponent } from './component/bookStore-app/filters/filters.component';
import { ProductListComponent } from './component/bookStore-app/product-list/product-list.component';
import { ProductItemComponent } from './component/bookStore-app/product-list/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksService } from './component/bookStore-app/product-list/product-list.service';
import { AppRoutingModule } from './app-routing.module';
import { BookStoreAppComponent } from './component/bookStore-app/book-store-app.component';
import { AboutComponent } from './component/bookStore-app/about/about.component';
import { SuporteComponent } from './component/bookStore-app/suporte/suporte.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent,
    BookStoreAppComponent,
    AboutComponent,
    SuporteComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
