import { Injectable } from '@angular/core';
import { LanguageModelsService, NgramModel } from './language-models.service';

export interface LanguageDetectionResult {
  language: string;
  pArabic: number;
  pDutch: number;
  pEnglish: number;
  pFrench: number;
  pGerman: number;
  pRussian: number;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageDetectionService {

  araBigramModel: NgramModel[];
  araTrigramModel: NgramModel[];
  
  deuBigramModel: NgramModel[];
  deuTrigramModel: NgramModel[];
  
  engBigramModel: NgramModel[];
  engTrigramModel: NgramModel[];

  fraBigramModel: NgramModel[];
  fraTrigramModel: NgramModel[];
  
  nldBigramModel: NgramModel[];
  nldTrigramModel: NgramModel[];

  rusBigramModel: NgramModel[];
  rusTrigramModel: NgramModel[];

  bigramResult: LanguageDetectionResult;
  trigramResult: LanguageDetectionResult;

  constructor(private languageModelService: LanguageModelsService) {
    this.getNgramModels();
   }


  getNgramModels() {
    this.languageModelService.getAraBigramModel()
      .subscribe((data: NgramModel[]) => this.araBigramModel = {...data});

    this.languageModelService.getAraTrigramModel()
      .subscribe((data: NgramModel[]) => this.araTrigramModel = {...data});

    this.languageModelService.getDeuBigramModel()
      .subscribe((data: NgramModel[]) => this.deuBigramModel = {...data});

    this.languageModelService.getDeuTrigramModel()
      .subscribe((data: NgramModel[]) => this.deuTrigramModel = {...data});

    this.languageModelService.getEngBigramModel()
      .subscribe((data: NgramModel[]) => this.engBigramModel = {...data});

    this.languageModelService.getEngTrigramModel()
      .subscribe((data: NgramModel[]) => this.engTrigramModel = {...data});

    this.languageModelService.getFraBigramModel()
      .subscribe((data: NgramModel[]) => this.fraBigramModel = {...data});

    this.languageModelService.getFraTrigramModel()
      .subscribe((data: NgramModel[]) => this.fraTrigramModel = {...data});

    this.languageModelService.getNldBigramModel()
      .subscribe((data: NgramModel[]) => this.nldBigramModel = {...data});

    this.languageModelService.getNldTrigramModel()
      .subscribe((data: NgramModel[]) => this.nldTrigramModel = {...data});

    this.languageModelService.getRusBigramModel()
      .subscribe((data: NgramModel[]) => this.rusBigramModel = {...data});

    this.languageModelService.getRusTrigramModel()
      .subscribe((data: NgramModel[]) => this.rusTrigramModel = {...data});
  }


  calculateAllOccurences(model: NgramModel[]): number {
    let count = 0;
    for (let gram in model) {
      count += model[gram].occurences;
    }

    return count;
  }
  
  
  calculateProbability(scores: any, model: NgramModel[]): number {
    let laPlace = this.laPlaceSmoothing(scores, model);
    let smoothedScores = laPlace[0];
    let smoothedTotal = laPlace[1];
    // let totalGrams = this.calculateAllOccurences(model);
    let probabilities = [];

    for (let score in smoothedScores) {
      let p = scores[score][1] / smoothedTotal;
      probabilities.push(p);
    }

    let probability = 1;
    for (let p in probabilities) {
      probability *= probabilities[p]
    }

    return probability
  }


  countUnique(model: NgramModel[]): number {
    let count = 0;
    for (let m in model) {
      count++;
    }

    return count;
  }
  

  laPlaceSmoothing(scores: any[], model: NgramModel[]): any {
    let uniqueNgrams = this.countUnique(model);
    let totalNgrams = this.calculateAllOccurences(model) + uniqueNgrams;

    for (let s in scores) {
      if (scores[s][1] === 0) {
        scores[s][1] = 1;
      }
    }
    
    return [scores, totalNgrams];
  }


  getLanguage(probabilities: any[]): string {
    let highestProbability = 0;
    let language = '';
      for (let p in probabilities) {
        if (probabilities[p][1] > highestProbability) {
          highestProbability = probabilities[p][1];
          language = probabilities[p][0];
        }
      }

    return language
  }

  
  calculateUserNGramScores(ngrams: string[], model: NgramModel[]): any[] {
    let scores = [];
    for (let gram in ngrams) {
      scores.push([ngrams[gram], 0]);
      for (let m in model) {
        if (model[m].nGram === ngrams[gram]) {
          for (let s in scores) {
            if (scores[s][0] === model[m].nGram) {
              scores[s][1] += model[m].occurences;       
            }
          }
        }
      }
    }

    return scores;
  }


  setResults(probabilities: any[]): LanguageDetectionResult {
    let result = {
      language: this.getLanguage(probabilities),
      pArabic: probabilities[0][1],
      pDutch: probabilities[1][1],
      pEnglish: probabilities[2][1],
      pFrench: probabilities[3][1],
      pGerman: probabilities[4][1],
      pRussian: probabilities[5][1],
    };
    return result;
  }


  detectLanguage(bigrams: string[], trigrams: string[]) {
    let languageModel = [
      [this.araBigramModel, this.araTrigramModel, 'Arabic'],
      [this.nldBigramModel, this.nldTrigramModel, 'Dutch'],
      [this.engBigramModel, this.engTrigramModel, 'English'],
      [this.fraBigramModel, this.fraTrigramModel, 'French'],
      [this.deuBigramModel, this.deuTrigramModel, 'German'],
      [this.rusBigramModel, this.rusTrigramModel, 'Russian']
    ];

    let bigramProbabilities = [];
    let trigramProbabilities = [];

    for (let language in languageModel) {
      
      let currentLanguage = languageModel[language][2];

      let currentBigramModel: any = languageModel[language][0];
      let bigramScores = this.calculateUserNGramScores(bigrams, currentBigramModel);
      let bigramProbability = this.calculateProbability(bigramScores, currentBigramModel);
      bigramProbabilities.push([currentLanguage, bigramProbability]);

      let currentTigramModel: any = languageModel[language][1];
      let trigramScores = this.calculateUserNGramScores(trigrams, currentTigramModel);
      let trigramProbability = this.calculateProbability(trigramScores, currentTigramModel);
      trigramProbabilities.push([currentLanguage, trigramProbability]);
    }
    
    if (bigrams[0].length >= 2) {
      this.bigramResult = this.setResults(bigramProbabilities);
    }
    
    if (trigrams[0].length >= 3) {
      this.trigramResult = this.setResults(trigramProbabilities);
    }
    
  }
}
