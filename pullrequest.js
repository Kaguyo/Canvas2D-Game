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

  // salva dados no pipeline.txt
  fs.writeFileSync('pipeline.txt', 
    `commitMessage: ${commitMessage}\nsourceBranch: ${sourceBranch}\ndestinationBranch: ${destinationBranch}\nbody: ${body}\n`
  );

  // garante que estamos na branch certa e atualizada
  execSync(`git checkout ${sourceBranch}`, { stdio: 'inherit' });
  execSync(`git pull origin ${sourceBranch}`, { stdio: 'inherit' });

  // verifica se há mudanças
  const status = execSync('git status --porcelain').toString().trim();
  if (!status) {
    console.log('✅ Nenhuma alteração detectada. Nenhum commit ou PR será criado.');
    return;
  }

  console.log('🧹 Limpando arquivos cacheados antes do commit...');

  // remove arquivos do cache
  const cachedFiles = [
    'src',
    'package.json',
    'package-lock.json',
    'tsconfig.json',
    'pullrequest.js',
    'pipeline.txt'
  ];

  for (const file of cachedFiles) {
    try {
      execSync(`git rm --cached -r ${file}`, { stdio: 'ignore' });
    } catch {
      // ignora se o arquivo não existir
    }
  }

  // cria commit e push apenas se houver mudanças após limpeza
  const postCleanStatus = execSync('git status --porcelain').toString().trim();
  if (postCleanStatus) {
    execSync('git add .', { stdio: 'inherit' });
    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
    execSync(`git push --set-upstream origin ${sourceBranch}`, { stdio: 'inherit' });

    console.log('📤 Criando Pull Request...');
    execSync(`gh pr create --base ${destinationBranch} --head ${sourceBranch} --title "${commitMessage}" --body "${body}"`, { stdio: 'inherit' });

    console.log('✅ Pull Request criado com sucesso.');
  } else {
    console.log('⚠️ Nenhum arquivo válido para commit após remover os cacheados.');
  }

  // volta ao estado anterior local
  console.log('🔄 Revertendo para o estado anterior...');
  execSync('git reset --hard HEAD~1', { stdio: 'inherit' });
  execSync(`git pull origin ${sourceBranch}`, { stdio: 'inherit' });

  console.log('✅ Estado original restaurado.');
})();
