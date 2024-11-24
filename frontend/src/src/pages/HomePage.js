import React, { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/incidents").then((response) => {
            setIncidents(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Incidentes Reportados</h1>
            <ul>
                {incidents.map((incident) => (
                    <li key={incident.id}>
                        <strong>Local:</strong> {incident.location} -{" "}
                        <strong>Descrição:</strong> {incident.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;
