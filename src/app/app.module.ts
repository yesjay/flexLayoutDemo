import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";

// import module
import { MaterialModule } from './core/material.module';

// import component
import { AppComponent } from './app.component';
import { OriginalSampleComponent } from './original-sample/original-sample.component';
import { FlexLayoutSampleComponent } from './flex-layout-sample/flex-layout-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    OriginalSampleComponent,
    FlexLayoutSampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
