import { Component, OnInit, Input } from '@angular/core';
import { LanguageDetectionService } from 'src/app/services/language-detection.service';


@Component({
  selector: 'app-detection-results',
  templateUrl: './detection-results.component.html',
  styleUrls: ['./detection-results.component.scss']
})
export class DetectionResultsComponent implements OnInit {
  bigram = 'Bigram';
  trigram = 'Trigram'

  constructor(private languageDetection: LanguageDetectionService) { }

  ngOnInit() {
  }

}
