# Coffee Lover's

Website to checkout your favorite coffee recipes. You can checkout the website [here](https://jazicorn.github.io/coffeelovers/)

## API's
> [Sample API Coffee](https://sampleapis.com/api-list/coffee)

- [Coffee - Hot](https://api.sampleapis.com/coffee/hot)
- [Coffee - Iced](https://api.sampleapis.com/coffee/iced)

---

## Install

### Clone Directory

```bash
# Command 1:
git clone https://github.com/jazicorn/coffeelovers.git

# Navigate to root directory
cd coffeelovers
```

### Setup

In order to run this project locally, install <ins>***node runtime*** </ins> and  <ins>***npm package manager***</ins>. The links below will walk you through installing both programs:
- [nodejs](https://nodejs.org/en/download)
- [npm](https://docs.npmjs.com/cli/v7/configuring-npm/install)

You can check if they're installed by checking the versions in your terminal:
```bash
node -v
npm -v
```

After making sure both node and npm are installed, navigate in the terminal to the coffeelovers folder and at the root of the folder, where the ***package.json*** file is located, run this terminal command to install dependencies:
```bash
npm install
```

---

### Local Server

To run this project in development:
```bash
npm run dev
```

**Now go to your browser and type ***[localhost:1234](http://localhost:1234)*** to access the homepage.**

---

### Production Server

This command builds the web app for production:
```bash
npm run build
```

After the web app is compiled, this command serves the web app for production:
```bash
npm run start
```

**Now go to your browser and type ***[localhost:1234](http://localhost:1234)*** to access the homepage.**

---

### Optional Commands

Removes project cache to rebuild with updated files:
```bash
npm run clean
```
