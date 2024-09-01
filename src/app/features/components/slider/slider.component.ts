import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit {
  @Input() items = [{ title: '', company: '', date: '', content: [''] }];

  activeItem = { title: '', company: '', date: '', content: [''] };
  companyCopy = '';

  handleSelectedItem(index: number) {
    this.activeItem = this.items[index];
    this.companyCopy = `@${this.activeItem.company} Belgium`;
  }

  ngOnInit(): void {
    this.activeItem = this.items?.[0];
    this.companyCopy = `@${this.activeItem.company} Belgium`;
  }
}
