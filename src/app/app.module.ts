import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
    PortfolioComponent,
    FaqsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbNavModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDMDAbC0aGPdwReP7anut5SnbsMAuYMjrw",
      authDomain: "landing-jess.firebaseapp.com",
      projectId: "landing-jess",
      storageBucket: "landing-jess.appspot.com",
      messagingSenderId: "562773962494",
      appId: "1:562773962494:web:f17cce2f45b8493d82ffaf",
      measurementId: "G-CGJBCN0LX4"
    }),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
