import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface NgramModel {
  nGram: string;
  occurences: number;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageModelsService {

  araBigramUrl = 'assets/languageModels/araBigramModel.json';
  araTrigramUrl = 'assets/languageModels/araTrigramModel.json';
  deuBigramUrl = 'assets/languageModels/deuBigramModel.json';
  deuTrigramUrl = 'assets/languageModels/deuTrigramModel.json';
  engBigramUrl = 'assets/languageModels/engBigramModel.json';
  engTrigramUrl = 'assets/languageModels/engTrigramModel.json';
  fraBigramUrl = 'assets/languageModels/fraBigramModel.json';
  fraTrigramUrl = 'assets/languageModels/fraTrigramModel.json';
  nldBigramUrl = 'assets/languageModels/nldBigramModel.json';
  nldTrigramUrl = 'assets/languageModels/nldTrigramModel.json';
  rusBigramUrl = 'assets/languageModels/rusBigramModel.json';
  rusTrigramUrl = 'assets/languageModels/rusTrigramModel.json';

  constructor(private http: HttpClient) { }

  getAraBigramModel() {
    return this.http.get(this.araBigramUrl);
  }

  getAraTrigramModel() {
    return this.http.get(this.araTrigramUrl);
  }

  getDeuBigramModel() {
    return this.http.get(this.deuBigramUrl);
  }

  getDeuTrigramModel() {
    return this.http.get(this.deuTrigramUrl);
  }

  getEngBigramModel() {
    return this.http.get(this.engBigramUrl);
  }

  getEngTrigramModel() {
    return this.http.get(this.engTrigramUrl);
  }

  getFraBigramModel() {
    return this.http.get(this.fraBigramUrl);
  }

  getFraTrigramModel() {
    return this.http.get(this.fraTrigramUrl);
  }

  getNldBigramModel() {
    return this.http.get<NgramModel[]>(this.nldBigramUrl);
  }

  getNldTrigramModel() {
    return this.http.get(this.nldTrigramUrl);
  }

  getRusBigramModel() {
    return this.http.get(this.rusBigramUrl);
  }

  getRusTrigramModel() {
    return this.http.get(this.rusTrigramUrl);
  }
}
