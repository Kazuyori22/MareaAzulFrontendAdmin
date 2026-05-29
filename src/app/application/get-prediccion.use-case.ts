import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrediccionRepository } from '../domain/interfaces/prediccion.repository';
import { ResultadoPrediccion } from '../domain/entities/prediccion.entity';

@Injectable({ providedIn: 'root' })
export class GetPrediccionUseCase {
  private readonly repo = inject(PrediccionRepository);

  execute(meses: number = 6): Observable<ResultadoPrediccion> {
    return this.repo.getPrediccion(meses);
  }
}
