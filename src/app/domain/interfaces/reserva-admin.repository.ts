import { Observable } from 'rxjs';
import { ReservaAdmin, CancelacionResultado } from '../entities/reserva-admin.entity';

export abstract class ReservaAdminRepository {
  abstract listar(): Observable<ReservaAdmin[]>;
  abstract cancelar(idReserva: number): Observable<CancelacionResultado>;
}
