import "./CardFlip.css";

const SimpleMatch = () => {
  return (
    <div>
      <h1>Simple Match</h1>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h1>Front</h1>
            <p>two</p>
            <p>three</p>
          </div>
          <div className="flip-card-back">
            <h1>Back</h1>
            <p>two</p>
            <p>three</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleMatch;
