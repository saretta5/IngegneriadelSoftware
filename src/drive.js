import { google } from "googleapis";

const { google } = require("googleapis");
const path = require("path");
const fs = require("fs");

const CLIENT_ID =
  "1003878043045-d7pppdfbi794cmfijdflicm66k04frf7.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground/";

const REFRESH_TOKEN = "";

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
  version: "v3",
  auth: oauth2Client
});

const filepath = path.join(__dirname, "scheda.js");

async function uploadFile() {
  try {
    const response = await drive.files.create({
      requestBody: {
        name: "scheda.json",
        mineType: "json"
      },
      media: {
        mimeType: "json",
        body: fs.createReadStream(filePath)
      }
    });

    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
}

uploadFile();
