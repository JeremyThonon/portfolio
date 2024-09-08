import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menus/menu/menu.component';
import { MenuMobileComponent } from './components/menus/menu-mobile/menu-mobile.component';
import { ButtonComponent } from './components/button/button.component';
import { ContentComponent } from './components/content/content.component';
import { ImageBlockComponent } from './components/image-block/image-block.component';

@NgModule({
  declarations: [
    MenuComponent,
    MenuMobileComponent,
    ButtonComponent,
    ContentComponent,
    ImageBlockComponent,
  ],
  imports: [CommonModule],
  exports: [
    MenuComponent,
    MenuMobileComponent,
    ButtonComponent,
    ContentComponent,
    ImageBlockComponent,
  ],
})
export class SharedModule {}
