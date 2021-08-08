class Handshake {
    static send(request) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(request.method || "GET", request.url);
            // console.log('req', xhr);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.responseText);
                    } else {
                        reject({ "Request Failed": xhr.statusText });
                    }
                }
            };
            if (request.method === 'POST') {
                xhr.send(request.data);
            } else {
                xhr.send();
            }
        });
    }
}