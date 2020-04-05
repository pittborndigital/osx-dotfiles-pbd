# Dotfile Management

1. Clone the repo

```
git clone git@github.com:pittborndigital/osx-dotfiles-pbd.git
cd osx-dotfiles-pbd
```

2. Install dependencies

```
npm install
```

3. Set configuration

Edit dotfile.json and put your settings in.

| Option   | Required | Description                              | Example                                         |
| -------- | -------- | ---------------------------------------- | ----------------------------------------------- |
| include  | Yes      | Array of dotfile names to sync.          | [".zshrc", ".bashrc", ".gitconfig"]             |
| git-repo | Yes      | Git URL where dotfiles should be stored. | git@github.com:pittborndigital/pbd-dotfiles.git |

## Backup snapshot of dotfiles

```
npm run push
```

## Set dotfiles from backup

```
npm run pull
```
