type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return (
    <div className="uppercase font-bold mb-5 text-center text-2xl">{title}</div>
  );
};

export default Title;
