import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { CountdownTimerControlsComponent } from './components/countdown-timer-controls/countdown-timer-controls.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    CountdownTimerComponent,
    CountdownTimerControlsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
