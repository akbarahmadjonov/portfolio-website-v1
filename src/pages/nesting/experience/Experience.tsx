import React from "react";
import { useQuery } from "react-query";
import { fetchExperience } from "@api/experienceApi";
import { ExperienceData } from "@types/experienceTypes";
import { ProfileSection } from "@components/ProfileSection/ProfileSection";
import { Skeleton } from "antd";

export const Experience: React.FC = () => {
  const {
    data: experienceData,
    isLoading,
    isError,
  } = useQuery("experiences", fetchExperience);

  if (isLoading) {
    return (
      <div style={{ maxWidth: "500px" }}>
        <h2 style={{ padding: "14px 14px 0 14px" }} className="page__title">
          EXPERIENCE
        </h2>
        <div
          className="experience-card"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Skeleton.Image
            active={true}
            style={{ flex: 1, marginRight: "20px" }}
          />
          <div className="experience-content" style={{ flex: 1 }}>
            <Skeleton paragraph={{ rows: 4 }} active />
          </div>
        </div>
        <div
          className="experience-card"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Skeleton.Image
            active={true}
            style={{ flex: 1, marginRight: "20px" }}
          />
          <div className="experience-content" style={{ flex: 1 }}>
            <Skeleton paragraph={{ rows: 4 }} active />
          </div>
        </div>
        <div
          className="experience-card"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Skeleton.Image
            active={true}
            style={{ flex: 1, marginRight: "20px" }}
          />
          <div className="experience-content" style={{ flex: 1 }}>
            <Skeleton paragraph={{ rows: 4 }} active />
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return <div>Error loading experience data</div>;
  }

  return (
    <React.Fragment>
      <h2 style={{ padding: "14px 14px 0 14px" }} className="page__title">
        EXPERIENCE
      </h2>
      {experienceData.map((data: ExperienceData, index: number) => (
        <ProfileSection
          key={index}
          page__img={`https://portfolio-7pxp.onrender.com/${data.image}`}
          page__place={data.place}
          page__date={data.date}
          page__linkWeb={data.linkWeb}
          page__link={data.website}
          page__summary={data.summary}
        />
      ))}
    </React.Fragment>
  );
};
