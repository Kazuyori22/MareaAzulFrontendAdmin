export interface HistoricoMensual {
  anio: number;
  mes: number;
  totalReservas: number;
  totalIngresos: number;
}

export interface PrediccionMensual {
  /** Formato "yyyy-MM", ej: "2025-08" */
  periodo: string;
  reservasPredichas: number;
  ingresosPredichos: number;
  limiteInferiorReservas: number;
  limiteSuperiorReservas: number;
}

export interface ResultadoPrediccion {
  historico: HistoricoMensual[];
  predicciones: PrediccionMensual[];
  mesesEntrenados: number;
  mensaje: string;
}
