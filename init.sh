DIR=$(basename $(dirname $(pwd)))

cp .clasp.template.json ../
cp .gitignore ../
cp package.json ../
cp yarn.lock ../
cp tslint.json ../
cp -r src ../

cd ../

git remote set-url origin git@github.com:kobakazu0429/${DIR}.git
