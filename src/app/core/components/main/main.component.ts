import { Component } from '@angular/core';
import { contents, programmingLanguages } from './main.conf';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  contents = contents;
  languages = programmingLanguages;
  imageObject = {
    src: 'me.jpg',
    alt: 'Jérémy Thonon picture',
  };
}
