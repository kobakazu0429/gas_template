DIR=$(basename $(dirname $(pwd)))

if [! -f '.clasp.template.json'] && [! -f'.clasp.json']; then
  cp .clasp.template.json ../
fi

if [! -f '.gitignore']; then
  cp .gitignore ../
fi

if [! -f 'package.json']; then
  cp package.json ../
fi

if [! -f 'yarn.lock']; then
  cp yarn.lock ../
fi

if [! -f 'tslint.json']; then
  cp tslint.json ../
fi

if [! -d 'src/']; then
  cp -r src ../
fi


if [ -d '.git/' ]; then
  cd ../
  git remote set-url origin git@github.com:kobakazu0429/${DIR}.git
fi
