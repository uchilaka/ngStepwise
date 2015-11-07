#!/bin/sh
git add .
if [[ ! -z "$1" ]]; then 
    COMMENT="$1"
else
    COMMENT="Nothing to see here. Just committing progress..."
fi
git commit -m "$COMMENT"
git push origin master