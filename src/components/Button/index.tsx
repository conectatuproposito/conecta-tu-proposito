import Image from "next/image";
import Link from "next/link";

interface IButton {
  children: React.ReactNode;
  className?: string;
  href: string;
  target: string;
}

const Button = ({ children, className, ...args }: IButton) => {
  return (
    <Link
      className={`
        flex items-center justify-center  sm:w-[354px] h-11
        text-white rounded-full p-2 px-6
        bg-purple-800 hover:bg-sky-400 transition-all ${className}`}
      {...args}
    >
      {children}

      <Image
        src="/arrow-right.svg"
        alt="Arrow Right"
        className="pt-[2px] ml-2 w-4 h-4"
        width={18}
        height={18}
        priority
      />
    </Link>
  );
};

export default Button;
