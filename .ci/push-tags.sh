#!/usr/bin/env sh

set -e
set -x

if [ -z "$DRONE_COMMIT_SHA" ]
then
      echo "Refusing to force push, because no original commit SHA was provided."
      exit 1
fi

# Force push the tags and amended message.
git push --no-verify --follow-tags --force-with-lease=master:${DRONE_COMMIT_SHA} --set-upstream origin master