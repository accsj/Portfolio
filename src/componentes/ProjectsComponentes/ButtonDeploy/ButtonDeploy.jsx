import '../ButtonDeploy/ButtonDeploy.css';
import React from 'react';

function ButtonDeploy ({link}) {

    return (
        <div className="deploy_link_container">
            <p className='or'>ou</p>
            <p className="deploy_link">Acesse o <a href={link} target="__blank" rel="noopener noreferrer" className="btn_deploy">deploy</a></p>
        </div>
    )
}

export default ButtonDeploy;