# git-copy-repos-labels-cli
> CLI for git-copy-repos-labels 

[![Travis Build Status](https://img.shields.io/travis/Scrum/git-copy-repos-labels-cli/master.svg?style=flat-square&label=unix)](https://travis-ci.org/Scrum/git-copy-repos-labels-cli)[![Coveralls status](https://img.shields.io/coveralls/Scrum/git-copy-repos-labels-cli.svg?style=flat-square)](https://coveralls.io/r/Scrum/git-copy-repos-labels-cli)

## Install
```bash
npm install -g git-copy-repos-labels-cli
```

## Usage  
```bash
$ git-copy-repos-labels --help

  Usage: 
    $ git-copy-repos-labels <options>

  Options:
    --from        Github repository from copy labels.
    --to          Github repository to copy labels.
    --token       You  Github Personal Token. Grab it from your [Developer settings](https://github.com/settings/developers)
    --strategy    Behavior strategy for merging, deleting or updating labels [docs](https://github.com/Scrum/git-copy-repos-labels#strategy)
    --help -h      CLI Help
    --version -v   CLI Version

  Examples:
    $ git-copy-repos-labels --from scrum/git-template-labels --to post/post-static --token 59bd8d5eb1980b7f926f2d106f4f2f0312fdf97f
```

## Related
- [git-copy-repos-labels](https://github.com/Scrum/git-copy-repos-labels) - A iny helper to copy a list of labels from the github repository
