import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-original-sample',
  templateUrl: './original-sample.component.html',
  styleUrls: ['./original-sample.component.scss']
})
export class OriginalSampleComponent implements OnInit {
  // selections
  directionTypes: Array<string>;
  wrapTypes: Array<string>;
  justifyContentTypes: Array<string>;
  alignItemsTypes: Array<string>;
  alignContentTypes: Array<string>;
  alignSelfTypes: Array<string>;

  // Outside container
  flexSelection: {
    directionType: string;
    wrapType: string;
    justifyContentType: string;
    alignItemsType: string;
  }

  alignContentType: string;

  // inside element
  alignSelfType: string;

  constructor() { }

  ngOnInit() {
    this.directionTypes = [
      'column',
      'column-reverse',
      'row',
      'row-reverse'
    ];

    this.wrapTypes = [
      'nowrap',
      'wrap',
      'wrap-reverse',
    ];

    this.justifyContentTypes = [
      'none',
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around'
    ];

    this.alignItemsTypes = [
      'none',
      'center',
      'flex-start',
      'flex-end',
      'stretch',
      'baseline',
    ];

    this.alignContentTypes = [
      'none',
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'stretch',
    ]

    this.alignSelfTypes = [
      'auto',
      'flex-start',
      'flex-end',
      'center',
      'baseline',
      'stretch'
    ]

    this.flexSelection = {
      directionType: this.directionTypes[0],
      wrapType: this.wrapTypes[0],
      justifyContentType: this.justifyContentTypes[0],
      alignItemsType: this.alignItemsTypes[0],
    };

    this.alignContentType = this.alignContentTypes[0];
    this.alignSelfType = this.alignSelfTypes[0];
  }

  slectType(type: string) {

  }

  getTypeClass() {
    const result = [];
    Object.keys(this.flexSelection).forEach((type: string) => {
      result.push(type + '--' + this.flexSelection[type])
    })
    return result;
  }

  getAlignContentType() {
    return 'alignContentType' + '--' + this.alignContentType;
  }

  getAlignSelfType() {
    return 'alignSelfType' + '--' + this.alignSelfType;
  }
}
