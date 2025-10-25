import prisma from "../prisma/client";

// Fetch all movies
export async function getAllMovies() {
  return prisma.movie.findMany({
    orderBy: { createdAt: "desc" },
  });
}

// Fetch a single movie by ID
export async function getMovieById(id: string) {
  return prisma.movie.findUnique({
    where: { id },
  });
}

// Create a new movie
export async function createMovie(data: {
  name: string;
  duration: number;
  rating: number;
  review?: string;
}) {
  return prisma.movie.create({ data });
}

// Update an existing movie
export async function updateMovie(
  id: string,
  data: {
    name?: string;
    duration?: number;
    rating?: number;
    review?: string;
  }
) {
  return prisma.movie.update({
    where: { id },
    data,
  });
}

// Delete a movie
export async function deleteMovie(id: string) {
  return prisma.movie.delete({
    where: { id },
  });
}
