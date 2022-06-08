import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter,  faLinkedin, faGithub, faInstagram} from "@fortawesome/free-brands-svg-icons";
import React from 'react'
import { faEnvelope, faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Footer() {



  return (
    <div className='flex  items-center justify-around p-2 mobile:flex-col mobile:items-start'>
        <div className='flex-1 flex flex-col flex-wrap p-2'>
            {/* Store Information */}
            <h1 className="underline">
               <NavLink to="/">STORE</NavLink>
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br/> Inventore repellendus praesentium maiores culpa pariatur? <br/>Nisi distinctio adipisci aperiam ut itaque maiores delectus,<br/> deserunt voluptatum vitae! Commodi, dolor. <br/>Temporibus, ad doloribus!</p>
            <div className='flex item-center justify-center mt-3 self-start'>
                <div>
                    <FontAwesomeIcon icon= {faLinkedin} className='m-3 rounded-full cursor-pointer p-2 text-white bg-blue-900'/>
                 </div>
                <div>
                    <FontAwesomeIcon icon= {faGithub}  className='m-3 rounded-full cursor-pointer p-2 text-white bg-black'/>
                </div>
                <div>
                    <FontAwesomeIcon icon= {faTwitter} className='m-3 rounded-full cursor-pointer p-2 text-white bg-blue-300'/>
                </div>
                <div>
                    <FontAwesomeIcon icon= {faInstagram} className='m-3 rounded-full cursor-pointer p-2 text-white bg-orange-600'/>
                </div>
            </div>
        </div>
        <div className='flex-1 flex flex-col p-2'>
            <div className='flex m-3'>
                <FontAwesomeIcon icon={faMapMarker}/>
                <p className='pl-3'>Lagos State</p>
            </div>
            <div className='flex m-3'>
                <FontAwesomeIcon icon={faPhone}/>
                <p className='pl-3'>+234 9024 4209 29</p>
            </div>
            <div className='flex m-3'>
                <FontAwesomeIcon icon={faEnvelope}/>
                <p className='pl-3'>ogunniyi.julius12@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default Footer;