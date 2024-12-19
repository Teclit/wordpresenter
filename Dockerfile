name: Build and Deploy to Docker Hub

on:
  push:
    branches:
      - '**'
  pull_request:
    branches:
      - '**'

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [16, 18, 20] # Test on multiple Node.js versions

    steps:
    # Step 1: Checkout the repository
    - name: Checkout repository
      uses: actions/checkout@v3

    # Step 2: Set up Node.js
    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    # Step 3: Install dependencies and build the Angular project
    - name: Install dependencies
      run: npm ci

    - name: Build Angular app
      run: npm run build -- --output-path=dist/wordpresenter --configuration=production

  deploy:
    if: github.ref == 'refs/heads/master' # Only deploy from master branch
    runs-on: ubuntu-latest
    needs: build

    steps:
    # Step 1: Checkout the repository
    - name: Checkout repository
      uses: actions/checkout@v3

    # Step 2: Log in to Docker Hub
    - name: Log in to Docker Hub
      uses: docker/login-action@v2
      with:
        username: ${{ secrets.DOCKER_USERNAME }}
        password: ${{ secrets.DOCKER_PASSWORD }}

    # Step 3: Build and push the Docker image
    - name: Build and push Docker image
      run: |
        docker build -t your-dockerhub-username/wordpresenter:latest .
        docker push your-dockerhub-username/wordpresenter:latest
