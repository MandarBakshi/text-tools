import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { FeaturesComponent } from './components/extras/features/features.component';
import { AboutComponent } from './components/extras/about/about.component';
import { ContactComponent } from './components/extras/contact/contact.component';
import { PageNotFoundComponent } from './components/extras/page-not-found/page-not-found.component';
import { PdfToTextComponent } from './components/utils/conversion/pdf-to-text/pdf-to-text.component';
import { PdfToWordComponent } from './components/utils/conversion/pdf-to-word/pdf-to-word.component';
import { SummarizationComponent } from './components/utils/summarization/summarization.component';
import { SummaryFromPdfComponent } from './components/utils/summarization/summary-from-pdf/summary-from-pdf.component';
import { SummaryFromTextComponent } from './components/utils/summarization/summary-from-text/summary-from-text.component';
import { SummaryFromUrlComponent } from './components/utils/summarization/summary-from-url/summary-from-url.component';
import { FeatureDetailsComponent } from './components/extras/features/feature-details/feature-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FeaturesComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    PdfToTextComponent,
    PdfToWordComponent,
    SummarizationComponent,
    SummaryFromPdfComponent,
    SummaryFromTextComponent,
    SummaryFromUrlComponent,
    FeatureDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
