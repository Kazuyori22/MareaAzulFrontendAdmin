import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservaAdminRepository } from '../domain/interfaces/reserva-admin.repository';
import { CancelacionResultado } from '../domain/entities/reserva-admin.entity';

@Injectable({ providedIn: 'root' })
export class CancelarReservaUseCase {
  private readonly repository = inject(ReservaAdminRepository);

  execute(idReserva: number): Observable<CancelacionResultado> {
    return this.repository.cancelar(idReserva);
  }
}
