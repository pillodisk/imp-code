const axios = require('axios');
const fileUrl = 'Add Any url';
const fileSizeInBytes = 10 * 1024 * 1024; // 10MB

const startTimestamp = Date.now();

axios({
  url: fileUrl,
  method: 'GET',
  responseType: 'blob'
})
  .then(response => {
    const downloadTimeInSeconds = (Date.now() - startTimestamp) / 1000;
    const downloadSpeedInMbps = (fileSizeInBytes * 8) / (downloadTimeInSeconds * 1024 * 1024);
    console.log("Download speed is", downloadSpeedInMbps.toFixed(2), "Mbps");
  })
  .catch(error => {
    console.error("Error occurred during speed test:", error);
  });
