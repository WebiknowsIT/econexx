import React from "react";

const Button = ({
  children,
  variant = "dark",   // "dark" | "light"
  href,
  id,
  className = "",
  icon,
  ...props
}) => {
  const baseStyles =
    "font-primary px-8 py-4 rounded-xl inline-block font-medium transition-all transition-all duration-300 text-center";

  const variants = {
    dark:
      "bg-gray-900 text-white hover:bg-black",
    light:
      "bg-white text-gray-700 hover:bg-primary-400 hover:text-white",
    primary:
      "bg-secondary-500 text-white hover:bg-primary-600",
  };

  const combinedClass = `${baseStyles} ${variants[variant]} ${className}`;

  // If href exists → render anchor
  if (href) {
    return (
      <a href={href} id={id} className={combinedClass} {...props}>
        {children}
        {icon && icon}
      </a>
    );
  }

  // Default → render button
  return (
    <button id={id} className={combinedClass} {...props}>
      {children}
      {icon && icon}
    </button>
  );
};

export default Button;