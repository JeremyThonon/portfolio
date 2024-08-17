import { Component } from '@angular/core';
import { contents } from './main.conf';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  contents = contents;
}
