// file: pr.js
const fs = require('fs');
const { execSync } = require('child_process');
const prompts = require('prompts');

(async () => {
  const response = await prompts([
    {
      type: 'text',
      name: 'commitMessage',
      message: 'Commit message:'
    },
    {
      type: 'text',
      name: 'sourceBranch',
      message: 'Origin branch (source branch):'
    },
    {
      type: 'text',
      name: 'destinationBranch',
      message: 'Destination branch (target branch):'
    },
    {
      type: 'text',
      name: 'body',
      message: 'PR body (description):'
    }
  ]);

  const { commitMessage, sourceBranch, destinationBranch, body } = response;

  // salva em arquivo pipeline.txt
  const pipelineContent = `commitMessage: ${commitMessage}
sourceBranch: ${sourceBranch}
destinationBranch: ${destinationBranch}
body: ${body}
`;
  fs.writeFileSync('pipeline.txt', pipelineContent);

  // executa comandos git
  execSync(`git checkout ${sourceBranch}`, { stdio: 'inherit' });
  execSync('git add .', { stdio: 'inherit' });
  execSync('git rm --cached -r src', { stdio: 'inherit' });
  execSync('git rm --cached -r package.json', { stdio: 'inherit' });
  execSync('git rm --cached -r package-lock.json', { stdio: 'inherit' });
  execSync('git rm --cached -r tsconfig.json', { stdio: 'inherit' });
  execSync('git rm --cached -r pullrequest.js', { stdio: 'inherit' });
  execSync('git rm --cached -r pipeline.txt', { stdio: 'inherit' });
  execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
  execSync(`git push --set-upstream origin ${sourceBranch}`, { stdio: 'inherit' });

  // cria PR usando gh CLI
  execSync(`gh pr create --base ${destinationBranch} --head ${sourceBranch} --title "${commitMessage}" --body "${body}"`, { stdio: 'inherit' });

  console.log('Pull request created.');
  execSync('git pull', { stdio: 'inherit' });
  console.log('Synced with remote repository.');
  execSync('git add .', { stdio: 'inherit' });
  console.log('Staging all changes again...');
})();
