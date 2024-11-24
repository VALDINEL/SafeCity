const express = require("express");
const { reportIncident, getIncidents } = require("../controllers/incidents");
const router = express.Router();

// Rotas de incidentes
router.post("/incident", reportIncident);
router.get("/incidents", getIncidents);

module.exports = router;
