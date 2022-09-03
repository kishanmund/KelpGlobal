import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { WidgetComponent } from './widget/widget.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { WidgetTableComponent } from './widget-table/widget-table.component';
import { NgImageSliderModule } from 'ng-image-slider';

import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    WidgetComponent,
    WidgetTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClickOutsideModule,
    NgImageSliderModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
