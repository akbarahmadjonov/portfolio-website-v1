import React from "react";
import { useQuery } from "react-query";
import { fetchEducation } from "@api/educationApi";
import { EducationData } from "@types/educationTypes";
import { ProfileSection } from "@components/ProfileSection/ProfileSection";
import { Skeleton } from "antd";

export const Education: React.FC = () => {
  const {
    data: educationData,
    isLoading,
    isError,
  } = useQuery("educations", fetchEducation);

  if (isLoading) {
    return (
      <div style={{ maxWidth: "500px" }}>
        <h2 style={{ padding: "14px 14px 0 14px" }} className="page__title">
          EDUCATION & PROFESSIONAL DEVELOPMENT
        </h2>
        <div
          className="education-card"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Skeleton.Image
            active={true}
            style={{ flex: 1, marginRight: "20px" }}
          />
          <div className="education-content" style={{ flex: 1 }}>
            <Skeleton paragraph={{ rows: 4 }} active />
          </div>
        </div>
        <div
          className="education-card"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Skeleton.Image
            active={true}
            style={{ flex: 1, marginRight: "20px" }}
          />
          <div className="education-content" style={{ flex: 1 }}>
            <Skeleton paragraph={{ rows: 4 }} active />
          </div>
        </div>
        <div
          className="education-card"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Skeleton.Image
            active={true}
            style={{ flex: 1, marginRight: "20px" }}
          />
          <div className="education-content" style={{ flex: 1 }}>
            <Skeleton paragraph={{ rows: 4 }} active />
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return <div>Error loading education data</div>;
  }

  return (
    <React.Fragment>
      <h2 style={{ padding: "14px 14px 0 14px" }} className="page__title">
        EDUCATION & PROFESSIONAL DEVELOPMENT
      </h2>
      {educationData.map((data: EducationData, index: number) => (
        <ProfileSection
          key={index}
          page__img={`https://portfolio-7uk6.onrender.com/${data.image}`}
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
