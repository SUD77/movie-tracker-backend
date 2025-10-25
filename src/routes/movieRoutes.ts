import { Router } from "express";
import {
  getAllMoviesController,
  getMovieByIdController,
  createMovieController,
  updateMovieController,
  deleteMovieController,
} from "../controllers/movieController";

const router = Router();

router.get("/movies", getAllMoviesController);
router.get("/movies/:id", getMovieByIdController);
router.post("/movies", createMovieController);
router.put("/movies/:id", updateMovieController);
router.delete("/movies/:id", deleteMovieController);

export default router;
