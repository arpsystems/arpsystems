#!/usr/bin/env node

"use strict";

process.chdir(__dirname);

// Perform node version check before loading any other files or modules
// Doing this check as soon as possible allows us to
// avoid ES6 parser errors or other issues
const pkg = require("./package.json");

if (!require("semver").satisfies(process.version, pkg.engines.node)) {
	/* eslint-disable no-console */
	console.error("aRp Systems requires Node.js " + pkg.engines.node + " (current version: " + process.version + ")");
	console.error("Please upgrade Node.js in order to use aRp Systems");
	console.error("See https://www.arp.systems");
	console.error();

	process.exit(1);
}

require("./src/command-line");
