import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    
    return (
        <Layer>
            <center>
                <p style={{ fontSize: "12px", color: "#6D6D6D" }}>Copyright 2021. SweetCase, Ha-Jeong-Hyun. All Rights Reserved.</p>
            </center>
        </Layer>
    );
}
export default Footer;

const Layer = styled.div`
    width: 100%;
    height: 100px;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #FFF4E5;
`