import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './layouts/about-us/about-us.component';
import { CookiesPolicyComponent } from './layouts/cookies-policy/cookies-policy.component';
import { FaqsComponent } from './layouts/faqs/faqs.component';
import { LandingComponent } from './layouts/landing/landing.component';
import { LegalInformationComponent } from './layouts/legal-information/legal-information.component';
import { PortfolioComponent } from './layouts/portfolio/portfolio.component';
import { PrivacyPolicyComponent } from './layouts/privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: '', redirectTo: "index", pathMatch: "full"},
  { path: 'index', component: LandingComponent },
  { path: "privacy-policy", component: PrivacyPolicyComponent },
  { path: "cookies-policy", component: CookiesPolicyComponent },
  { path: "legal-information", component: LegalInformationComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "faqs", component: FaqsComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: '**', redirectTo: "index", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
