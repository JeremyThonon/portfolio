import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailBlockComponent } from './components/email-block/email-block.component';
import { SocialsBlockComponent } from './components/socials-block/socials-block.component';

@NgModule({
  declarations: [EmailBlockComponent, SocialsBlockComponent],
  imports: [CommonModule],
  exports: [EmailBlockComponent, SocialsBlockComponent],
})
export class FeaturesModule {}
