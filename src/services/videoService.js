import { DatabasePostgres } from '../../database-postgres.js';

const database = new DatabasePostgres();

export const createVideo = async ({ title, description, duration }) => {
  return database.create({
    title,
    description,
    duration,
  });
};

export const listVideos = async (search) => {
  return database.list(search);
};

export const updateVideo = async (videoID, { title, description, duration }) => {
  return database.update(videoID, {
    title,
    description,
    duration,
  });
};

export const deleteVideo = async (videoID) => {
  return database.delete(videoID);
};