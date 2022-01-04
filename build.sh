#!/bin/bash

export NODE_OPTIONS=--openssl-legacy-provider
npm run build

\rsync -r dist/ ../profrec/dist