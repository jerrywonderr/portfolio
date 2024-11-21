import { FiPlay } from "react-icons/fi";

interface IButton {
  children: string;
  showIcon?: boolean;
  extraClass?: string;
}

export const PrimaryButton = ({
  children,
  extraClass,
  showIcon = false,
}: IButton) => {
  return (
    <button
      className={`group bg-black text-white px-4 py-3 rounded-md flex align-baseline gap-x-2 hover:bg-opacity-60 transition-all hover:shadow-md hover:scale-110 duration-200 ${extraClass}`}
    >
      {children}
      {showIcon && (
        <FiPlay
          size={20}
          className="text-white group-hover:text-black group-hover:translate-x-2 transition-all"
        />
      )}
    </button>
  );
};

//drive.google.com/file/d/1IuAs45Hu0ZBXW_HXTgqgTAnx0f2nC0Nc/view?usp=drive_link

export const PrimaryButtonLink = ({
  children,
  extraClass,
  showIcon = false,
}: IButton) => {
  return (
    <a
      target="_blank"
      href="https://drive.google.com/file/d/1IuAs45Hu0ZBXW_HXTgqgTAnx0f2nC0Nc/view?usp=drive_link"
      className={`group bg-black text-white px-4 py-3 rounded-md flex align-baseline gap-x-2 hover:bg-opacity-60 transition-all hover:shadow-md hover:scale-110 duration-200 ${extraClass}`}
    >
      {children}
      {showIcon && (
        <FiPlay
          size={20}
          className="text-white group-hover:text-black group-hover:translate-x-2 transition-all"
        />
      )}
    </a>
  );
};
