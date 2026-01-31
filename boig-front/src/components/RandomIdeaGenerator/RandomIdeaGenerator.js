import { useEffect, useState } from "react";
import { random, randomBetween } from "../../services/random/random";
import Pulse from "../Loading/Pulse";

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
  const verb = [
    "run",
    "walk",
    "jump",
    "swim",
    "fly",
    "build",
    "cook",
    "enchant",
    "dig",
    "mine",
  ];
  const material = [
    "wood",
    "dirt",
    "stone",
    "gravel",
    "wool",
    "sand",
    "chiseled",
    "grass",
    "coal",
    "steel",
    "gold",
    "copper",
    "diamond",
    "redstone",
    "lapis",
    "emerald",
    "mushroom",
  ];
  const location = [
    "plains",
    "forest",
    "mountains",
    "desert",
    "beach",
    "ocean",
    "river",
    "swamp",
    "savannah",
    "badlands",
    "jungle",
    "cave",
  ];
  const [dataIsLoading, setDataIsLoading] = useState(true);
  const [nounSelected, setNounSelected] = useState(true);
  const [locationSelected, setLocationSelected] = useState(false);
  const [materialSelected, setMaterialSelected] = useState(false);
  const [verbSelected, setVerbSelected] = useState(false);
  const [error, setError] = useState(false);
  const [ideas, setIdeas] = useState([]);
  const [numberOfIdeas, setNumberOfIdeas] = useState(1);
  const newIdea = () => {
    const newIdeas = [];
    for (var i = 0; i < numberOfIdeas; i++) {
      const number = random(mcAnimals.length);

      const newThing = nounSelected ? mcAnimals[number] : null;
      const newVerb = verbSelected ? verb[random(verb.length)] : undefined;
      const newMaterial = materialSelected
        ? material[random(material.length)]
        : "";
      const newLocation = locationSelected
        ? location[random(location.length)]
        : null;

      // TODO : figure out a way to exclude empty strings...
      newIdeas.push([newThing, newVerb, newMaterial, newLocation]);
    }
    setIdeas(newIdeas);
  };

  useEffect(() => {
    console.log("get data");
    // todo get data from api backend
    setTimeout(() => {
      // set loading false
      setDataIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (
      verbSelected === false &&
      nounSelected === false &&
      materialSelected === false &&
      locationSelected === false
    ) {
      setError(true);
    } else {
      setError(false);
    }
  }, [verbSelected, nounSelected, materialSelected, locationSelected]);

  return (
    <div>
      <h1>Random Idea Generator</h1>
      <div>
        <div>
          {dataIsLoading && <Pulse />}
          {!dataIsLoading && (
            <>
              <label htmlFor="noun">Noun : </label>
              <input
                type="checkbox"
                name="noun"
                id="noun"
                checked={nounSelected}
                onChange={() => setNounSelected(!nounSelected)}
              />
              <label htmlFor="verb">Verb : </label>
              <input
                type="checkbox"
                name="verb"
                id="verb"
                checked={verbSelected}
                onChange={() => setVerbSelected(!verbSelected)}
              />

              <label htmlFor="material">Material : </label>
              <input
                type="checkbox"
                name="material"
                id="material"
                checked={materialSelected}
                onChange={() => setMaterialSelected(!materialSelected)}
              />

              <label htmlFor="location">Location : </label>
              <input
                type="checkbox"
                name="location"
                id="location"
                checked={locationSelected}
                onChange={() => setLocationSelected(!locationSelected)}
              />
            </>
          )}
        </div>
        <div>
          <input
            type="number"
            name="numberOfIdeas"
            id="numberOfIdeas"
            placeholder="Number of ideas"
            disabled={error || dataIsLoading}
            onChange={(e) => setNumberOfIdeas(+e.target.value)}
            value={numberOfIdeas}
          />

          <button onClick={newIdea} disabled={error || dataIsLoading}>
            Do it!
          </button>
        </div>
      </div>
      {error && <div>Error : at least one checkbox must be checked</div>}
      <ul>
        {ideas.map((idea, index) => (
          <li key={index}>{idea.join(",")}</li>
        ))}
      </ul>
    </div>
  );
};

export default RandomIdeaGenerator;
