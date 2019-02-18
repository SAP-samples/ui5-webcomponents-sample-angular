#!/bin/bash

set -e # Exit with nonzero exit code if anything fails

SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"

# Config variables
REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/${GH_URL}\//git@${GH_URL}:}
SHA=`git rev-parse --verify HEAD`

# Clone the existing gh-pages for this repo into gh-pages
git clone $REPO gh-pages
cd gh-pages
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH
cd ..

echo "Before remove gh-pages"
ls -a gh-pages

# Clean gh-pages existing contents
rm -rf gh-pages/* || exit 0

# Move master build folder to gh-pages
cp -a ./dist/ui5-webcomponents-sample-angular/. gh-pages/

# put the commit id as version
echo "$(git log -1 HEAD)" > gh-pages/version.txt

echo "After update gh-pages"
ls -a gh-pages

# Configure Git
cd gh-pages
git config user.name "$COMMIT_AUTHOR_NAME"
git config user.email "$COMMIT_AUTHOR_EMAIL"

# Prepare commit
git add -N . # consider untracked files for git diff

# If there are no changes to the compiled build (e.g. this is a README update) then just bail.
if [[ -z `git diff --exit-code` ]]; then
  echo "No changes to the output on this push; exiting."
  exit 0
fi

# Commit the "changes", i.e. the new version.
# The delta will show diffs between new and old versions.
git add .
git commit -m "Automatic update by Travis CI #$TRAVIS_BUILD_NUMBER, commit ${SHA}"

# Get the deploy key by using Travis's stored variables to decrypt deploy_key.enc
ENCRYPTED_KEY_VAR="encrypted_${ENCRYPTION_LABEL}_key"
ENCRYPTED_IV_VAR="encrypted_${ENCRYPTION_LABEL}_iv"
ENCRYPTED_KEY=${!ENCRYPTED_KEY_VAR}
ENCRYPTED_IV=${!ENCRYPTED_IV_VAR}
openssl aes-256-cbc -K $ENCRYPTED_KEY -iv $ENCRYPTED_IV -in ../deploy/deploy_key.enc -out ../deploy_key -d
chmod 600 ../deploy_key
eval `ssh-agent -s`
ssh-add ../deploy_key

# Push new change
git push $SSH_REPO $TARGET_BRANCH
