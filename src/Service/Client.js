import axios from 'axios';

class Client {
    post(url, data) {
        return axios.post(this.prepareUrl(url), data)
    }

    prepareUrl(path) {
        let url = process.env.REACT_APP_URL;
        url += path;
        return url;
    }
}

export default Client;
