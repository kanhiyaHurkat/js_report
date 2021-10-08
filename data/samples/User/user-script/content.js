const http = require("http");

function fetchUser() {
  return new Promise((resolve, reject) => {
    http.get('http://localhost:3000/registration/get_user',
      (result) => {
        var str = '';
        result.on('data', (b) => str += b);
        result.on('error', reject);
        result.on('end', () => resolve(JSON.parse(str).data));
      }
    );
  })
}

async function prepareDataSource() {

  const fetchData = await fetchUser()
  return JSON.parse(fetchData.toString())
}

async function beforeRender(req, res) {
  req.data.users = await prepareDataSource()
}
