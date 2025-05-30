"use client";
import React, { useContext } from 'react';
import './Home.css';
import PropTypes from 'prop-types';
import { replace, useNavigate } from 'react-router-dom';
import { Header } from '../../components/Home Componets/Header';
import { HeroandServices } from '../../components/Home Componets/HeroandServices';
import { Footer } from '../../components/Home Componets/Footer';
import { UserContext } from '../../context/UserContext';



export const Home = ({}) => {
	const navigate = useNavigate();
	const {usuario, setUsuario} = useContext(UserContext);
	
	const redireccionlogin =()=>{
		navigate('/login',{replace:true})
	};
	return (
    <>
		<Header />
		<HeroandServices />
		<Footer />
	</>
	);
};

Home.propTypes = {};
