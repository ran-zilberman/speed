#!/usr/bin/env node
const { init, run } = require('../dist/index.js');

const commandLine = init();
run(commandLine);