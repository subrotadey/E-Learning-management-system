import React from 'react';
import { Card, Col} from 'react-bootstrap';
// import { CgLockUnlock } from "react-icons/cg";
import './CharacteristicsCard.css'

const CharacteristicsCard = ({imgs,cardTitle}) => {
    return (
      <Col xs={12} md={4} sm={12}>
        <Card>
          <Card.Body className='d-flex'>
            <div>
              <img src={imgs} alt="Album" className='icon-style' />
            </div>
            <div className='characteristic-style'>
              <Card.Title>{cardTitle}</Card.Title>
                <Card.Text className='card-text'>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default CharacteristicsCard;