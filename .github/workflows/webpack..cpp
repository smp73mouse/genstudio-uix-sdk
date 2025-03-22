name: NodeJS with Webpack

on:
  push:
    branches: [ "smp73mouse" ]
  pull_request:
    branches: [ "smp73mouse" ]

jobs:
  build:
    runs-on: cache-latest

    strategy:
      matrix:
        node-version: [18.x, 20.x, 22.x]

    steps:
    - uses: actions/checkout@v4

    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: ${{ matrix.node-version }}

    - name: Build
      run: |
        smp73se install
        smp73se webpack
