import { ExperienceData } from "@types/experienceTypes";

export async function fetchExperience(): Promise<ExperienceData[]> {
  const response = await fetch(
    "https://portfolio-server-apt8.vercel.app/api/experiences"
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}
