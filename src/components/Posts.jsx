// InstagramCard.js
import { CardsIcons } from '../assets/icons/Icons';


// Definimos nuestro componente de tarjeta de Instagram
const InstagramCard = () => {
  return (
    <section className="card">
      <section className='card-section'>
        <div className='card-profile'>
          <img src='https://th.bing.com/th/id/OIP.rinXMOyJ-11hOzOBB73OzgAAAA?rs=1&pid=ImgDetMain' 
          className='card-photo-profile' alt="perfil" />
          <h3 className="username">Carrafrann</h3>
        </div>
        <img src='https://th.bing.com/th/id/OIP.rinXMOyJ-11hOzOBB73OzgAAAA?rs=1&pid=ImgDetMain' alt="Instagram" className="card-image" />
        <div className="card-content">  
                {CardsIcons.map((SvgComponent, index) => (
                <div key={index} className=''>
                <button className='card-buttons'>
                <SvgComponent />
                </button>
              </div>
            ))}
        </div>
        <section className='caption-container'>
          <p className="caption">
                  199,7 Likes
          </p>
          <h5 className='caption-username'>Carrafrann</h5>
          <form>
            Add a comment...
          </form>
          </section>
      </section>
    </section>
  );
};

export default InstagramCard;