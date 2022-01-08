#!/bin/bash

export NODE_OPTIONS=--openssl-legacy-provider
vue-cli-service serve --port 8080
npm run serve