#!/bin/sh

set -e

rm -rf ./build
npm run build
rm -rf ../backend/build
cp -r build ../backend/
