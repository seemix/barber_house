import { useState } from 'react';

import { ArrowUp, Header, Modal, ModalProvider, Slider } from './components/index.js';
import './App.css'

function App() {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className={'wrapper'}>
            <Modal showModal={showModal} setShowModal={setShowModal}/>
            <Header/>
            <Slider showModal={showModal}/>
            <div className={'main_wrapper'}>
                <ModalProvider showModal={showModal}/>
            </div>
            <ArrowUp/>
        </div>
    )
}

export default App
