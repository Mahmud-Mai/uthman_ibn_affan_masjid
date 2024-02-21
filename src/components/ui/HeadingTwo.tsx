interface HeadingTwoProps {
  heading: string;
}

const HeadingTwo: React.FC<HeadingTwoProps> = ({ heading }) => {
  return <h2 className="py-8 text-5xl md:text-7xl text-center">{heading}</h2>;
};

export default HeadingTwo;
