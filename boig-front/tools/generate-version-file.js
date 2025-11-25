console.log("generate version file");

const { writeFile } = require("fs");

const path = require("path");

const packageJson = require(`${process.cwd()}/package.json`);

const newFilePath = path.join(process.cwd(), "public", "version.json");

const appVersion = packageJson.version;

const jsonData = {
  version: appVersion,
};

const jsonContent = JSON.stringify(jsonData);

writeFile(newFilePath, jsonContent, "utf-8", function (error) {
  if (error) {
    console.error(error);
    throw new Error(error);
  } else {
    console.log("version file saved with v", appVersion);
  }
});
