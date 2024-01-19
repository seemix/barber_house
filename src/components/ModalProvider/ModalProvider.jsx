import { Contacts, Footer, Services } from '../index.js';

const ModalProvider = ({ showModal }) => {
    return (
        <div>
            {!showModal && <>
                <Services/>
                <Contacts/>
                <Footer/>
            </>}
        </div>
    );
};

export default ModalProvider;