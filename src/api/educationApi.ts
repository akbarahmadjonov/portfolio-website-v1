import { EducationData } from "@types/educationTypes";

export async function fetchEducation(): Promise<EducationData[]> {
  const response = await fetch(
    "https://portfolio-7uk6.onrender.com/api/educations"
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}
