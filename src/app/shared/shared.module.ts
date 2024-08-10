import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menus/menu/menu.component';
import { MenuMobileComponent } from './components/menus/menu-mobile/menu-mobile.component';

@NgModule({
  declarations: [MenuComponent, MenuMobileComponent],
  imports: [CommonModule],
  exports: [MenuComponent, MenuMobileComponent],
})
export class SharedModule {}
