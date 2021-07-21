import styled from "styled-components";
import { Helmet } from "react-helmet";
import {Form, Button} from  'react-bootstrap';
import {useState} from 'react';
import axios from 'axios';
import fileDownload from 'js-file-download';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../../asset/font/font.css';
import Footer from '../../components/Footer';

import PCFLImg from '../../asset/pcfl.svg';

import URL from '../../asset/conifig.json';

const PCFL = () => {
    
    const [inputData, setInputData] = useState({
        "file": "",
        "interval": 0
    });

    function submitEvent(e) {
        // Send FILE Event
        e.preventDefault();

        // Checking PROPS
        if(inputData.interval < 0.01 || inputData.interval > 0.5) {
            window.alert("interval은 0.01과 0.05 사이어야 합니다.");
            return
        }
        if(inputData.file == "") {
            window.alert("미디파일을 추가해 주세요");
            return
        }
        
        // File Form Data 생성
        const formData = new FormData();
        formData.append('target_file', inputData.file, inputData.file.name);
        
        // Backend 전송
        const targetURL = URL["backend-url"]+"pcfl" + "?interval=" + String(inputData.interval);
        axios({
            method: 'post',
            url: targetURL,
            responseType: 'blob',
            data: formData,
            headers: {
                'content-type': 'multipart/form-data',
                'Accept': 'multipart/form-data',
            }
        }).then((r) => {
            // 성공시 바로 파일 다운로드
            console.log(r);
            fileDownload(r.data, 'output.mid');
        }).catch((e) => {
            // 서버측 실패 시 Error 호출
            window.alert("ERROR");
        })
    }

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
                        <form>
                        <Form.Group controlId="inputedMidiFileForm" className="mb-3"
                                style={{ border: "1px blue solid", paddingTop: "30px", paddingLeft: "15px", paddingRight: "15px", paddingBottom: "30px"}}>

                            <Form.Label>Input your midi file</Form.Label><br />
                            <Form.Control type="file" name="form-file" onChange={e => {

                                // Checking Data
                                let filenameSplited = e.target.value.split('.')
                                if(filenameSplited[filenameSplited.length - 1] == "mid" || filenameSplited[filenameSplited.length - 1] == "midi") {
                                    setInputData({
                                        "file": e.target.files[0],
                                        "interval": inputData.interval
                                    });
                                } else {
                                    window.alert("midi 또는 mid파일만 업로드 가능합니다.");
                                }
                            }} /><br /><br />
                            
                            <Form.Label>Interval</Form.Label>
                            <Form.Control type="number" step="0.01" min="0.01" max="0.5" placeholder="0.01 ~ 0.5" value={inputData.interval} onChange={e => {
                                setInputData({
                                    "file": inputData.file,
                                    "interval": e.target.value
                                });
                            }} />
                            <Form.Text className="text-muted">서스테인 사이의 간격을 의미합니다 0.01 ~ 0.2 사이를 권장합니다. </Form.Text><br />

                            <Button type="button" variant="outline-success" style={{ marginTop: "30px", width: "40%" }} onClick={submitEvent}>Process</Button>
                        </Form.Group></form>
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