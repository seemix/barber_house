import { About, Contacts, Faq, Footer, Offers, Services } from '../index.js';

const ModalProvider = ({ showModal }) => {
    return (
        <>
            {!showModal && <>
                <Services/>
                <Contacts/>
                <About/>
                <Offers/>
                <Faq/>
                <Footer/>
            </>}
        </>
    );
};

export default ModalProvider;