import express from 'express';
import messageContactController from '../controllers/messageContactController.js';

const messageContactRoute = express.Router();

// GET /api/message-contact
messageContactRoute.get('/message-contact', messageContactController.findAll);


// POST /api/message-contact
messageContactRoute.post('/message-contact', messageContactController.create);


// PATCH /api/message-contact/:idMessageContact
messageContactRoute.patch('/message-contact/:id', messageContactController.update);


// DELETE /api/genre/:idMessageContact
messageContactRoute.delete('/message-contact/:id', messageContactController.deleteMessage)




export default messageContactRoute;