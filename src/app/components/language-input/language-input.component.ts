import { Component, OnInit } from '@angular/core';
import { NgramService } from 'src/app/services/ngram.service';
import { LanguageDetectionService } from 'src/app/services/language-detection.service';


@Component({
  selector: 'app-language-input',
  templateUrl: './language-input.component.html',
  styleUrls: ['./language-input.component.scss']
})
export class LanguageInputComponent implements OnInit {

  userInput = '';

  constructor(
    private languageDetection: LanguageDetectionService,
    private ngramService: NgramService) { }

  ngOnInit() {
    
  }

  onKey(event: any) {
    this.userInput = event.target.value;
    this.ngramService.getNGrams(this.userInput.toLocaleLowerCase());
    this.languageDetection.detectLanguage(this.ngramService.userBigrams, this.ngramService.userTrigrams);

  }

}

