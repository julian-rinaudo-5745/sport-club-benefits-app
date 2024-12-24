import { Benefit } from "@/types";

export const BenefitCard = ({ item }: { item: Benefit }) => {
  const { id, comercio, descripcion, descuento, Imagens } = item;

  return (
    <div role="listitem" className="BenefitCard" key={id}>
      <h2>{comercio}</h2>
      <p>{descripcion}</p>
      <p>{descuento}%</p>
      <img
        src={Imagens[0].url}
        alt={`Image of the branch`}
        width={200}
        height={200}
        aria-labelledby={`image-${id}`}
      />
    </div>
  );
};
