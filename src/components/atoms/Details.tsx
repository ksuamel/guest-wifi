export type DetailsProps = {
  heading: string;
  description: string;
};

const Details = (props: DetailsProps): JSX.Element => {
  return (
    <div className="text-center">
      <p className="b-4 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">
        {props.heading}
      </p>
      <p>{props.description}</p>
    </div>
  );
};

export default Details;
