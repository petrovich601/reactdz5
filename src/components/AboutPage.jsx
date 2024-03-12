import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
    return (
        <div className='App'>
            <h1>О наc</h1>
            <Link to="/">Главная страница</Link>
        </div>
    );
}

export default AboutPage;