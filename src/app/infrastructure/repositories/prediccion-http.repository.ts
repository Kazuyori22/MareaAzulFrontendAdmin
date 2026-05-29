import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrediccionRepository } from '../../domain/interfaces/prediccion.repository';
import { ResultadoPrediccion } from '../../domain/entities/prediccion.entity';
import { environment } from '../../../environments/environment';

@Injectable()
export class PrediccionHttpRepository implements PrediccionRepository {
  private readonly apiUrl = `${environment.apiUrl}/Prediccion`;

  constructor(private http: HttpClient) {}

  getPrediccion(meses: number): Observable<ResultadoPrediccion> {
    return this.http.get<ResultadoPrediccion>(`${this.apiUrl}?meses=${meses}`);
  }
}
