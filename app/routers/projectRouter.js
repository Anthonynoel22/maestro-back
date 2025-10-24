import express from 'express';
import projectsController from '../controllers/projectsController.js';


const projectRouter =  express.Router();

//Admin

// GET /api/admin/project
projectRouter.get('/admin/project', projectsController.getAllProjects)


// GET /api/admin/project/filter?
projectRouter.get('/admin/project/filter', projectsController.sortProjectsByStatus)


// PATCH /api/admin/project/:idProjet
projectRouter.patch('/admin/project:id', projectsController.updateStatus)


// DELETE /api/admin/project/:idProjet
projectRouter.delete('/admin/project:id', projectsController.deleteProject)


//Client

// POST /api/project
projectRouter.post('/project', projectsController.askProject)


// GET /api/project
projectRouter.get('/project', projectsController.listProjects)


// GET /api/project/filter?
projectRouter.get('/project/filter', projectsController.sortByStatut)



export default projectRouter;