import React from "react";

interface Props {
  id: string;
  title?: string;
  dark?: boolean;
  gray?: boolean;
  children: React.ReactNode;
}

const Section = ({
  id,
  title,
  dark = false,
  gray = false,
  children,
}: Props) => {
  let className = "section section-light";

  if (dark) {
    className = "section section-dark";
  }

  if (gray) {
    className = "section section-gray";
  }

  return (
    <section id={id} className={className}>
      {title && (
        <h2 className="section-title">
          {title}
        </h2>
      )}

      {children}
    </section>
  );
};

export default Section;