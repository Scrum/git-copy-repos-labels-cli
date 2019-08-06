import test from 'ava';
import path from 'path';
import readPkg from 'read-pkg';
import execa from 'execa';

const cli = path.resolve('./cli.js');

test('Check version', async t => {
  const {stdout} = await execa(cli, ['-v']);
  const {version} = await readPkg();
  t.is(stdout, version);
});