/* eslint-disable no-console */
/*
 * This module reads in the config file JSON schema and outputs a TypeScript declaration file (`.d.ts`).
 * The JSON schema file is output by the `scripts/generate-schema-json.js` script from the monorepo root,
 * and generated from a `.js` file in the `armor` package.
 */

const {compileFromFile} = require('json-schema-to-typescript');
const path = require('path');
const {promises: fs} = require('fs');
const {info, success, error} = require('log-symbols');

/**
 * Path to `@armor/types` package root
 */
const TYPES_ROOT = path.join(__dirname, '..');

/**
 * Path to `@armor/schema` package root
 */
const SCHEMA_ROOT = path.join(TYPES_ROOT, 'lib', 'schema');

/**
 * Path to JSON schema.
 *
 * Generated by `./generate-schema-json.js`, which should be run first.
 */
const JSON_SCHEMA_PATH = path.join(SCHEMA_ROOT, 'armor-config.schema.json');

/**
 * Path to generated file.
 *
 * This is a `.ts` file, _not_ a `.d.ts`; this is so it will be output as a `.d.ts` into `build` by `tsc`.
 */
const OUTPUT_PATH = path.join(TYPES_ROOT, 'lib', 'armor-config.ts');

async function main() {
  try {
    let ts;
    try {
      ts = await compileFromFile(JSON_SCHEMA_PATH);
    } catch (err) {
      throw new Error(
        `${error} Could not convert Armor schema JSON to TypeScript: ${err.message}. Does it exist?`
      );
    }
    try {
      await fs.writeFile(OUTPUT_PATH, ts);
    } catch (err) {
      throw new Error(`${error} Could not write Armor schema declaration file: ${err.message}`);
    }
    console.log(`${info} Wrote %s`, OUTPUT_PATH);
    console.log(`${success} Done.`);
  } catch (err) {
    console.error(err.message);
    process.exitCode = 1;
  }
}

main();