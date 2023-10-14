import React from "react";
import "./Header.scss";
import { Select } from "antd";
import { useTranslation } from "react-i18next";

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="header">
      <div className="header__inner">
        <Select
          defaultValue="en"
          style={{ width: 120 }}
          onChange={changeLanguage}
        >
          <Select.Option value="en">English</Select.Option>
          <Select.Option value="uz">Uzbek</Select.Option>
        </Select>
      </div>
    </div>
  );
};
