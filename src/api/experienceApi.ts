import { ExperienceData } from "@types/experienceTypes";

export async function fetchExperience(): Promise<ExperienceData[]> {
  const response = await fetch("http://localhost:3000/api/experiences");

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}