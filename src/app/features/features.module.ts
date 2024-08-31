import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailBlockComponent } from './components/email-block/email-block.component';
import { SocialsBlockComponent } from './components/socials-block/socials-block.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    EmailBlockComponent,
    SocialsBlockComponent,
    BackToTopComponent,
    SliderComponent,
  ],
  imports: [CommonModule],
  exports: [
    EmailBlockComponent,
    SocialsBlockComponent,
    BackToTopComponent,
    SliderComponent,
  ],
})
export class FeaturesModule {}
