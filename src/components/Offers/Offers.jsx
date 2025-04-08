import { SectionCaption } from '../index.js';
import css from './Offers.module.css';

const Offers = () => {
    return (
        <section id={'specialOffers'}>
            <SectionCaption caption={'Special Offers'}/>
            <div className={'content_wrapper'}>
                <div className={'card ' + css.offers_card}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut commodi ducimus, excepturi id
                    provident quos vero voluptates. A, ad alias, aliquid corporis enim error eum eveniet ex
                    exercitationem
                    expedita impedit in incidunt inventore itaque maiores non, officiis quaerat reiciendis sapiente sit
                    totam veniam voluptatem! Eveniet iure nam nisi quis!
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut commodi ducimus, excepturi id
                        provident quos vero voluptates. A, ad alias, aliquid corporis enim error eum eveniet ex
                        exercitationem
                        expedita impedit in incidunt inventore itaque maiores non, officiis quaerat reiciendis sapiente sit
                        totam veniam voluptatem! Eveniet iure nam nisi quis!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut commodi ducimus, excepturi id
                        provident quos vero voluptates. A, ad alias, aliquid corporis enim error eum eveniet ex
                        exercitationem
                        expedita impedit in incidunt inventore itaque maiores non, officiis quaerat reiciendis sapiente sit
                        totam veniam voluptatem! Eveniet iure nam nisi quis!
                    </p>
                </div>
            </div>

        </section>
    );
};

export default Offers;