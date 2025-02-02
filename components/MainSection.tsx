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
    <section className="px-1 py-2 md:my-2 md:p-4">
      <div className="flex items-center gap-2">
        <Hash size={24} className="hidden md:block" />
        <h2
          className="text-xl md:text-2xl font-bold text-left md:text-center"
          id={id}
        >
          {title}
        </h2>
      </div>
      <div className="md:m-2">{children}</div>
    </section>
  );
};
