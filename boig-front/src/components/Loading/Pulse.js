import { PulseLoader } from "react-spinners";

const Pulse = ({ color }) => {
  return (
    <div>
      <PulseLoader color={color} />
    </div>
  );
};

export default Pulse;
