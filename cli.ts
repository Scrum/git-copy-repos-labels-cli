#!/usr/bin/env node

import meow = require('meow');
import gitCopyReposLabels from 'git-copy-repos-labels';

const cli = meow(`
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
`, {
  flags: {
    from: {
      type: 'string'
    },
    to: {
      type: 'string'
    },
    token: {
      type: 'string'
    },
    strategy: {
      type: 'string'
    },
    version: {
      type: 'boolean',
      alias: 'v'
    },
    help: {
      type: 'boolean',
      alias: 'h'
    }
  }
});

const [fromOwner, fromRepo] = cli.flags.from.split('/');
const [toOwner, toRepo] = cli.flags.to.split('/');

gitCopyReposLabels({
  from: {
    owner: fromOwner,
    repo: fromRepo
  },
  to: {
    owner: toOwner,
    repo: toRepo
  },
  token: cli.flags.token,
  strategy: cli.flags.strategy
});