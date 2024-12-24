import React from "react";

interface MetadataItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

export function MetadataItem({ icon, title, value }: MetadataItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-gray-600">{icon}</div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-gray-600">{value}</p>
      </div>
    </div>
  );
}
