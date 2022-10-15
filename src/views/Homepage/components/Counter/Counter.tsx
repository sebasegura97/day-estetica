import CountUp from "react-countup";

const Counter: React.FC<{ number: number; label: string }> = ({
  number,
  label,
}) => {
  return (
    <div className="font-serif flex flex-col items-center text-center ">
      <CountUp start={0} end={number} enableScrollSpy>
        {({ countUpRef, start }) => (
          <span
            ref={countUpRef}
            className="text-5xl lg:text-6xl font-black text-primary-900"
          >
            {number}
          </span>
        )}
      </CountUp>
      <span className="font-sans text-lg lg:text-2xl text-primary-900">{label}</span>
    </div>
  );
};

export default Counter;
