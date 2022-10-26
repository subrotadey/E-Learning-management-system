import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FeatureInfoModal from './FeatureInfoModal';

const FeatureInfo = () => {
    return (
        <Container>
              <Row className='rounded-4 m-4 d-flex align-items-center' >
                <Col sm={6}  xs={12} className='text-center'>
                    <FeatureInfoModal></FeatureInfoModal>
                </Col>
                <Col sm={6}  xs={12} className='' >
                    <h2 className='text-uppercase fs-1 fw-bolder'>Watch. Listen. Practice. Learn.</h2>
                    <p>Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt adipiscing atgfnte varius at. Sed mollis vestibulum sapien sed mattis.Cras dictum tellus duvi, vitae sollicitudin ipsum tincidunt adipiscing ante varius at. Sed mollis ves tibulum sapien sed mattis.Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt adipiscing atgfnte tibulum sapien sed mattis.Cras dictum tellus dui. Sed mollis vestibulum sapien rthsed mattis.Cras dictum tellus duvi, vitae sollicitudin ipsum tincidunt adipiscing tibulum sapien sed mattis.</p>
                </Col>
              </Row>
            </Container>
    );
};

export default FeatureInfo;