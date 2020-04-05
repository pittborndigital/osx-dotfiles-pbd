import fs from "fs";
import path from "path";
import shell from "shelljs";

import { HOME_DIRECTORY, REPO_DOT_FILE_DIR } from "./constants";
import { cloneDotfileRepo, findDotFiles } from "./common";

const pushChangesToDotfileRepo = () => {
  shell.cd(REPO_DOT_FILE_DIR);
  shell.exec("git add .");
  shell.exec('git commit -m "Dotfiles"');
  shell.exec("git push");
};

const pushDotFiles = async () => {
  console.log("**** Cloning Dotfile Repo ****");
  cloneDotfileRepo();
  findDotFiles().forEach((file) => {
    console.log(`Copying ${file} to ${REPO_DOT_FILE_DIR}`);
    fs.copyFileSync(
      path.join(HOME_DIRECTORY, file),
      path.join(REPO_DOT_FILE_DIR, file)
    );
  });
  console.log("**** Pushing Changes ****");
  pushChangesToDotfileRepo();
  console.log("**** Done ****");
};

pushDotFiles();
