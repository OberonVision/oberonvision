import git from 'isomorphic-git';
import fs from 'fs';
import path from 'path';

const dir = process.cwd();

async function main() {
  console.log('Initializing git repository in', dir);
  await git.init({ fs, dir, defaultBranch: 'main' });

  // Read .gitignore
  let gitignoreContent = '';
  try {
    gitignoreContent = fs.readFileSync(path.join(dir, '.gitignore'), 'utf8');
  } catch {}

  const ignoreList = ['node_modules', '.git', 'dist'];

  // Recursively add all files
  function getAllFiles(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    let files = [];
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      const relPath = path.relative(dir, fullPath).replace(/\\/g, '/');

      // Check ignore
      if (ignoreList.some(ig => relPath === ig || relPath.startsWith(ig + '/'))) {
        continue;
      }

      if (entry.isDirectory()) {
        files = files.concat(getAllFiles(fullPath));
      } else {
        files.push(relPath);
      }
    }
    return files;
  }

  const allFiles = getAllFiles(dir);
  console.log(`Adding ${allFiles.length} files...`);

  for (const file of allFiles) {
    await git.add({ fs, dir, filepath: file });
  }

  const sha = await git.commit({
    fs,
    dir,
    author: {
      name: 'OberonVision',
      email: 'oberonvison.tech@gmail.com',
    },
    message: 'Initial commit: Oberon Vision with 21:9 cinematic hero banner animation',
  });

  console.log('Committed successfully with SHA:', sha);

  // Set remote
  await git.addRemote({
    fs,
    dir,
    remote: 'origin',
    url: 'https://github.com/OberonVision/oberonvision.git',
    force: true,
  });

  console.log('Remote origin set to https://github.com/OberonVision/oberonvision.git');
}

main().catch(err => {
  console.error('Error in git setup:', err);
  process.exit(1);
});
