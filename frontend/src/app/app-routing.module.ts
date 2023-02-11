import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AboutComponent } from './components/extras/about/about.component';
import { ContactComponent } from './components/extras/contact/contact.component';
import { FeatureDetailsComponent } from './components/extras/features/feature-details/feature-details.component';
import { featureDetailsList } from './components/extras/features/feature-details/featuredetails';
import { FeaturesComponent } from './components/extras/features/features.component';
import { PageNotFoundComponent } from './components/extras/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { PdfToTextComponent } from './components/utils/conversion/pdf-to-text/pdf-to-text.component';
import { PdfToWordComponent } from './components/utils/conversion/pdf-to-word/pdf-to-word.component';
import { SummarizationComponent } from './components/utils/summarization/summarization.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'features', component: FeaturesComponent},
  {path: 'feature-details', component: FeatureDetailsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'utils/summarization', component: SummarizationComponent},
  {path: 'utils/conversion/pdf-to-text', component: PdfToTextComponent},
  {path: 'utils/conversion/pdf-to-word', component: PdfToWordComponent},

  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
