import { Component, OnInit, Input } from '@angular/core';
import { LanguageDetectionResult } from 'src/app/services/language-detection.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  @Input() detectionResult: LanguageDetectionResult;
  @Input() ngram: string;

  constructor() { }

  ngOnInit() {
  }

}
