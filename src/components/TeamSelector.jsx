import React, { useState, useEffect } from 'react';
import '../estilos.css';

function TeamSelector({ teams, setSelectedCyclists }) {
    const [selectedCyclistsByTeam, setSelectedCyclistsByTeam] = useState({});

    useEffect(() => {
        const selectedCyclists = Object.entries(selectedCyclistsByTeam)
            .map(([team, cyclist]) => {
                const teamData = teams.find(t => t.name === team);
                return teamData ? teamData.cyclists.find(c => c.name === cyclist) : null;
            })
            .filter(cyclist => cyclist); // Filtrar ciclistas válidos

        setSelectedCyclists(selectedCyclists);
    }, [selectedCyclistsByTeam, setSelectedCyclists, teams]);

    const handleSelect = (event, teamName) => {
        const cyclistName = event.target.value;
        setSelectedCyclistsByTeam(prevState => ({
            ...prevState,
            [teamName]: cyclistName
        }));
    };

    return (
        <div className="team-grid">
            {teams.map((team) => (
                <div key={team.name} className="team-item">
                    <label htmlFor={`${team.name}-select`}>Seleccione un ciclista de {team.name}:</label>
                    <select
                        id={`${team.name}-select`}
                        value={selectedCyclistsByTeam[team.name] || ''}
                        onChange={(e) => handleSelect(e, team.name)}
                    >
                        <option value="">Seleccionar ciclista</option>
                        {team.cyclists && team.cyclists.map((cyclist) => (
                            <option key={`${team.name}-${cyclist.name}`} value={cyclist.name}>
                                {cyclist.name}
                            </option>
                        ))}
                    </select>
                </div>
            ))}
        </div>
    );
}

export default TeamSelector;
