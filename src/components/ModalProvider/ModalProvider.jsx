import { About, Contacts, Faq, Footer, Offers, Services } from '../index.js';

const ModalProvider = ({ showModal }) => {
    return (
        <>
            {!showModal && <>
                <Services/>
                <Offers/>
                <Contacts/>
                <About/>
                <Faq/>
                <Footer/>
            </>}
        </>
    );
};

export default ModalProvider;