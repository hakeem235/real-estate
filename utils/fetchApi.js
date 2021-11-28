import axios from "axios"


export  const baseUrl = 'https://bayut.p.rapidapi.com'




export const fetchApi = async (url) => {
    const  { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'be5a05862fmsh9a271b86e8c6fc3p1ca9c8jsn700c3e0d4506'
          }
    });

    return data;
}