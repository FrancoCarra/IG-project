import React from 'react'
import '../index.css'
import { ArrayIcons } from '../assets/icons/Icons'

export const SideBar = () => {
    
    return (
        <div className='sidebar'>
          {/* Itera sobre los componentes SVG */}
          {ArrayIcons.map((SvgComponent, index) => (
            <div key={index} className='icons'>
              {/* Renderiza el componente SVG */}
              <button className='iconbutton'>
              <SvgComponent />
              </button>
            </div>
          ))}
        </div>
      );
    }