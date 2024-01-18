import { Services } from '../index.js';

const ModalProvider = ({ showModal }) => {
    return (
        <>
            {!showModal && <>
                <Services/>
            </>}
        </>
    );
};

export default ModalProvider;