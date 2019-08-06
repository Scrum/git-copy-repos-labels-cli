#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var meow = require("meow");
var git_copy_repos_labels_1 = __importDefault(require("git-copy-repos-labels"));
var cli = meow("\n$ git-copy-repos-labels --help\n\n  Usage: \n    $ git-copy-repos-labels <options>\n\n  Options:\n    --from        Github repository from copy labels.\n    --to          Github repository to copy labels.\n    --token       You  Github Personal Token. Grab it from your [Developer settings](https://github.com/settings/developers)\n    --strategy    Behavior strategy for merging, deleting or updating labels [docs](https://github.com/Scrum/git-copy-repos-labels#strategy)\n    --help -h      CLI Help\n    --version -v   CLI Version\n\n  Examples:\n    $ git-copy-repos-labels --from scrum/git-template-labels --to post/post-static --token 59bd8d5eb1980b7f926f2d106f4f2f0312fdf97f\n", {
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
var _a = cli.flags.from.split('/'), fromOwner = _a[0], fromRepo = _a[1];
var _b = cli.flags.to.split('/'), toOwner = _b[0], toRepo = _b[1];
git_copy_repos_labels_1["default"]({
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
