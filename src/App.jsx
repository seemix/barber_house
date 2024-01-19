import { useState } from 'react';

import { Header, Modal, ModalProvider, Slider } from './components/index.js';
import './App.css'

function App() {
    const [showModal, setShowModal] = useState(true);
    return (
        <div className={'wrapper'}>
            <Modal showModal={showModal} setShowModal={setShowModal}/>
            <Header/>
            <Slider showModal={showModal}/>
            <div className={'main_wrapper'}>
                <ModalProvider showModal={showModal}/>
            </div>
        </div>
    )
}

export default App
