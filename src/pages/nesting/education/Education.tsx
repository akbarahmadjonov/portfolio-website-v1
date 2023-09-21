import React from "react";
import { ProfileSection } from "@components/ProfileSection/ProfileSection.tsx";

interface EducationProps {
  title: string;
  page__place: string;
  page__date: string;
  page__linkWeb: string;
  page__link: string;
  page__summary: string;
}

export const Education: React.FC<EducationProps> = () => {
  return (
    <ProfileSection
      title="EDUCATION & PROFESSIONAL DEVELOPMENT"
      page__place="PMI - Project Management Institute"
      page__date="2023"
      page__linkWeb="https://www.pmi.org"
      page__link="pmi.org"
      page__summary="I graduated in September 2023 from the PMI with Full-Stack Web Development and a minor in project management."
    />
  );
};
