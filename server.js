import { fastify } from 'fastify';
import {
  createVideoController,
  listVideosController,
  updateVideoController,
  deleteVideoController,
} from './src/controllers/videoController.js';

const server = fastify();

// POST
server.post('/videos', createVideoController);

// GET
server.get('/videos', listVideosController);

// PUT
server.put('/videos/:id', updateVideoController);

// DELETE
server.delete('/videos/:id', deleteVideoController);

server.listen({
  port: 3333
});
