import { useState } from 'react';

import { Header, Modal, Slider } from './components/index.js';
import './App.css'

function App() {
    const [showModal, setShowModal] = useState(true);
    return (
        <div className={'wrapper'}>
            <Modal showModal={showModal} setShowModal={setShowModal}/>
            <Header/>
            <Slider showModal={showModal}/>
        </div>
    )
}

export default App
