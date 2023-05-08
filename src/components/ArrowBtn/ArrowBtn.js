import React from 'react'
import './ArrowBtn.scss';
import { Link } from 'react-scroll';
import { BiRightArrow } from 'react-icons/bi'
const ArrowBtn = ({ content, background, color, border, arrowColor }) => {
    return (
        <Link to="contactUs" spy={true} smooth={true} offset={0} duration={800}>
            <button className='arrowBtn__container' style={{ border: `2px solid ${border}`, backgroundColor: `${background}`, color: `${color}` }}>
                {content}
                <BiRightArrow
                    className="arrowBtn__container--icon"
                    style={{ color: `${arrowColor}` }}
                />
            </button>
        </Link>
    )
}

export default ArrowBtn