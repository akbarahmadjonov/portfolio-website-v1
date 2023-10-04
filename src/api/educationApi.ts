import { EducationData } from "@types/educationTypes";

export async function fetchEducation(): Promise<EducationData[]> {
  try {
    const response = await fetch(
      "https://portfolio-server-apt8.vercel.app/api/educations"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    console.log(data);

    return data;
  } catch (error) {
    console.error("Error fetching education data:", error);
    throw error;
  }
}
