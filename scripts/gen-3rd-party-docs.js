#!/usr/bin/env node

const { curryN, __, compose, objOf, keys } = require('ramda');
const fs = require('fs-extra');
const path = require('path');
const Handlebars = require('handlebars');

const losantR = require('../src/ramda');
const losant_ = require('../src/lodash');

const readFileSync = curryN(2, fs.readFileSync)(__, 'utf8');
const writeFile = curryN(2, fs.writeFileSync);
const resolve = curryN(2, path.resolve)(__dirname);
const compileFile = compose(Handlebars.compile, readFileSync, resolve);

const renderRamda = compose(compileFile('ramda.hbs'), objOf('names'));
const writeRamda = compose(writeFile, resolve)('../src/ramda/index-docs.js');
const generateRamda = () => compose(writeRamda, renderRamda, keys)(losantR);

// TODO: Use the following Gist (or some other FP docs) instead of normal lodash docs
//       https://gist.github.com/jfmengels/6b973b69c491375117dc
const renderLodash = compose(compileFile('lodash.hbs'), objOf('names'));
const writeLodash = compose(writeFile, resolve)('../src/lodash/index-docs.js');
const generateLodash = () => compose(writeLodash, renderLodash, keys)(losant_);

generateRamda();
generateLodash();
