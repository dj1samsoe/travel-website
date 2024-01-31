import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  [propName: string]: unknown;
}

export default function Card({
  children,
  className = "",
  ...others
}: CardProps) {
  return (
    <div
      className={`transition-all duration-300${className} `}
      {...others}
      data-testid="card"
    >
      {children}
    </div>
  );
}
