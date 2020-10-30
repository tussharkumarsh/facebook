import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-layout2',
  templateUrl: './layout2.component.html',
  styleUrls: ['./layout2.component.css'],
})
export class Layout2Component implements OnInit {
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  @Input() posts: { id?: number; title?: string; body?: string }[];

  constructor() {}

  ngOnInit(): void {}
  buttonClicked() {
    this.onClick.emit();
  }
}
