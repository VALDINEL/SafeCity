import React, { useState } from "react";
import axios from "axios";

function ReportIncident() {
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/incident", { location, description }).then(() => {
            alert("Incidente reportado com sucesso!");
        });
    };

    return (
        <div>
            <h1>Reportar Incidente</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Local:</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Descrição:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default ReportIncident;
