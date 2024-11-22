const prepImagePath = (path: string) => {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "/portfolio";
  return `${prefix}${path}`;
};

export default prepImagePath;
