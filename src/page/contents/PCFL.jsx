import styled from "styled-components";
import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import '../../asset/font/font.css';
import Footer from '../../components/Footer';

const PCFL = () => {
    console.log("log")
    return (
        <div>
            <Helmet>
                <title>PCFL - Pinao Compensator For FL-Studio</title>
            </Helmet>
            <Footer />
        </div>
    );
}
export default PCFL;