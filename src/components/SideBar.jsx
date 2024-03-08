import React from 'react'
import '../index.css'
import { ArrayIcons } from '../assets/icons/Icons'

export const SideBar = () => {
    
    return (
        <div className='sidebar'>
          {/* Itera sobre los componentes SVG */}
          {ArrayIcons.map((SvgComponent, index) => (
            <div key={index}>
              {/* Renderiza el componente SVG */}
              <SvgComponent />
            </div>
          ))}
        </div>
      );
    }