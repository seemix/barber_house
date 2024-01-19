import { Services } from '../index.js';

const ModalProvider = ({ showModal }) => {
    return (
        <div>
            {!showModal && <>
                <Services/>
            </>}
        </div>
    );
};

export default ModalProvider;