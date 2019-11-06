import {Component, OnInit} from '@angular/core';

export interface PeriodicElement {

  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {weight: 1, symbol: 'H'},
  {weight: 4, symbol: 'He'},
  {weight: 6, symbol: 'Li'},
  {weight: 9, symbol: 'Be'},
  {weight: 10, symbol: 'B'},
  {weight: 12, symbol: 'C'},
  {weight: 14, symbol: 'N'},
  {weight: 15, symbol: 'O'},
  {weight: 18, symbol: 'F'},
  {weight: 20, symbol: 'Ne'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-language-model-viewer',
  templateUrl: './language-model-viewer.component.html',
  styleUrls: ['./language-model-viewer.component.scss']
})
export class LanguageModelViewerComponent implements OnInit {
  displayedColumns: string[] = ['weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit() {
  }
}
