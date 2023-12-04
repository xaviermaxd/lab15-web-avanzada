// reporte.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReporteService {
  private apiUrl = 'http://tu-api-rest/informe'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  obtenerInformeVuelos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
