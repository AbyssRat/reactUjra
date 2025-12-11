import axios from "axios";
const LoadData = async ({adatok, setAdatok}) => {
    const url = 'https://retoolapi.dev/hUctvr/dolgozok';

    try {
        const response = await axios.get(url);
        setAdatok(response.data);
        console.log('adatok jok', response.data)
        
    } catch (error) {
        console.error(error.message);
        
        
    }


}

export default LoadData;