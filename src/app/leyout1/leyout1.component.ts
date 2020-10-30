import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-leyout1',
  templateUrl: './leyout1.component.html',
  styleUrls: ['./leyout1.component.css'],
})
export class Leyout1Component implements OnInit {
  @Input() username: string;
  constructor() {}

  ngOnInit(): void {}
}
