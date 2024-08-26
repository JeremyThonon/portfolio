import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailBlockComponent } from './components/email-block/email-block.component';
import { SocialsBlockComponent } from './components/socials-block/socials-block.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';

@NgModule({
  declarations: [
    EmailBlockComponent,
    SocialsBlockComponent,
    BackToTopComponent,
  ],
  imports: [CommonModule],
  exports: [EmailBlockComponent, SocialsBlockComponent, BackToTopComponent],
})
export class FeaturesModule {}
