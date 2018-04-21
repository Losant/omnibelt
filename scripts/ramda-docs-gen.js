#!/usr/bin/env node

const { curryN, __, compose, objOf, keys } = require('ramda');
const fs = require('fs-extra');
const path = require('path');
const Handlebars = require('handlebars');
const losantR = require('../src/ramda');

const { log } = console;
const readFileSync = curryN(2, fs.readFileSync)(__, 'utf8');
const writeFile = curryN(2, fs.writeFileSync);
const resolve = curryN(2, path.resolve)(__dirname);
const compileFile = compose(Handlebars.compile, readFileSync, resolve);

const renderRamda = compose(compileFile('ramda.hbs'), objOf('names'));
const writeRamda = compose(writeFile, resolve)('../src/ramda/index-docs.js');
const generateRamda = () => compose(writeRamda, renderRamda, keys)(losantR);
