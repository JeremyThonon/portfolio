import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  @Input() class = '';
  @Input() span = { text: '', display: false };
  @Input() title = { text: '', display: false };
  @Input() paragraph = { text: '', display: false };
  @Input() button = { text: '', display: false };
}
