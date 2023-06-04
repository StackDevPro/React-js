import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID GC3M6Iuzeh4X5ZPk9RM2DjYfRy5rAnViwmzRdNbtnpc',
        },
        params : {
            query: term,
        },
    });

    
    return response.data.results;
};

export default searchImages;