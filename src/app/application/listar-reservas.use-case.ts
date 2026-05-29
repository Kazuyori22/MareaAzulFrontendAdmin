import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservaAdminRepository } from '../domain/interfaces/reserva-admin.repository';
import { ReservaAdmin } from '../domain/entities/reserva-admin.entity';

@Injectable({ providedIn: 'root' })
export class ListarReservasUseCase {
  private readonly repository = inject(ReservaAdminRepository);

  execute(): Observable<ReservaAdmin[]> {
    return this.repository.listar();
  }
}
