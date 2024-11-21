interface ITag {
  children: string;
}

const Tag = ({ children }: ITag) => {
  return (
    <div>
      <p className="text-xs bg-black text-white rounded-xl px-3 py-1">
        {children}
      </p>
    </div>
  );
};

export default Tag;
