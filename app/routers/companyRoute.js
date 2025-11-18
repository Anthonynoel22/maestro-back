import express from "express";
import companyController from "../controllers/companyController.js";
import authenticate from "../middlewares/authMiddleware.js";

const companyRoute = express.Router();

// GET /api/admin/company
companyRoute.get("/admin/company", companyController.findAll);

// GET /api/company/companyProfile
companyRoute.get("/company/companyProfile", authenticate, companyController.companyProfile
);

// POST /api/company
companyRoute.post("/company", authenticate, companyController.create);

// PATCH /api/company/:idCompany
companyRoute.patch("/company", authenticate, companyController.update);

// DELETE /api/company/:idCompany
companyRoute.delete("/company/:id", companyController.delete);

export default companyRoute;
