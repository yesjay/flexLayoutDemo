import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex-layout-sample',
  templateUrl: './flex-layout-sample.component.html',
  styleUrls: ['./flex-layout-sample.component.scss']
})
export class FlexLayoutSampleComponent implements OnInit {
  layoutDirections: Array<string>;
  horizontaDirections: Array<string>;
  verticalDirections: Array<string>;
  fxAlignSelfs: Array<string>;

  layoutDirection: string;
  horizontaDirection: string;
  verticalDirection: string;

  gapDirection: string;

  fxAlignSelf: string;

  templateLog: string;
  fillSampleLog: string;

  constructor() { }

  ngOnInit() {
    this.layoutDirections = ['row', 'column', 'row-reverse', 'column-reverse'];
    this.horizontaDirections = [
      'none',
      'center',
      'end',
      'space-around',
      'space-between',
      'space-evenly'
    ];
    this.verticalDirections = [
      'none',
      'start',
      'center',
      'end',
      'stretch'
    ];
    this.fxAlignSelfs = [
      'auto',
      'start',
      'center',
      'baseline',
      'end',
      'stretch'
    ]

    this.layoutDirection = this.layoutDirections[0];
    this.horizontaDirection = this.horizontaDirections[0];
    this.verticalDirection = this.verticalDirections[0];

    this.gapDirection = this.layoutDirections[0];

    this.fxAlignSelf = this.fxAlignSelfs[0];

    this.templateLog = `<div fxLayout="${this.layoutDirection}"
    fxLayoutAlign="${this.verticalDirection}">`;
    this.fillSampleLog = `
      <div fxFill>
        <div fxFlex="20">1</div>
        <div fxFlex="80">2</div>
      </div>
    `;
  }

  checkTemplateLog() {
    if (this.horizontaDirection === 'none') {
      this.templateLog = `<div fxLayout="${this.layoutDirection}" fxLayoutAlign="${this.verticalDirection}">`;
    } else {
      this.templateLog = `<div fxLayout="${this.layoutDirection}" fxLayoutAlign="${this.horizontaDirection} ${this.verticalDirection}">`;
    }
  }
}
