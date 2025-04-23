import React from 'react';
import '../ComingSoon/ComingSoonStyle.css'; 



const ComingSoon = () => {
    return (
        <section id="coming-soon">
            <div className='main-part'>
            <div className='side-menu-bar'>
            <h1>MENU</h1>
              <ul className='side-menu-list'>
                <li className='side-menu-item'><a href="/when-and-where" className="btn"> WHEN to go </a></li>
                <li className='side-menu-item'><a href="/insurance-general" className="btn">Insurance General</a></li>
                <li className='side-menu-item'><a href="/earlham-insurance" className="btn"> Earlham Insurance</a></li>
                <li className='side-menu-item side-menu-item-last'><a href="/coming-soon" className="btn">Tell Us What You Want To Learn!!</a></li>
              </ul>
          </div>

          <div className='coming-soon-message'>
            <h1>Coming Soon!!</h1>
          </div>

          </div>

    </section>
  );
};

export default ComingSoon;