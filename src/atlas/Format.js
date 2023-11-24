import {useEffect} from 'react';

//import finlay from '../pictures/JAMES FINLAY KERICHO.jpg';
//import kapchorua from '../pictures/KAPCHORUA TEA ESTATE.jpg';
//import karirana from '../pictures/KARIRANA TEA ESTATE.jpg';
//import karongi from '../pictures/karongi tea factory ltd.jpg';
//import mufindi from '../pictures/MUFINDI TEA PLANTATION.jpg';
//import nandi from '../pictures/NANDI TEA ESTATES.jpg';
//import pfunda from '../pictures/Pfunda Tea Company.jpg';
//import rubaya from '../pictures/RUBAYA TEA ESTATE.jpg';
//import rwegura from '../pictures/Rwegura Tea Plantation.jpg';
//import teza from '../pictures/Teza Tea Estate.jpg';
//import tezaPlant from '../pictures/Teza Tea Plantation.jpg';
//import eastern from '../ttea/eastern.png';
//import sireet from '../ttea/sireet.png';
//import gatare from '../tea/gataregatare.png';
//import sasini from '../pictures/SASINI.jpg';
// new

import './Garden.css';

const plantations = [
     
    {image: finlay, title: 'James Finlay, Kericho'},
    {image: sireet, title: 'Sireet OEP estates, Nandi-Kenya'},
   {image: eastern, title: 'Eastern Produce Tea Estates, Kenya'},
    {image: karirana , title: 'Karirana Tea Estate'}, 
    {image: rubaya, title: 'Rubaya Tea Estate'},
      {image: nandi, title: 'Nandi Tea Estates'},
       {image: rwegura, title: 'Rwegura Tea Plantation'},
      {image: pfunda, title: 'Pfunda Tea Company'},
               {image:teza, title: 'Teza Estate'},         
 
 
  //  
     
      
      {image: karongi, title: 'Karongi Tea Factory Limited'},
      
    
      
          {image:sasini, title: 'Sasini' },
            {image: mufindi, title: 'Mufindi Tea Plantation'},   
          {image: kapchorua ,title:'Kapchorua Tea Estate'},
            {image: tezaPlant, title: 'Teza Tea Plantation'},
             { image: gatare, title: 'Gatare Tea Company Ltd, Rwanda' },
          
 

];

export default function Plantations() {
  useEffect(() => {
    const preventRightClick = (e) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', preventRightClick);

    return () => {
      document.removeEventListener('contextmenu', preventRightClick);
    };
  }, []);
  return (
    <div className="plantations">
    <div className="p">
      <ul className="grid">
        {plantations.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.title} 
            title={item.title} loading="lazy"/>
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
      </div>

    </div>
  );
}

import { useEffect } from 'react';
import gatare from '../tea/gatare.png';
import mbogo from '../ttea/mbogo-valley.png';
import pfunda from '../ttea/pfunda.png';
import mulindii from '../ttea/mulindi-factory.png';
import kisaru from '../ttea/kisaru-f.png';
import koisagat from '../ttea/Koisagat.png';
// new
import emrok from '../pictures/EMROK TEA FACTORY LTD(EPZ).jpg';
import gisakura from '../pictures/Gisakura Tea Factory.jpg';
import kipkebe from '../pictures/KIPKEBE TEA LTD.jpg';
import kkisaru from '../pictures/KISARU TEA ESTATE.jpg';
import kitumbe from '../pictures/KITUMBE TEA FACTORY.jpg';
import korara from '../pictures/KORARA HIGHLANDS TEA FACTORY.jpg';
import maramba from '../pictures/MARAMBA TEA FACTORY.jpg';
import mata from '../pictures/MATA TEA COMPANY LTD.jpg';
import mogeni from '../pictures/MOGENI TEA FACTORY.jpg';
import kivu from '../pictures/muganza-kivu tea factory.jpg';
import mulindi from '../pictures/MULINDI FACTORY COMPANY LTD.jpg';
import otb from '../pictures/OTB.jpg';
import  shagasha from '../pictures/SHAGASHA TEA FACTORY.jpg';
import sorwathe from '../pictures/SORWATHE TEA FACTORY.jpg';
import './Garden.css';

const factories = [
  { image: koisagat, title: 'DL-Koisagat Tea Estate Ltd,Kenya' },
  {image: kivu, title: 'Muganza-Kivu Tea Factory'},
            {image: pfunda, title: 'Pfunda Tea Company, Rwanda'}, 
             {image: kisaru, title:'Kisaru Tea Factory, Uganda'},
            {image: mulindii, title: 'Mulindi Tea Factory, Rwanda'},  
       {image: mulindi, title: 'Mulindi Factory Company Ltd'},
         {image: korara, title: 'Korara Highlands Tea Factory'},   
  {image: maramba, title: 'Maramba Tea Factory'},
   {image: sorwathe, title: 'Sorwathe Tea Factory'},
     {image: kkisaru, title: 'Kisaru Tea Estate'},    
      
      {image: mogeni, title: 'Mogeni Tea Factory'},
        {image: kipkebe, title: 'Kipkebe Tea Ltd'},
          {image: mbogo, title: 'Mbogo Valley Tea Factory, Kenya'},
           {image:gisakura, title: 'Gisakura Tea Factory'},
  
  
  // new
 
     
   
       {image: shagasha, title: 'Shagasha Tea Factory' },
            {image: mata, title: 'Mata Tea Company Ltd'},
            { image: gatare, title: 'Gatare Tea Company Ltd, Rwanda' },
        {image: kitumbe, title: 'Kitumbe Tea Factory'},
         {image: emrok, title: 'Emrok Tea Factory (EPZ)'}, 
         {image: otb, title: 'OTB'},
    

    
]

export default function Factories() {
useEffect(() => {
    const preventRightClick = (e) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', preventRightClick);

    return () => {
      document.removeEventListener('contextmenu', preventRightClick);
    };
  }, []);
  return (
    <div className="factories">
      <div className="f">
      <ul className="grid">
        {factories.map((factories, index) => (
          <li key={index}>
            <img src={factories.image}
             alt={factories.title}
             title={factories.title}
             loading="lazy" />
             <p>{factories.title}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}