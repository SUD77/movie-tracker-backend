import { Request, Response } from "express";
import {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../services/movieService";

// Get all movies
export async function getAllMoviesController(req: Request, res: Response) {
  try {
    const movies = await getAllMovies();
    res.json(movies);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

// Get single movie by ID
export async function getMovieByIdController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const movie = await getMovieById(id);
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    res.json(movie);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

// Create new movie
export async function createMovieController(req: Request, res: Response) {
  try {
    const { name, duration, rating, review } = req.body;

    if (!name || !duration || !rating)
      return res.status(400).json({ message: "Missing required fields" });

    const movie = await createMovie({ name, duration, rating, review });
    res.status(201).json(movie);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

// Update movie
export async function updateMovieController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { name, duration, rating, review } = req.body;

    const updatedMovie = await updateMovie(id, { name, duration, rating, review });
    res.json(updatedMovie);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

// Delete movie
export async function deleteMovieController(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await deleteMovie(id);
    res.json({ message: "Movie deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
