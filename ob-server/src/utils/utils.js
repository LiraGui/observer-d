const http = require('http');
function httpRequest(httpOptions, body = '') {
    return new Promise(function (resolve, reject) {
      const request = http.request(httpOptions, function (response) {
        let data = '';
  
        response.on('data', function (cbresponse) {
          data += cbresponse;
        });
  
        response.on('end', () => {
          try {
            let response;
            if (data instanceof Object) {
              response = JSON.parse(data);
            } else {
              response = data;
            }
            resolve(response)
          } catch (err) {
            console.log('ERR ====>  ', err);
            reject(err);
          }
        });
      });
      if (body instanceof Object) {
        body = JSON.stringify(body);
      }
  
      request.write(body);
      request.end();
  });
}

module.exports = {
  httpRequest
};