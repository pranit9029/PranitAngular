import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//All Module Import 
import {CoursesModule} from './courses/courses.module'
import {StaticpagesModule} from './staticpages/staticpages.module'
import {AdminModule} from './admin/admin.module'
import {AuthModule} from './auth/auth.module'
//All Module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {EmployeeserviceService} from './auth/employeeservice.service';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [//IMport all Module here
    BrowserModule,
    HttpClientModule,    
    CoursesModule,
    StaticpagesModule,
    AdminModule,
    AuthModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [EmployeeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
