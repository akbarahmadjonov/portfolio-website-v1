import { EducationData } from "@types/educationTypes";

export async function fetchEducation(): Promise<EducationData[]> {
  const response = await fetch("http://localhost:3000/api/educations");

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}
