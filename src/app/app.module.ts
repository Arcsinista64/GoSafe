import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin/admin.component';
import { NavbarAdminComponent } from './admin/components/navbar-admin/navbar-admin.component';
import { NavbarComponent } from './user/components/navbar/navbar.component';
import { UserComponent } from './user/user/user.component';
import { MapComponent } from './user/components/map/map.component';
import { NavbarOption2Component } from './user/components/navbar-option2/navbar-option2.component';
import { NavbarOption3Component } from './user/components/navbar-option3/navbar-option3.component';
import { FooterComponent } from './user/components/footer/footer.component';
import { PerfilComponent } from './user/components/perfil/perfil.component';
import { TemplatesComponent } from './user/components/templates/templates.component';
import { ReportButtonComponent } from './user/components/report-button/report-button.component';
import { FamilyButtonComponent } from './user/components/family-button/family-button.component';
import { Button911Component } from './user/components/button911/button911.component';
import { SignupComponent } from './user/components/signup/signup.component';
import { LoginComponent } from './user/components/login/login.component';
import { ReportsComponent } from './admin/components/reports/reports.component';
import { StatsComponent } from './admin/components/stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavbarAdminComponent,
    NavbarComponent,
    UserComponent,
    MapComponent,
    NavbarOption2Component,
    NavbarOption3Component,
    FooterComponent,
    PerfilComponent,
    TemplatesComponent,
    ReportButtonComponent,
    FamilyButtonComponent,
    Button911Component,
    SignupComponent,
    LoginComponent,
    ReportsComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDY7CPzQS0Fhcwr60fqAhiq4NAl8jxUhog'
    })
  ],
  
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, SignupComponent, ReportButtonComponent]
})
export class AppModule { }
