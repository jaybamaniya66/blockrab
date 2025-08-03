import * as ftp from "basic-ftp";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const client = new ftp.Client();
client.ftp.verbose = true;

async function deploy() {
  try {
    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      secure: false // set to true if using FTPS
    });

    console.log("Connected to Hostinger");

    const localPath = "dist"; // or "build" or wherever your files are
    const remotePath = process.env.FTP_REMOTE_DIR;

    await client.ensureDir(remotePath);
    await client.clearWorkingDir(); // optional: wipe existing files
    await client.uploadFromDir(localPath);
    console.log("Deployment complete 🚀");
  } catch (err) {
    console.error("Deployment failed ❌", err);
  }
  client.close();
}

deploy();
