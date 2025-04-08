const { format } = require("@fast-csv/format");
const PDFDocument = require("pdfkit");
const UserModel = require("../models/UserModel");

const exportUserCSV = async (req, res) => {
    try {
        const users = await UserModel.getAllUsers();

        res.setHeader("Content-Disposition", "attachment; filename=users.csv");
        res.setHeader("Content-Type", "text-csv");

        const csvStream = format({ headers: true });
        csvStream.pipe(res);

        users.forEach((user) => {
            csvStream.write({
                Id: user.id,
                Nome: user.name,
                Senha: user.password
            });
        });

        csvStream.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o CSV" });
    }
};

const exportUserPDF = async (req, res) => {
    try {
        const users = await UserModel.getAllUsers();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=users.pdf")

        const doc = new PDFDocument();
        doc.pipe(res);

        //Titulo
        doc.fontSize(20).text("Relatório de Usúarios", { align: "center" });
        doc.moveDown();

        //Cabeçalho
        doc.fontSize(12).text("Id | Nome | Senha", { underline: true });
        doc.moveDown(0.5);

        //Add dados dos usúarios
        users.forEach((users) => {
            doc.text(
                `${users.id} | ${users.name} | ${users.password}`, 
            );
        });

        doc.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar PDF!" });
    }
};

module.exports = { exportUserCSV, exportUserPDF };