import { Col, Row } from "reactstrap";
import AdminHome from "../components/dashboard/AdminHome";


const Starter = () => {
  return (
    <div>
      <Row>
        <Col lg="12" >
          <AdminHome />
        </Col>
      </Row>
      <Row>
        <Col lg="12">
        </Col>
      </Row>

    </div>
  );
};

export default Starter;
