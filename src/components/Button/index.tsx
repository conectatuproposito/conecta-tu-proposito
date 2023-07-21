interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className, ...args }: IButton) => {
  return (
    <button
      className={`flex items-center  text-white  bg-violet-950 rounded-full p-2 px-6 hover:bg-sky-400 transition-all ${className}`}
      {...args}
    >
      {children}
    </button>
  );
};

export default Button;
