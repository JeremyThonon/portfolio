import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label = '';
  @Input() buttonClass = '';
  @Input() labelClass = '';
  @Input() download = false;

  handleClick(download: boolean) {
    if (download) {
      this.downloadPdf();
    }
  }

  downloadPdf() {
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
