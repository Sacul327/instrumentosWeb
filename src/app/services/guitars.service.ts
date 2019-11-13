import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuitarsService {

  guitarras: guitars [] = [{
      id: 1,
      guitarBrand: 'Fender',
      modelName: 'Telecaster',
      description: 'simple',
      imageUrl: '../../assets/guitars/telecaster.jpg'
    },
    { id: 2,
      guitarBrand: 'Guild',
      modelName: 'Starfire V',
      description: 'simple',
      imageUrl: '../../assets/guitars/starfirev.jpg'}
  ];

  getGuitarras(): guitars[] {
    return this.guitarras;
  }

  constructor() { }
}

// tslint:disable-next-line: class-name
export interface guitars {
  id: number;
  guitarBrand: string;
  modelName: string;
  description: string;
  imageUrl: string;

}
