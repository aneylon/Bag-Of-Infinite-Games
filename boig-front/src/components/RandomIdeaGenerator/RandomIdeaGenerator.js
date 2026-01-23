import { useState } from "react";
import { random, randomBetween } from "../../services/random/random";

const RandomIdeaGenerator = () => {
  const mcAnimals = [
    "cow",
    "horse",
    "pig",
    "sheep",
    "chicken",
    "goat",
    "panda",
    "frog",
    "bee",
  ];
  const verb = [];
  const material = [];

  const [ideas, setIdeas] = useState([]);
  const [numberOfIdeas, setNumberOfIdeas] = useState(1);
  const newIdea = () => {
    const newIdeas = [];
    for (var i = 0; i < numberOfIdeas; i++) {
      const number = random(mcAnimals.length);
      const newThing = mcAnimals[number];
      newIdeas.push(newThing);
    }
    setIdeas(newIdeas);
  };
  return (
    <div>
      <h1>Random Idea Generator</h1>
      <div>
        <input
          type="number"
          name="numberOfIdeas"
          id="numberOfIdeas"
          placeholder="Number of ideas"
          onChange={(e) => setNumberOfIdeas(+e.target.value)}
          value={numberOfIdeas}
        />

        <button onClick={newIdea}>Do it!</button>
      </div>
      <ul>
        {ideas.map((idea, index) => (
          <li key={index}>{idea}</li>
        ))}
      </ul>
    </div>
  );
};

export default RandomIdeaGenerator;
