import assert from 'node:assert/strict';
import { test } from 'node:test';

import { DEFAULT_KEEP_VERSIONS, hasFlag, readKeep, readOption, selectStaleVersions } from './versions.mjs';

const V1 = '20260101000000/';
const V2 = '20260102000000/';
const V3 = '20260103000000/';
const V4 = '20260104000000/';
const V5 = '20260105000000/';

test('keep 1 keeps the version just published and the one before it', () => {
  assert.deepEqual(selectStaleVersions([V3, V1, V4, V2], '20260104000000', 1), [V1, V2]);
});

test('keep 2 keeps the version just published and the two before it', () => {
  assert.deepEqual(selectStaleVersions([V1, V2, V3, V4, V5], '20260105000000', 2), [V1, V2]);
});

test('nothing is removed while there are no more versions than kept', () => {
  assert.deepEqual(selectStaleVersions([V1], '20260101000000', 1), []);
  assert.deepEqual(selectStaleVersions([V1, V2], '20260102000000', 1), []);
  assert.deepEqual(selectStaleVersions([V1, V2, V3], '20260103000000', 2), []);
});

test('versions newer than the one just published are never removed', () => {
  assert.deepEqual(selectStaleVersions([V1, V2, V3, V4, V5], '20260103000000', 1), [V1]);
});

test('names other than timestamp directories are ignored', () => {
  const prefixes = ['assets/', '2026/', '202601010000000/', 'latest/', V1, V2, V3];
  assert.deepEqual(selectStaleVersions(prefixes, '20260103000000', 1), [V1]);
});

test('a version just published that is not in the bucket removes nothing and throws', () => {
  assert.throws(() => selectStaleVersions([V1, V2, V3], '20260109000000', 1), /not in the bucket/u);
  assert.throws(() => selectStaleVersions([], '20260101000000', 2), /not in the bucket/u);
});

test('--keep defaults to 1 and accepts whole numbers of at least 1', () => {
  assert.equal(DEFAULT_KEEP_VERSIONS, 1);
  assert.equal(readKeep(['--timestamp', '20260101000000']), 1);
  assert.equal(readKeep(['--keep', '2']), 2);
  assert.equal(readKeep(['--keep=3']), 3);
});

test('--keep rejects anything else', () => {
  for (const argv of [['--keep', '0'], ['--keep', '-1'], ['--keep', '1.5'], ['--keep', 'two'], ['--keep'], ['--keep='], ['--keep', '--cleanup-only']]) {
    assert.throws(() => readKeep(argv), /--keep takes a whole number/u, argv.join(' '));
  }
});

test('options and flags are read in both spellings', () => {
  assert.equal(readOption(['--timestamp', '20260101000000'], 'timestamp'), '20260101000000');
  assert.equal(readOption(['--timestamp=20260101000000'], 'timestamp'), '20260101000000');
  assert.equal(readOption([], 'timestamp'), undefined);
  assert.equal(hasFlag(['--timestamp', '1', '--cleanup-only'], 'cleanup-only'), true);
  assert.equal(hasFlag(['--timestamp', '1'], 'cleanup-only'), false);
});
