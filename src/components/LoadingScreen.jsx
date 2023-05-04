import React from 'react';
import "../styles/loadingScreen.css"

const LoadingScreen = () => {
    return (
        <div className='conteiner'>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default LoadingScreen;