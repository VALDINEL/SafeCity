const db = require("../models/db");

// Reportar um incidente
exports.reportIncident = async (req, res) => {
    const { location, description, userId } = req.body;
    try {
        const result = await db.query(
            "INSERT INTO incidents (location, description, user_id) VALUES ($1, $2, $3) RETURNING *",
            [location, description, userId]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: "Erro ao reportar incidente." });
    }
};

// Obter todos os incidentes
exports.getIncidents = async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM incidents");
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: "Erro ao obter incidentes." });
    }
};
