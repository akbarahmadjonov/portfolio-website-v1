import { PortfolioData } from "@types/portfolioTypes";

export async function fetchPortfolio(): Promise<PortfolioData[]> {
  const response = await fetch(
    "https://portfolio-7uk6.onrender.com/api/portfolios"
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}
