DIR=$(basename $(dirname $(pwd)))

if [ ! -f '.clasp.template.json' ] && [ ! -f '.clasp.json' ]; then
  cp .clasp.template.json ../
else
  echo '.clasp.templat exist.'
fi

if [ ! -f '.gitignore' ]; then
  cp .gitignore ../
else
  echo '.gitignore exist.'
fi

if [ ! -f 'package.json' ]; then
  cp package.json ../
else
  echo 'package.json exist.'
fi

if [ ! -f 'yarn.lock' ]; then
  cp yarn.lock ../
else
  echo 'yarn.lock exist.'
fi

if [ ! -f 'tslint.json' ]; then
  cp tslint.json ../
else
  echo 'tslint.json exist.'
fi

if [ ! -d 'src/' ]; then
  cp -r src ../
else
  echo 'src/ exist.'
fi

cd ../
if [ -d '.git' ]; then
  git remote set-url origin git@github.com:kobakazu0429/${DIR}.git
else
  echo 'not managed by Git'
fi
