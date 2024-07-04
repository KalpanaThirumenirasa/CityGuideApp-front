import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { useTranslation } from "react-i18next";
import Buttons from "../../Components/Inputs/Buttons";
import { cityData } from "../../Data/city";
import Toggle from "../../Components/Toggle";
import { useSelector } from "react-redux";
import { RootState } from "../../Features/store";
import { UserRole } from "../../Features/Slices/authSlice";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const { isLoggedIn, role } = useSelector((state: RootState) => state.auth);

  const backgroundImage =
    "https://image.geo.de/30151392/t/q1/v3/w1440/r0/-/passau-s-402665383-jpg--86369-.jpg";

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          width: "100vw",
          height: "60vh",
        }}
      >
        <Container className="py-5 text-white" style={{ height: "100%" }}>
          <div className="heading">
            <h2>{t("Guide To New Comers")}</h2>
          </div>
          <div className="tile">
            {t("This is an application for you to understand Passau Better!")}
          </div>
          <div className="mt-4">
            <Buttons
              variant="primary"
              text="Register"
              to="/register"
              className="mx-3"
            />
            <Buttons
              variant="primary"
              text="Explore"
              to="/explore"
              className="mx-3"
            />
            {isLoggedIn && role === UserRole.ADMIN && (
              <Buttons
                variant="primary"
                text="ADMIN"
                to="/adminDashBoard/starter"
                className="mx-3"
              />
            )}
          </div>
        </Container>
      </div>

      <Container className="mt-3 mb-3">
        <div className="heading text-center">
          <h2>{t("Welcome to the District of Passau")}</h2>
        </div>

        {cityData.map((item, index) => (
          <Toggle
            key={index}
            title={t(item.title)}
            description={t(item.description)}
            isOpen={openIndex === index}
            onClick={() => handleToggleClick(index)}
          />
        ))}
      </Container>
    </div>
  );
};

export default Home;
