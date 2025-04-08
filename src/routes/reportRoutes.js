const express = require("express");
const router = express.Router();
const reportController = require("./../controllers/reportController");

//Rota para gerar CSV
router.get("/report/csv", reportController.exportUserCSV);

//Rota para gerar PDF
router.get("/report/pdf", reportController.exportUserPDF);

module.exports = router;