export interface Benefit {
  id: number;
  comercio: string;
  descripcion: string;
  aclaratoria: string;
  descuento: number;
  tarjeta: boolean;
  efectivo: boolean;
  orden: number;
  esFavorito: boolean;
  esNuevo: boolean;
  ordenNuevo: number;
  vencimiento: null;
  puntuacion: number;
  archivado: boolean;
  ultimaActualizacion: Date;
  informadorId: number;
  visitas: number;
  CategoriaGeneralId: number;
  CategoriaSimpleId: number;
  Imagens: BenefitImage[];
}

export interface BenefitImage {
  id: number;
  url: string;
  CategoriaGeneralId: null;
  CategoriaSimpleId: null;
  BeneficioId: number;
}

export type BenefitDetail = Pick<
  Benefit,
  | "id"
  | "comercio"
  | "Imagens"
  | "descripcion"
  | "aclaratoria"
  | "descuento"
  | "tarjeta"
  | "efectivo"
> & {
  CategoriaGeneral: Category;
  CategoriaSimple: Category;
  Dium: Dium;
};

export interface Category {
  id: number;
  nombre: string;
  archivado: boolean;
  orden?: number;
  CategoriaGeneralId?: number;
}
export interface Dium {
  id: number;
  lunes: boolean;
  martes: boolean;
  miercoles: boolean;
  jueves: boolean;
  viernes: boolean;
  sabado: boolean;
  domingo: boolean;
  feriados: boolean;
  BeneficioId: number;
}
