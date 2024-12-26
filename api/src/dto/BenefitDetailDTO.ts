import { Expose, Transform } from "class-transformer";
import { IsBoolean, IsObject, IsString } from "class-validator";
import { BenefitsDto } from "./BenefitDTO";

export class BenefitDetailDto extends BenefitsDto {
  @Expose({ name: "descripcion" })
  @IsString()
  description!: string;

  @Expose({ name: "aclaratoria" })
  @IsString()
  clarification!: string;

  @Expose({ name: "tarjeta" })
  @IsBoolean()
  is_card_payment_method!: boolean;

  @Expose({ name: "efectivo" })
  @IsBoolean()
  is_cash_payment_method!: boolean;

  @Expose({ name: "CategoriaGeneral" })
  @Transform(({ value }) => value?.nombre)
  @IsString()
  general_category_name!: string;

  @Expose({ name: "CategoriaSimple" })
  @Transform(({ value }) => value?.nombre)
  @IsString()
  simple_category_name!: string;

  @Expose({ name: "Dium" })
  @Transform(({ value }) => {
    const { id, BeneficioId, ...rest } = value;

    // Mapeo de los días de la semana y "feriados" de español a inglés
    const daysMapping = {
      lunes: "monday",
      martes: "tuesday",
      miercoles: "wednesday",
      jueves: "thursday",
      viernes: "friday",
      sabado: "saturday",
      domingo: "sunday",
      feriados: "holidays",
    };

    return Object.keys(rest).reduce((acc, key) => {
      const day = key as keyof typeof daysMapping;
      acc[daysMapping[day]] = rest[day];
      return acc;
    }, {} as Record<string, boolean>);
  })
  @IsObject()
  dium!: {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
    holidays: boolean;
  };
}
