import { gql } from '@apollo/client';

export const ALL_SLIDES = gql`query NewQuery {
    slides {
        nodes {
            featuredImage {
                node {
                    mediaItemUrl
                }
            }
        }
    }
}`;

export const slideMapper = (data) => {
    return data.slides.nodes.map(slide => {
        return slide.featuredImage.node.mediaItemUrl
    })
};