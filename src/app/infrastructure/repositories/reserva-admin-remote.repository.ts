import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReservaAdminRepository } from '../../domain/interfaces/reserva-admin.repository';
import { ReservaAdmin, CancelacionResultado } from '../../domain/entities/reserva-admin.entity';
import { environment } from '../../../environments/environment';

@Injectable()
export class ReservaAdminRemoteRepository implements ReservaAdminRepository {
  private apiUrl = `${environment.apiUrl}/reservas-admin`;

  constructor(private http: HttpClient) {}

  listar(): Observable<ReservaAdmin[]> {
    return this.http.get<ReservaAdmin[]>(this.apiUrl);
  }

  cancelar(idReserva: number): Observable<CancelacionResultado> {
    return this.http.post<CancelacionResultado>(`${this.apiUrl}/${idReserva}/cancelar`, {});
  }
}
