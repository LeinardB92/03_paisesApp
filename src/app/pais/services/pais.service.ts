import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) {}

  get httpParams(){
    return new HttpParams().set('fields', 'name,capital,population,flags,cca2');
  }

  buscarPais(termino: string): Observable<Country[]>{
    const url: string = `${this.apiUrl}/name/${termino}`;
    return this.getCountriesRequest(url);
  }

  buscarPaisPorCapital(termino: string): Observable<Country[]>{
    const url: string = `${this.apiUrl}/capital/${termino}`;
    return this.getCountriesRequest(url);
  }

  getPaisPorAlpha(id: string): Observable<Country>{
    const url: string = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarRegion(region: string): Observable<Country[]>{
    const url: string = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url);
  }

  private getCountriesRequest(url : string) : Observable<Country[]>{
    return this.http.get<Country[]>(url, {params: this.httpParams})
      .pipe(
        catchError(() => of([])),
      );
  }
}
