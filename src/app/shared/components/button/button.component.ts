import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label = '';
  @Input() download = false;

  handleClick() {
    const a = document.createElement('a');
    const url = 'resume.pdf';

    a.href = url;
    a.target = '_blank';
    a.download = 'resume.pdf';

    document.body.appendChild(a);
    a.click();
    a.remove();
  }
}
