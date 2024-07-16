import React, { useState, useEffect } from "react";
import TeamSelector from "../components/TeamSelector";
import MapView from "../components/MapView";
import RaceController from "../components/RaceController";
import "./../estilos.css";
import { ToastContainer, toast } from "react-toastify";
import AppBase from "../components/AppBase";

function Simulacion() {
  const [teams, setTeams] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [selectedCyclists, setSelectedCyclists] = useState([]);
  const [raceResults, setRaceResults] = useState([]);
  const [mapCenter, setMapCenter] = useState(null);

  useEffect(() => {
    fetch("https://dot.runasp.net/api/Teams")
      .then((response) => response.json())
      .then((data) => {
        const transformedTeams = data.map((team, index) => ({
          name: `Equipo ${index + 1}`,
          cyclists: team.teamMembers.map((member) => ({
            name: member.userName,
            position: [0, 0],
          })),
        }));
        setTeams(transformedTeams);
      })
      .catch((error) => console.error("Error fetching the JSON file:", error));

    fetch("/Tracks.json")
      .then((response) => response.json())
      .then((data) => setTracks(data))
      .catch((error) => console.error("Error fetching the JSON file:", error));
  }, []);

  const startRace = () => {
    if (!selectedTrack || selectedCyclists.length === 0) {
      return;
    }

    const trackLength = selectedTrack.coordinates.length;
    const steps = 50;

    const initialPositions = selectedCyclists.map((cyclist) => ({
      ...cyclist,
      position: selectedTrack.coordinates[0],
      step: 0,
      intervalId: null,
      startTime: Date.now(),
      endTime: null,
    }));

    setSelectedCyclists(initialPositions);
    setRaceResults([]);
    setMapCenter(selectedTrack.coordinates[0]);

    setTimeout(() => {
      const moveCyclist = (cyclist, index) => {
        const delay = Math.random() * 3600;
        const stepDuration = delay / steps;

        cyclist.intervalId = setInterval(() => {
          setSelectedCyclists((prevState) => {
            const newState = [...prevState];
            const currentCyclist = newState[index];

            if (currentCyclist.step < steps) {
              const newStep = currentCyclist.step + 1;
              const progress = newStep / steps;
              const trackIndex = Math.floor(progress * (trackLength - 1));
              const nextPosition = selectedTrack.coordinates[trackIndex];

              newState[index] = {
                ...currentCyclist,
                position: nextPosition,
                step: newStep,
              };
            } else {
              if (!currentCyclist.endTime) {
                currentCyclist.endTime = Date.now();
                setRaceResults((prevResults) => [
                  ...prevResults,
                  {
                    name: currentCyclist.name,
                    team: currentCyclist.team,
                    time:
                      (currentCyclist.endTime - currentCyclist.startTime) /
                      1000,
                  },
                ]);
              }
              clearInterval(currentCyclist.intervalId);
            }

            return newState;
          });
        }, stepDuration);
      };

      initialPositions.forEach((cyclist, index) => moveCyclist(cyclist, index));
    }, 1500);
  };

  return (
    <div>
      <AppBase>
        <div className="container">
          <TeamSelector
            teams={teams}
            setSelectedCyclists={setSelectedCyclists}
          />
          <MapView
            selectedTrack={selectedTrack}
            selectedCyclists={selectedCyclists}
            center={mapCenter}
          />
          <RaceController
            tracks={tracks}
            setSelectedTrack={setSelectedTrack}
            startRace={startRace}
          />
          {raceResults.length > 0 && (
            <div className="mt-4">
              <h2>Resultados de la Carrera</h2>
              <div className="results-grid">
                {raceResults
                  .sort((a, b) => a.time - b.time)
                  .map((result, index) => (
                    <div key={index} className="results-item">
                      {result.name} ({result.team}) - {result.time.toFixed(2)}{" "}
                      segundos
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </AppBase>
      <ToastContainer />
    </div>
  );
}

export default Simulacion;
