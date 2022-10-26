import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CharacteristicsCard from './CharacteristicsCard';
import unlock from '../../../assets/icons/unlock.svg'
import video from '../../../assets/icons/video.svg'
import microphone from '../../../assets/icons/microphone.svg'
import file from '../../../assets/icons/file.svg'
import mobile from '../../../assets/icons/mobile.svg'
import support from '../../../assets/icons/support.svg'
import bg from '../../../assets/images/bg1.svg'
import './Characteristics.css'

const Characteristics = () => {

    // const featuresDescription = [
    //     { icon:'', title:'Unlimited access', description: 'Morbi leo risus, porta ac consectetur, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor'},
    //     { icon:'', title:'4500 video courses', description: 'Morbi leo risus, porta ac consectetur, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor'},
    //     { icon:'', title:'Expert teachers', description: 'Morbi leo risus, porta ac consectetur, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor'},
    //     { icon:'', title:'Valid Certification', description: 'Morbi leo risus, porta ac consectetur, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor'},
    //     { icon:'', title:'On-the-go learning', description: 'Morbi leo risus, porta ac consectetur, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor'},
    //     { icon:'', title:'24x7 Super Support', description: 'Morbi leo risus, porta ac consectetur, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor'}
    // ]

    return (
        <Container style={{ 
            backgroundImage: `url(${bg})` 
          }}>
            <div>
                <h1 className='border-style'>
                    <span>MEMBERSHIPS</span>
                     INCLUDE</h1>
                <h5>Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat. Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed tincidunt tristique enim sed sollcitudin.</h5>
            </div>
            <Row  md={3} sm={1} className="grid grid-cols-1 lg:grid-cols-3 g-4 my-5">
                <CharacteristicsCard cardTitle={'Unlimited access'} imgs={unlock}></CharacteristicsCard>
                <CharacteristicsCard cardTitle={'4500 video courses'} imgs={video}></CharacteristicsCard>
                <CharacteristicsCard cardTitle={'Expert teachers'} imgs={microphone}></CharacteristicsCard>
                <CharacteristicsCard cardTitle={'Valid Certification'} imgs={file}></CharacteristicsCard>
                <CharacteristicsCard cardTitle={'On-the-go learning'} imgs={mobile}></CharacteristicsCard>
                <CharacteristicsCard cardTitle={'24x7 Super Support'} imgs={support}></CharacteristicsCard>
            </Row>
        </Container>
    );
};

export default Characteristics;