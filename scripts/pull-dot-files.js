import fs from "fs";
import path from "path";
import shell from "shelljs";

import { cloneDotfileRepo, findDotFiles, downloadedDotFiles } from "./common";
import {
  HOME_DIRECTORY,
  BACKUP_DOT_FILE_DIR,
  REPO_DOT_FILE_DIR,
} from "./constants";

const pullDotFiles = async () => {
  console.log("**** Cloning Dotfile Repo ****");
  cloneDotfileRepo();

  shell.exec(`mkdir -p ${BACKUP_DOT_FILE_DIR}`);

  findDotFiles().forEach((file) => {
    console.log(
      `Backing up existing ${file} to ${BACKUP_DOT_FILE_DIR}/${file}`
    );
    fs.copyFileSync(
      path.join(HOME_DIRECTORY, file),
      path.join(BACKUP_DOT_FILE_DIR, file)
    );
  });

  downloadedDotFiles().forEach((file) => {
    console.log(`Writing downloaded ${file} to ${HOME_DIRECTORY}`);
    const dotFile = path.join(HOME_DIRECTORY, file);
    fs.unlinkSync(dotFile);
    fs.copyFileSync(path.join(REPO_DOT_FILE_DIR, file), dotFile);
  });

  console.log("**** Done ****");
};

pullDotFiles();
