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
    "https://images.stockcake.com/public/9/4/1/94151709-853f-4ac6-975c-9a92760560ee_large/tourist-couple-exploring-stockcake.jpg";

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
          
              <h1>{t("Guide To New Customer")}</h1>
              <h5>
                {t(
                  "This is an application for you to understand Germany Better!"
                )}
              </h5>
              <div className="mt-4">
                <Buttons variant="primary" text="Register" to="/register" className="mx-3"/>
                <Buttons variant="primary" text="Explore" to="/explore" />
              </div>
           
        </Container>
      </div>

      <Container className="mt-3 mb-3">
        <div className="headings mt-3">
          <h2 className="text-center mb-4 text-dark">
            {t("Welcome to the District of Passau")}
          </h2>
        </div>

        {cityData.map((item, index) => (
          <Toggle
            key={index}
            title={item.title}
            description={item.description}
            isOpen={openIndex === index}
            onClick={() => handleToggleClick(index)}
          />
        ))}
      </Container>
      <ChatBox />
    </div>
  );
};

export default Home;
