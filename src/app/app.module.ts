import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { ConvertToSpacePipe } from './pipes/convert-to-space.pipe';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    FooterComponent,
    ConvertToSpacePipe,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'products', component: ProductComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
