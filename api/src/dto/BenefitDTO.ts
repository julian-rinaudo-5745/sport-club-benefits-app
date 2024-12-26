import { Expose, Transform } from "class-transformer";
import { IsInt, IsString, IsUrl, Max, Min } from "class-validator";

export class BenefitsDto {
  @Expose()
  @IsInt()
  @Min(0)
  id!: number;

  @Expose({ name: "comercio" })
  @IsString()
  brand_name!: string;

  @Expose({ name: "descuento" })
  @IsInt()
  @Min(0)
  @Max(100)
  discount!: number;

  @Expose({ name: "Imagens" })
  @Transform(({ value }) => value?.[0]?.url)
  @IsUrl()
  image!: string;
}
