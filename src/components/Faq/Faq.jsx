import { SectionCaption } from '../index.js';
import './Faq.css';

const Faq = () => {
    return (
        <section id={'faq'}>
            <SectionCaption caption={'FAQ'}/>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className={'c'}>
                        <input type="checkbox" id="faq-1"/>
                        <h3><label htmlFor="faq-1">What Is This ?</label></h3>
                        <div className="p">
                            <p>This a very very simple accordion.</p>
                        </div>
                    </div>
                    <div className="c">
                        <input type="checkbox" id="faq-2"/>
                        <h3><label htmlFor="faq-2">With Pure Css ?</label></h3>
                        <div className="p">
                            <p>Yes with pure CSS and HTML.</p>
                        </div>
                    </div>
                    <div className="c">
                        <input type="checkbox" id="faq-3"/>
                        <h3><label htmlFor="faq-3">Where did you get inpiration ?</label></h3>
                        <div className="p">
                            <p>I was inpired by an article on css-tricks. <a
                                href="https://css-tricks.com/the-checkbox-hack/">link
                                to article</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Faq;