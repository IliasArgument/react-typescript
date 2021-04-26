import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return <div>
        <h1>Страница Информации</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum doloremque quos molestiae ad omnis? Modi, optio. Atque architecto suscipit, repudiandae enim quia nostrum! Est quos, labore odit itaque dolores tenetur.</p>
        <button className="btn" onClick={() => history.goBack()}>Обратно к списку дел</button>
    </div>
}