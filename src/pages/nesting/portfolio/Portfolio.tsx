import React from "react";
import { useQuery } from "react-query";
import { fetchPortfolio } from "@api/portfolioApi";
import { PortfolioData } from "@types/portfolioTypes";
import { ProfileSection } from "@components/ProfileSection/ProfileSection";
import { Skeleton } from "antd";

export const Portfolio: React.FC = () => {
  const {
    data: portfolioData,
    isLoading,
    isError,
  } = useQuery("portfolios", fetchPortfolio);

  if (isLoading) {
    return (
      <div style={{ maxWidth: "500px" }}>
        <h2 style={{ padding: "14px 14px 0 14px" }} className="page__title">
          PORTFOLIO
        </h2>
        <div
          className="portfolio-card"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Skeleton.Image
            active={true}
            style={{ flex: 1, marginRight: "20px" }}
          />
          <div className="portfolio-content" style={{ flex: 1 }}>
            <Skeleton paragraph={{ rows: 4 }} active />
          </div>
        </div>
        <div
          className="portfolio-card"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Skeleton.Image
            active={true}
            style={{ flex: 1, marginRight: "20px" }}
          />
          <div className="portfolio-content" style={{ flex: 1 }}>
            <Skeleton paragraph={{ rows: 4 }} active />
          </div>
        </div>
        <div
          className="portfolio-card"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Skeleton.Image
            active={true}
            style={{ flex: 1, marginRight: "20px" }}
          />
          <div className="portfolio-content" style={{ flex: 1 }}>
            <Skeleton paragraph={{ rows: 4 }} active />
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return <div>Error loading portfolio data</div>;
  }

  return (
    <React.Fragment>
      <h2 style={{ padding: "14px 14px 0 14px" }} className="page__title">
        PORTFOLIO
      </h2>
      {portfolioData.map((data: PortfolioData, index: number) => (
        <ProfileSection
          key={index}
          page__img={`https://portfolio-7uk6.onrender.com/${data.image}`}
          page__place={data.place}
          page__date={data.date}
          page__linkWeb={data.linkWeb}
          page__link={data.website}
          page__summary={data.summary}
          page__skills={data.skills}
          showSkills={true}
        />
      ))}
      <small style={{ display: "flex", justifyContent: "flex-end" }}>
        {" "}
        I will publish soon again....
      </small>
    </React.Fragment>
  );
};
