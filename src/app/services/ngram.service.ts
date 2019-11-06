import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgramService {

  userBigrams = [];
  userTrigrams = [];

  constructor() { }

  getNGrams(sentence: string) {
    this.userBigrams = [];
    this.userTrigrams = [];
    for (let i=0; i<sentence.length; i++) {
      let bigram = sentence.substring(i, i+2);
      if (bigram.length === 2) {
        this.userBigrams.push(bigram);
      }
      let trigram = sentence.substring(i, i+3)
      if (trigram.length === 3) {
        this.userTrigrams.push(trigram)
      }
    }
  }
}
