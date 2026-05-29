"use client";

type ButtonProps = {
  text: string;
  className?: string;
  id?: string;
  href?: string;
};

const Button = ({ text, className, id, href }: ButtonProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (href) return;
    e.preventDefault();
    const target = document.getElementById("projects");
    if (target && id) {
      const offset = window.innerHeight * 0.15;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const inner = (
    <div className="cta-button group">
      <div className="bg-circle" />
      <p className="text">{text}</p>
      <div className="arrow-wrapper">
        <img src="/images/arrow-down.svg" alt="" />
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className={`${className ?? ""} cta-wrapper`}>
        {inner}
      </a>
    );
  }

  return (
    <a onClick={handleClick} className={`${className ?? ""} cta-wrapper cursor-pointer`}>
      {inner}
    </a>
  );
};

export default Button;
