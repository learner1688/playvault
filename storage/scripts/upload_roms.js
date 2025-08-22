// Script to upload ROMs/ISOs to Cloudflare R2
// Usage: node upload_roms.js <file>
const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');

const r2 = new AWS.S3({
  endpoint: process.env.R2_ENDPOINT,
  accessKeyId: process.env.R2_KEY,
  secretAccessKey: process.env.R2_SECRET,
  region: 'auto',
  signatureVersion: 'v4',
});

const file = process.argv[2];
if (!file) throw new Error('No file specified');

const uploadParams = {
  Bucket: process.env.R2_BUCKET,
  Key: path.basename(file),
  Body: fs.createReadStream(file),
};
r2.upload(uploadParams, (err, data) => {
  if (err) throw err;
  console.log('Uploaded:', data.Location);
});
