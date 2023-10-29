import { createVideo, listVideos, updateVideo, deleteVideo } from '../services/videoService.js';

export const createVideoController = async (request, reply) => {
  const { title, description, duration } = request.body;

  await createVideo({ title, description, duration });

  return reply.status(201).send();
};

export const listVideosController = async (request) => {
  const search = request.query.search;

  return listVideos(search);
};

export const updateVideoController = async (request, reply) => {
  const videoID = request.params.id;

  const { title, description, duration } = request.body;

  await updateVideo(videoID, { title, description, duration });

  return reply.status(204).send();
};

export const deleteVideoController = async (request, reply) => {
  const videoID = request.params.id;

  await deleteVideo(videoID);

  return reply.status(204).send();
};