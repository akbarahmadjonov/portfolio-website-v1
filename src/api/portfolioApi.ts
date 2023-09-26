import { PortfolioData } from "@types/portfolioTypes";

export async function fetchPortfolio(): Promise<PortfolioData[]> {
  const response = await fetch("http://localhost:3000/api/portfolios");

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}
