import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './Components/TestComponent/test/test.component';
import { ParentcompComponent } from './Components/Parent/parentcomp/parentcomp.component';
import { ChildcomoneComponent } from './Components/Childran/childcomone/childcomone.component';
import { ChildcomtwoComponent } from './Components/Childran/childcomtwo/childcomtwo.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ParentcompComponent,
    ChildcomoneComponent,
    ChildcomtwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
