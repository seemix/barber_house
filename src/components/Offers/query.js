import { gql } from '@apollo/client';

export const OFFERS = (language = 'EN') => {
   let categoryId = 12;
    if (language === 'DK') {
        categoryId = 15;
    }
    return gql`
        query NewQuery {
            posts(where: { categoryId: ${categoryId}}) {
                nodes {
                    id
                    title
                    content
                }
            }
        }`
}

export const offersMapper = (data) => {
    return data.posts.nodes.map(({id, title, content}) => {
        return {id, title, content};
    })
};