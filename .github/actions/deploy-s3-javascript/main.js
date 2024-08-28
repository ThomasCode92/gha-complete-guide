const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
  // get input values

  core.notice('Hello form a custom JavaScript action!');
}

run();
