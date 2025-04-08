import { Barbers, Contacts, Faq, Footer, Offers, Services } from '../index.js';

const ModalProvider = ({ showModal }) => {
    return (
        <>
            {!showModal && <>
                <Services/>
                <Contacts/>
                <Barbers/>
                <Offers/>
                <Faq/>
                <Footer/>
            </>}
        </>
    );
};

export default ModalProvider;