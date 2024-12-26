export interface Benefit {
  id: number;
  brand_name: string;
  discount: number;
  image: string;
}

export type BenefitDetail = Pick<
  Benefit,
  "id" | "brand_name" | "image" | "discount"
> & {
  description: string;
  clarification: string;
  is_card_payment_method: boolean;
  is_cash_payment_method: boolean;
  general_category_name: string;
  simple_category_name: string;
  dium: Dium;
};

export interface Dium {
  lunes: boolean;
  martes: boolean;
  miercoles: boolean;
  jueves: boolean;
  viernes: boolean;
  sabado: boolean;
  domingo: boolean;
  feriados: boolean;
}
