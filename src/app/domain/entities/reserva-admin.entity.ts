export interface ReservaAdmin {
  idReserva: number;
  numeroReservacion: string;
  cliente: string;
  email: string | null;
  cedula: string | null;
  fechaLlegada: string;       // ISO date
  fechaSalida: string;        // ISO date
  fechaReservacion: string;   // ISO datetime
  totalPagar: number;
  estado: string;             // 'Pendiente' | 'Confirmada'
  habitaciones: string;       // "101, 202"
  diasParaLlegada: number;    // <0 en curso, 0 hoy, >0 futura
}

export interface CancelacionResultado {
  exito: boolean;
  mensaje: string;
}
