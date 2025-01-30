import React from "react";
import { Hash } from "lucide-react";
type MainSectionProps = {
  title: string;
  children: React.ReactNode;
  id?: string;
};

export const MainSection: React.FC<MainSectionProps> = ({
  title,
  children,
  id,
}) => {
  return (
    <section className="my-2 p-4">
      <div className="flex items-center gap-2">
        <Hash size={24} />
        <h2 className="text-2xl font-bold text-center md:text-left" id={id}>
          {title}
        </h2>
      </div>
      <div className="m-2">{children}</div>
    </section>
  );
};
