import Title from "./Title";

const Header = (props) => {
  return (
    <header>
      <Title name={props.name} className={props.className}></Title>
    </header>
  );
};

export default Header;
