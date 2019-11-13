import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})




export class ReleasesService {
  constructor(private http: HttpClient) { }


  releases: releases[] = [{
    id: 1,
    artistName: 'Zahir',
    releaseName: 'Zahir Demo Ep',
    // tslint:disable-next-line: max-line-length
    description: 'El carácter del pastor blanco suizo está marcado por la confianza en sí mismo. La raza es serena, pero cuando la situación lo exige sus instintos protectores lo pondrán alerta y listo para servir.',
    imageUrl: '../../assets/guitars/zahir.jpg',
    releaseDate: 'Blanco',
    spotify: 'https://open.spotify.com/embed/album/4j99Yili2kT5XDTnp3ekEG',
 }, {
  id: 2,
  artistName: 'Chita',
  releaseName: 'Encanto',
  // tslint:disable-next-line: max-line-length
  description: 'lanzó oficialmente su primer disco: “Encanto”. Siete canciones, un mismo viaje. “No deja de ser R&B pero quizá fusionado con un ritmo más urbano. Acá le dicen beat de trap, yo no lo considero trap”, confiesa. Poco a poco, se posiciona como una de las referentes.',
  imageUrl: '../../assets/guitars/chita.jpg',
  releaseDate: 'Blanco',
  spotify: 'https://open.spotify.com/embed/album/26AjKOBqXEbgvvYQNLydR7',
}, {
  id: 3,
  artistName: 'WOS',
  releaseName: 'CARAVANA',
  // tslint:disable-next-line: max-line-length
  description: 'El debut discográfico de Wos contiene siete canciones que deslumbran a un público cada vez más heterogéneo. El espíritu del álbum puede interpretarse como un baile de resistencia, un verdadero carnaval de resurrección, de búsqueda del goce en tiempos ceoliberales. ',
  imageUrl: '../../assets/guitars/wos.jpg',
  releaseDate: 'Blanco',
  spotify: 'https://open.spotify.com/embed/album/7L6gLnSJBTU0tOneX0Ol91',
}, {
  id: 4,
  artistName: 'Los Espiritus',
  releaseName: 'Caldero',
  // tslint:disable-next-line: max-line-length
  description: 'Los Espíritus publican el próximo 30 de agosto su cuarto disco: Caldero (Alto Valle, 2019). Un trabajo en el que expanden su propuesta sonora, ampliando los matices y géneros y elevando la estatura de sus composiciones. Producido, grabado y mezclado por la banda en su Estudio Plasma de la ciudad de Buenos Aires, pero con una preproducción y gestación que arrancó en estudios de distintas ciudades del mundo (Berlín, Madrid, La Habana, Bogotá) durante sus giras de 2018.',
  imageUrl: '../../assets/guitars/espiritus.jpg',
  releaseDate: 'Blanco',
  spotify: 'https://open.spotify.com/embed/artist/1UnfU05eCWxrY4vWarpeF0',
}, {
  id: 5,
  artistName: 'Emmanuel Horvilleur',
  releaseName: 'Xavier',
  // tslint:disable-next-line: max-line-length
  description: '“El hit”, “Ella Dijo No”, “Somos Nosotros” y “En el aire”, fueron adelantos del nuevo disco de Emmanuel Horvilleur, luego de casi diez años de silencio como solista. Xavier, su quinto álbum, es un viaje por once canciones, donde el exintegrante de IKV habla sobre el amor y el empoderamiento femenino. También hay un espacio para la reflexión, con preguntas existenciales, y la nostalgia.',
  imageUrl: '../../assets/guitars/emma.jpg',
  releaseDate: 'Blanco',
  spotify: 'https://open.spotify.com/embed/album/0cLfepUS1abhkviDy3UrQ4',
}, ];

  getReleases(): releases[] {
    return this.releases;
  }
  getRelease(id: number): Observable<releases> {
    // TODO: send the message _after_ fetching the hero
    return of(this.releases.find(hero => hero.id === id));
  }
  // ----------------------------------------------------------------------------
  // ----------------------------------------------------------------------------
  // ----------------------------------------------------------------------------


  getJson() {
    const headers = new HttpHeaders ({
      'Content-Type': 'text/html'
    });

    //return this.http.get(`localhost:8080/dame`, {headers});
    this.http.get('localhost:8080/dame',{headers:
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })
      .subscribe((data: releases) => {
        // Data extraction from the HTTP response is already done
        // Display the result
        console.log('TJ user data', data);
      });


  }


















  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  getProducts(): Observable<any> {
    // tslint:disable-next-line: no-use-before-declare
    return this.http.get(endpoint).pipe(
      map(this.extractData)
    );
  }
  getProduct(id): Observable<any> {
    // tslint:disable-next-line: no-use-before-declare
    return this.http.get(endpoint + 'products/' + id).pipe(
      map(this.extractData));
  }


}

// tslint:disable-next-line: class-name
export interface releases {
  id: number;
  artistName: string;
  releaseName: string;
  description: string;
  imageUrl: string;
  releaseDate: string;
  spotify: string;
}
const endpoint = 'http://localhost:8080/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};