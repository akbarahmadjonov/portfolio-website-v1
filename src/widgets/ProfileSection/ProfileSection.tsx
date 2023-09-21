import React from "react";
import "./ProfileSection.scss";
import PMI from "@images/PMI.png";
import Najotalim from "@images/najot-talim.png";
import Lifetech from "@images/lifetech.jpg";

interface ProfileSectionProps {
  pageTitle: string;
  page__place: string;
  page__date: string;
  page__linkWeb: string;
  page__link: string;
  page__summary: string;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  pageTitle,
  // img
  page__place,
  page__date,
  page__linkWeb,
  page__link,
  page__summary,
}) => {
  return (
    <React.Fragment>
      <div className="profileSection">
        <h2 className="page__title">{pageTitle}</h2>
        <div className="profileSection__wrapper">
          <div className="profileSection__list">
            <div className="profileSection__item">
              <img
                className="profileSection__pic"
                src={PMI}
                width={100}
                height={100}
                alt="logo profileSection"
              />
              <div className="profileSection__itemCover">
                <h3 className="profileSection__place">{page__place}</h3>
                <p className="profileSection__itemCoverDate">{page__date}</p>
                <a
                  className="profileSection__itemCoverWebsite"
                  href={page__linkWeb}
                >
                  {page__link}
                </a>
                <p className="profileSection__itemCoverSummary">
                  {page__summary}
                </p>
              </div>
            </div>
            <div className="profileSection__item">
              <img
                className="profileSection__pic"
                src={Najotalim}
                width={100}
                height={100}
                alt="logo profileSection"
              />
              <div className="profileSection__itemCover">
                <h3 className="profileSection__place">
                  Najot Ta'lim - Full-stack Web Development Training
                </h3>
                <p className="profileSection__itemCoverDate">2022 - 2023</p>
                <a
                  className="profileSection__itemCoverWebsite"
                  href="https://najottalim.uz"
                >
                  najottalim.uz
                </a>
                <p className="profileSection__itemCoverSummary">
                  I got many of my general courses at Najot Ta'lim with
                  Full-Stack Web Development and some projects.
                </p>
              </div>
            </div>
            <div className="profileSection__item">
              <img
                className="profileSection__pic"
                src={Lifetech}
                width={100}
                height={100}
                alt="logo profileSection"
              />
              <div className="profileSection__itemCover">
                <h3 className="profileSection__place">
                  LifeTech - Frontend Web Development Training
                </h3>
                <p className="profileSection__itemCoverDate">2020 - 2021</p>
                <a
                  className="profileSection__itemCoverWebsite"
                  href="https://lifetech.uz"
                >
                  lifetech.uz
                </a>
                <p className="profileSection__itemCoverSummary">
                  Successfully got many of my frontend courses at LifeTech with
                  Frontend Web Development and also some projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
