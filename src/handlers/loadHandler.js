import data from '../data.js';
import dom from '../dom.js';

import createImage from '../components/createImages.js';

const loadHandler = () => {
    
    data.images.forEach((image) => {
        const imageBox = createImage(image);
        dom.images.append(imageBox);

        // save images

        data.posters.push({
            id: image.id,
            dom: imageBox,
            title: image.title,
        })
    });
};

export default loadHandler;
