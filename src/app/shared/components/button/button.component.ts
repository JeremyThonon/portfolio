import { Component, Input } from '@angular/core';
import { scrollToContent } from '../../utils/scroll';

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
  @Input() href = '';

  handleClick(download: boolean) {
    if (download) {
      this.downloadPdf();
    } else if (this.href) {
      this.sendEmail();
    } else if (this.label === 'About me') {
      scrollToContent('#about');
    }
  }

  sendEmail() {
    window.open(this.href);
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
