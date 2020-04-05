import fs from "fs";
import shell from "shelljs";
import path from "path";

import {
  HOME_DIRECTORY,
  REPO_DOT_FILE_DIR,
  BACKUP_DOT_FILE_DIR,
  GIT_REPO,
  INCLUDE_LIST,
} from "./constants";

export const cloneDotfileRepo = () => {
  const exists = fs.existsSync(REPO_DOT_FILE_DIR);
  if (!exists) {
    shell.exec(`git clone ${GIT_REPO} ${REPO_DOT_FILE_DIR}`);
  }
  shell.cd(REPO_DOT_FILE_DIR);
  shell.exec("git pull");
};

export const isDotFile = (filePath) => {
  const isFile = fs.lstatSync(filePath).isFile();
  const fileName = path.basename(filePath);
  const isIncluded = INCLUDE_LIST.indexOf(fileName) > -1;
  return isFile && isIncluded;
};

export const findDotFiles = () =>
  fs
    .readdirSync(HOME_DIRECTORY)
    .filter((file) => isDotFile(path.join(HOME_DIRECTORY, file)));

export const downloadedDotFiles = () =>
  fs
    .readdirSync(BACKUP_DOT_FILE_DIR)
    .filter((file) => isDotFile(path.join(BACKUP_DOT_FILE_DIR, file)));
