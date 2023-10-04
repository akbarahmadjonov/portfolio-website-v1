import { PortfolioData } from "@types/portfolioTypes";

export async function fetchPortfolio(): Promise<PortfolioData[]> {
  const response = await fetch(
    "https://portfolio-server-apt8.vercel.app/api/portfolios"
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}
