// simple XML request that returns a promise
// accepts a request object
/*
  const request = {
                url: url, // url to get
                method: type, // POST, GET, etc.  defaults to GET
                data: data // stringified data object (optional)
            }
 */

// use
/*
const response = await Handshake.send(request);
 or
Handshake.send(request).then(response => {
    ...do stuff
})
*/


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
            if (request.data) {
                xhr.send(request.data);
            } else {
                xhr.send();
            }
        });
    }
}
