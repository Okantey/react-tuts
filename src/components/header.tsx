type HeaderProps = {
  fontSize: number | string;
  fontWeight: number | string;
  title: string;
};

const Header = ({ fontSize, fontWeight, title }: HeaderProps) => {
  return (
    <h1 style={{ fontSize: fontSize, fontWeight: fontWeight }}>{title}</h1>
  );
};

export default Header;
