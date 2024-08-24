import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-block',
  templateUrl: './image-block.component.html',
  styleUrl: './image-block.component.scss',
})
export class ImageBlockComponent implements OnInit {
  @Input() src = '';
  @Input() alt = '';
  @Input() title = '';

  ngOnInit() {
    console.log({ src: this.src, alt: this.alt, title: this.title });
  }
}
