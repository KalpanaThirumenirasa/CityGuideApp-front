// src/Pages/Hotel.tsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Features/store";
import ExploreView from "../../Components/ExploreView";
import { Container, Spinner, Alert } from "react-bootstrap";
import { loadEvents } from "../../Features/Slices/eventSlice";
import { loadRestaurants } from "../../Features/Slices/restaurantSlice";


const Hotel: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const {
    data: hotels,
    loading,
    error,
  } = useSelector((state: RootState) => state.restaurants);
  const {
    isLoggedIn
  } = useSelector((state: RootState) => state.auth);

  if(!isLoggedIn){
    navigate("/login")
  }

  useEffect(() => {
    dispatch(loadRestaurants());
  }, [dispatch]);

  if (loading) {
    return (
      <Container>
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container>
      {hotels.map((hotel) => (
        <ExploreView
          key={hotel._id}
          title={hotel.restaurantName}
          text={hotel.desc}
          imgSrc={hotel.image}
        />
      ))}
    </Container>
  );
};

export default Hotel;
