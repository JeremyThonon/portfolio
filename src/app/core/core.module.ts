import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, MainComponent, FooterComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent, MainComponent, FooterComponent],
})
export class CoreModule {}
