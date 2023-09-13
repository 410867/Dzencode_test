import React from 'react';
import '../css/rightMenu.css';
import photo from "../img/photo.png";
import imgSetting from "../img/img_setting.png";
import {Link} from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function LeftMenu() {
    return (
        <div className="block_leftMenu">
            <div className="block_photo">
                <img className="photo" src={photo} alt=""/>
                <Link to="/setting">
                    <div className="block_imgSetting">
                        <img className="img_setting" src={imgSetting} alt=""/>
                    </div>
                </Link>
            </div>
            <Navbar />
        </div>
    );
}
