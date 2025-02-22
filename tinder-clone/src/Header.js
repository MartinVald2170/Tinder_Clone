import React from "react"
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from "@material-ui/core/IconButton";
import {Link, useHistory} from "react-router-dom"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Header ({ backButton}) {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
                 <IconButton onClick={() => history.replace(backButton)}>
                <ArrowBackIosIcon fontSize="large" className="header__ios" />
                </IconButton>
            ): (
           <IconButton>
            <PersonIcon className="header__icon" fontSize="large"/>
            </IconButton>
            )}
            <Link to="/">
            <img
            className="header__logo" 
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" 
            alt="Tinder Logo"
            />
            </Link>
            <Link to="/chat">
            <IconButton>
            <QuestionAnswerIcon className="header__icon" />
        </IconButton>
        </Link>
        </div>
    )
}

export default Header 