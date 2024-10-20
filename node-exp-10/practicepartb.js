const http = require("http");
const fs = require("fs");

var server = http.createServer();
server.on("request", (req, res) => {
  const fstream = fs.createReadStream("test.txt");
  fstream.on("data", (allData) => {
    res.write(allData.toString());
  });
  fstream.on("end", () => {
    res.end();
  });
});

server.listen(3001, () => {
  console.log("Server running on port 3001!");
});
