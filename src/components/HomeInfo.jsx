import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({text,link, btnText}) => (
    <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>{text}</p> 
      <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain' />
      </Link>  
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm leadind-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hola, mi nombre es <span className='font-semibold'>Matías</span>
            <br/>
            Soy Analista de Sistemas redidiendo en Argentina
        </h1>
    ),
    2: (
        <InfoBox 
            text="Trabajo constantemente en proyectos propios para adquirir y desarrollar mis habilidades
            como desarrollador."
            link={"/about"}
            btnText="Saber más"
        />
    ),
    3: (
        <InfoBox 
            text="Desarrollé varios proyectos a lo largo del tiempo y cree mi propio portafolio, interesado en verlos?"
            link={"/projects"}
            btnText="Visitar"
        />
    ),
    4: (
        <InfoBox 
            text="Estás buscando un desarrollador? Estoy sólo a unas teclas de distancia."
            link={"/contact"}
            btnText="Contactame"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo