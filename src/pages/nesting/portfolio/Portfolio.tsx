import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.scss";
import { useQuery } from "react-query";
import { fetchPortfolio } from "@api/portfolioApi";
import { PortfolioData } from "@types/portfolioTypes";
import { ProfileSection } from "@components/ProfileSection/ProfileSection";
import { Popover, Skeleton } from "antd";
import { FcOpenedFolder } from "react-icons/fc";

export const Portfolio: React.FC = () => {
  // Popover
  const githubPopoverContent = (
    <div style={{ width: "100%", maxWidth: "300px" }}>
      <p>
        GitHub code links are available upon request to those who reach out.
        Feel free to contact me for more information.
      </p>
      <Link to={"/contact"}>Click here to contact</Link>
    </div>
  );

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
      <div className="requestCode">
        <h2 style={{ padding: "14px 14px 0 14px" }} className="page__title">
          PORTFOLIO
        </h2>
        <Popover
          content={githubPopoverContent}
          title="Github Code"
          trigger="hover"
        >
          <span>
            <FcOpenedFolder size={25} />
          </span>
        </Popover>
      </div>
      {portfolioData.map((data: PortfolioData, index: number) => (
        <ProfileSection
          key={index}
          page__img={`https://portfolio-server-apt8.vercel.app/${data.image}`}
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
