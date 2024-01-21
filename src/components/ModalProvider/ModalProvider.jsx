import { Barbers, Contacts, Footer, Services } from '../index.js';

const ModalProvider = ({ showModal }) => {
    return (
        <div>
            {!showModal && <>
                <Services/>
                <Barbers/>
                <Contacts/>
                <Footer/>
            </>}
        </div>
    );
};

export default ModalProvider;