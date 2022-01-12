#!/bin/bash

export NODE_OPTIONS=--openssl-legacy-provider
vue-cli-service serve --port 8081
npm run serve