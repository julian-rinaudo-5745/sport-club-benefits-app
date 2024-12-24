interface Props {
  description: string;
  aditionalInfo: string;
}
export function BenefitInfo({ description, aditionalInfo }: Props) {
  return (
    <div className="mb-8">
      <p className="mt-4 text-xl">{description}</p>
      <p className="text-gray-600 text-sm whitespace-pre-line">
        <span className="font-bold">Información adicional: </span>
        {aditionalInfo}
      </p>
    </div>
  );
}
