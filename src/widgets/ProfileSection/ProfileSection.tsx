import React from "react";
import "./ProfileSection.scss";
import { FaCheck } from "react-icons/fa";

interface ProfileSectionProps {
  page__title: string;
  page__img: string;
  page__place: string;
  page__date: string;
  page__linkWeb: string;
  page__link: string;
  page__summary: string;
  page__skills: string[];

  // Show skills
  showSkills: boolean;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  page__title,
  page__img,
  page__place,
  page__date,
  page__linkWeb,
  page__link,
  page__summary,
  page__skills,
  showSkills,
}) => {
  return (
    <React.Fragment>
      <div className="profileSection">
        <h2 className="page__title">{page__title}</h2>
        <div className="profileSection__wrapper">
          <div className="profileSection__list">
            <div className="profileSection__item">
              <img
                className="profileSection__pic"
                src={page__img}
                width={100}
                height={100}
                alt="logo profileSection"
              />
              <div className="profileSection__itemCover">
                <h3 className="profileSection__place">{page__place}</h3>
                <p className="profileSection__itemCoverDate">{page__date}</p>
                <a
                  className="profileSection__itemCoverWebsite link"
                  href={page__linkWeb}
                >
                  {page__link}
                </a>
                <p className="profileSection__itemCoverSummary">
                  {page__summary}
                </p>
                {showSkills && page__skills.length > 0 ? (
                  <>
                    <span className="profileSection__skillsHeader">
                      Building Tools
                    </span>
                    <ul className="profileSection__skillsList">
                      {page__skills.map((skill: string, index: number) => (
                        <li className="profileSection__skillsItem" key={index}>
                          <FaCheck className="profileSection__checkIcon" />{" "}
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
