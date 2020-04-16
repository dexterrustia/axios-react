import axios from 'axios';

class AppService { 
    constructor() { }

    createPost()

    getAllPost() { 
        return axios.get(`http://localhost:3200/post`);

    }

}

export default AppService