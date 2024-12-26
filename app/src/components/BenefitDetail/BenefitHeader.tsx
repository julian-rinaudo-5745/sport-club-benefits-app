interface Props {
  name: string;
  discount: number;
  category: string;
}

export function BenefitHeader({ name, discount, category }: Props) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-2">
        {discount}% de descuento en {name}
      </h1>
      <p className="text-lg text-gray-600">Categoría: {category}</p>
    </div>
  );
}
