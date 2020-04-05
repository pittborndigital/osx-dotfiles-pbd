import path from "path";
import config from "../dotconfig.json";

export const HOME_DIRECTORY = `${process.env.HOME}`;

export const REPO_DOT_FILE_DIR = path.join(
  __dirname,
  "..",
  config["repo-folder"]
);

export const BACKUP_DOT_FILE_DIR = path.join(
  __dirname,
  "..",
  config["backup-folder"]
);

export const GIT_REPO = config["git-repo"];
export const INCLUDE_LIST = config["include"];
