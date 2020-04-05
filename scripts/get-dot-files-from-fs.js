import fs from "fs";
import path from "path";

const HOME_DIRECTORY = `${process.env.HOME}`;
const COPIED_DOT_FILE_DIR = path.join(__dirname, "../dotfiles");
const EXCLUDE_LIST = [
  ".CFUserTextEncoding",
  ".DS_Store",
  ".bash_history",
  ".zsh_history",
];

const isDotFile = (file) => {
  const filePath = path.join(HOME_DIRECTORY, file);
  const isFile = fs.lstatSync(filePath).isFile();
  const isExcluded = EXCLUDE_LIST.indexOf(file) > -1;
  const beginsWithDot = file.indexOf(".") === 0;
  const hasOldSuffix = file.indexOf(".old") > 0;
  return isFile && !isExcluded && beginsWithDot && !hasOldSuffix;
};

const findDotFiles = () => fs.readdirSync(HOME_DIRECTORY).filter(isDotFile);

const getDotFiles = async () => {
  const dotFiles = findDotFiles();
  console.log(dotFiles);
  dotFiles.forEach((file) => {
    console.log(`Copying ${file} to ${COPIED_DOT_FILE_DIR}`);
    fs.copyFileSync(
      path.join(HOME_DIRECTORY, file),
      path.join(COPIED_DOT_FILE_DIR, file)
    );
  });
};

getDotFiles();
