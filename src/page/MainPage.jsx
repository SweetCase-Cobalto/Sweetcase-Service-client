import styled from 'styled-components';
import MainLogoImg from '../asset/sweetcase-service-logo.png';
import PCFLImg from "../asset/pcfl.svg";
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../asset/font/font.css';

import Footer from '../components/Footer';

const MainPage = () => {
    return (
        <div>
            <Helmet>
                <title>Sweetcase Service</title>
            </Helmet>

            <ImgContainer>
                <center>
                    <img src={MainLogoImg} width="300px" height="300px" alt="메인 페이지 로고" />
                </center>
                <TextContainer>
                    <center>
                        <h1 style={{fontFamily: "Android-101", color: "#FF4E00"}}>Sweetcase Service</h1>
                        <p style={{marginTop: "15px"}}>Sweetcase에서 구현된 알고리즘 및 API들을 외부에서 사용할수 있게 개발된 서비스 입니다.<br />
                        차후에 API Service도 제공될 예정입니다.</p>

                        <h2 style={{fontFamily: "Android-101", color: "#FF4E00", marginTop: "100px"}}>Contents</h2>
                        <ContentLayer>
                            
                                <Content id="pcfl">
                                    <Link to="/pcfl">
                                        <ContentImg src={PCFLImg} alt="PCFL 로고" />
                                    </Link>
                                    <p style={{ fontFamily: "Android-101", fontSize: "18px"}}>PCFL</p>
                                    
                                </Content>
                        </ContentLayer>
                    </center>
                </TextContainer>
            </ImgContainer>

            <Footer />
        </div>
    );
}
export default MainPage;
const ImgContainer = styled.div`
    padding-top: 100px;
    width: 100%;
`
const TextContainer = styled.div`
    padding-top: 50px;
    padding-left: 300px;
    padding-right: 300px;
`
const ContentLayer = styled.div`
    width: 100%;
    padding-top: 40px;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
`
const Content = styled.div`
`
const ContentImg = styled.img`
    width: 100px;
    height: 100px;
`