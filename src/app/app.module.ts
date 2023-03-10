import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './layouts/landing/landing.component';
import { CookiesPolicyComponent } from './layouts/cookies-policy/cookies-policy.component';
import { LegalInformationComponent } from './layouts/legal-information/legal-information.component';
import { PrivacyPolicyComponent } from './layouts/privacy-policy/privacy-policy.component';
import { AboutUsComponent } from './layouts/about-us/about-us.component';
import { PortfolioComponent } from './layouts/portfolio/portfolio.component';
import { FaqsComponent } from './layouts/faqs/faqs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    CookiesPolicyComponent,
    LegalInformationComponent,
    PrivacyPolicyComponent,
    AboutUsComponent,
    PortfolioComponent,
    FaqsComponent
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
