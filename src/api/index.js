 
import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

// async function.
export const fetchData = async () => {

    try {
        
        // Destructure the response and just
        // get all the necessary info.
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

        // Shortcut for confirmed: confirmed, recovered: recovered, etc.
        // When object key and value has the same name, you can do this.
        return { confirmed, recovered, deaths, lastUpdate };

    } catch (error) {
        
    }

}