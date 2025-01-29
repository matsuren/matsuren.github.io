import React from "react";
import { ChevronRight } from "lucide-react";
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
      <div className="flex gap-x-1">
        <ChevronRight size={22} />
        <h2
          className="text-2xl font-bold mb-2 text-center md:text-left"
          id={id}
        >
          {title}
        </h2>
      </div>
      <div className="m-2">{children}</div>
    </section>
  );
};
