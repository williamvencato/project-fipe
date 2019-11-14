import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  marcasUrl = 'http://fipeapi.appspot.com/api/1/carros/marcas.json'

  constructor(private http: HttpClient) { }

  listarMarcas() {
    return this.http.get<any[]>(`${this.marcasUrl}`);
  }
}
