import styled from "styled-components";
import { Helmet } from "react-helmet";
import {Form, Button} from  'react-bootstrap';
import {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../../asset/font/font.css';
import Footer from '../../components/Footer';

import PCFLImg from '../../asset/pcfl.svg';

const PCFL = () => {
    
    const [inputData, setInputData] = useState({
        "file": "",
        "interval": 0
    });
    return (
        <div>
            <Helmet>
                <title>PCFL - Pinao Compensator For FL-Studio</title>
            </Helmet>
            <ImgContainer>
                <center>
                    <img src={PCFLImg} width="300px" height="300px" alt="PCFL 로고 "/>
                </center>
            </ImgContainer>
            <Layer>
                <div style={{ marginBottom: "100px" }} >
                    <center>
                        <h1 style={{fontFamily: "Android-101", color: "#122042"}}>PCFL</h1>
                        <h5 style={{fontFamily: "Android-101", color: "#122042"}}>piano compentator for fl-studio</h5>

                        <p style={{marginTop: "20px"}}>FL Studio에서 서스테인이 포함된 피아노 Midi File을 Import하면 붙어있는 두 개의 서스테인 라인을 하나로 인식을 하게 되어 불협화음을 발생시킵니다.<br />
                        PCFL는 이를 방지하기 위해 두 서스테인 라인의 간격을 띄워 불협화음을 막게 해주는 서비스 입니다.</p>
                    </center>
                </div>
                <div>
                    <center>
                        <Form.Group controlId="inputedMidiFileForm" className="mb-3" 
                                style={{ border: "1px blue solid", paddingTop: "30px", paddingLeft: "15px", paddingRight: "15px", paddingBottom: "30px"}}>
                            <Form.Label>Input your midi file</Form.Label><br />
                            <Form.Control type="file" value={inputData.file} onChange={e => {

                                // Checking Data
                                let filenameSplited = e.target.value.split('.')
                                if(filenameSplited[filenameSplited.length - 1] == "mid" || filenameSplited[filenameSplited.length - 1] == "midi") {
                                    setInputData({
                                        "file": e.target.value,
                                        "interval": inputData.interval
                                    });
                                } else {
                                    window.alert("midi 또는 mid파일만 업로드 가능합니다.");
                                }
                            }} /><br /><br />
                            
                            <Form.Label>Interval</Form.Label>
                            <Form.Control type="number" step="0.01" placeholder="0.01 ~ 0.5" value={inputData.interval} onChange={e => {
                                setInputData({
                                    "file": inputData.file,
                                    "interval": e.target.value
                                });
                            }} />
                            <Form.Text className="text-muted">서스테인 사이의 간격을 의미합니다 0.1 ~ 0.5 사이를 권장합니다. </Form.Text><br />

                            <Button variant="outline-success" style={{ marginTop: "30px", width: "40%" }} onClick={() => {
                                console.log(inputData);
                            }} >Process</Button>
                        </Form.Group>
                    </center>
                </div>
            </Layer>
            <Footer />
        </div>
    );
}
const ImgContainer = styled.div`
    padding-top: 100px;
    width: 100%;
`
const Layer = styled.div`
    padding-top: 50px;
    padding-left: 300px;
    padding-right: 300px;
`

export default PCFL;