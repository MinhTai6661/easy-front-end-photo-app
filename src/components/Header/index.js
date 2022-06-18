import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

Header.propTypes = {};

function Header(props) {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col>
                        <NavLink className="header__link header__title" to="/">
                            MINHTAI PHOTO
                        </NavLink>
                    </Col>
                    <Col>
                        <NavLink
                            to="photos"
                            className={(nav)=>{
                                return `header__link ${nav.isActive && 'header__link--active'}`
                            }}
                        >
                            REDUX PROJECT
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;
