import data from '../data.js';
import dom from '../dom.js';

import createImage from '../components/createImages.js';

const loadHandler = () => {
    
    data.images.forEach((image) => {
        const imageBox = createImage(image);
        dom.images.append(imageBox);
    });
};

export default loadHandler;
