import { Logos } from '../assets/icons/Icons'

export const LogosContainer = () => {
  return (
    <div>
      {Logos.map((logo, index) => (
        <div key={index} className='icons'>
            <button className='iconbutton'>
          <logo.component/>
          <p className='name-icons'>{logo.title}</p>
          </button>
        </div>
      ))}
    </div>
  );
};