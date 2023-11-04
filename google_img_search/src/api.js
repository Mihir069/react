import axios from 'axios';

const searchImages = async(term) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID sBDMAJs4AL1tP-iCHFiq2GfDR5RD0on0INSEelmPasY'
        },
        params:{
            query:term,
        }
    });

    console.log(response);
    return response;
};

export default searchImages;
