import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { useTranslation } from "react-i18next";
import Buttons from "../../Components/Inputs/Buttons";
import { cityData } from "../../Data/city";
import Toggle from "../../Components/Toggle";
import ChatBox from "../../Components/ChatBox";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          
              <h1>{t("Guide To New Comers")}</h1>
              <h5>
                {t(
                  "This is an application for you to understand Passau Better!"
                )}
              </h5>
              <div className="mt-4">
                <Buttons variant="primary" text="Register" to="/register" className="mx-3"/>
                <Buttons variant="primary" text="Explore" to="/explore" />
              </div>
           
        </Container>
      </div>
      <ChatBox />
    </div>
  );
};

export default Home;
