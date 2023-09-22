import React from "react";
import { ProfileSection } from "@components/ProfileSection/ProfileSection.tsx";

interface Portfolio {
  page__title: string;
  page__place: string;
  page__date: string;
  page__linkWeb: string;
  page__link: string;
  page__summary: string;
}

export const Portfolio: React.FC<Portfolio> = () => {
  const portfolioData = [
    {
      page__place: "PMI - Project Management Institute",
      page__date: "2023",
      page__linkWeb: "https://www.pmi.org",
      page__link: "pmi.org",
      page__summary:
        "I graduated in September 2023 from the PMI with Full-Stack Web Development and a minor in project management.",
    },
    {
      page__place: "Najot Ta'lim - Full-stack Web Development Training",
      page__date: "2022 - 2023",
      page__linkWeb: "https://najottalim.uz",
      page__link: "najottalim.uz",
      page__summary:
        "I got many of my general courses at Najot Ta'lim with Full-Stack Web Development and some projects.",
    },
    {
      page__place: "LifeTech - Frontend Web Development Training",
      page__date: "2020 - 2021",
      page__linkWeb: "https://lifetech.uz",
      page__link: "lifetech.uz",
      page__summary:
        "Successfully got many of my frontend courses at LifeTech with Frontend Web Development and also some projects.",
    },
  ];

  return (
    <React.Fragment>
      <h2 style={{ padding: "14px 14px 0 14px" }} className="page__title">
        PORTFOLIO
      </h2>
      {portfolioData.map((data, index) => (
        <ProfileSection
          key={index}
          page__place={data.page__place}
          page__date={data.page__date}
          page__linkWeb={data.page__linkWeb}
          page__link={data.page__link}
          page__summary={data.page__summary}
        />
      ))}
    </React.Fragment>
  );
};
