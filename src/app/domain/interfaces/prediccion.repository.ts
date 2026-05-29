import { Observable } from 'rxjs';
import { ResultadoPrediccion } from '../entities/prediccion.entity';

export abstract class PrediccionRepository {
  abstract getPrediccion(meses: number): Observable<ResultadoPrediccion>;
}
