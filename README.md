# HP Store

A React storefront with an Express and MongoDB backend.

## Run locally

Install the frontend dependencies and start React:

```sh
npm ci
npm start
```

The frontend runs at <http://localhost:3000>. Backend features that save or load accounts and orders need the Express API and a MongoDB server. Start the API in another terminal after configuring `backend/.env` with `JWT_SECRET`, `KEY_ID`, and `KEY_SECRET`:

```sh
cd backend
npm ci
npm start
```

The backend connects to the local MongoDB database `hpstore`. MongoDB creates the database and its collections when the first document is saved. MongoDB Compass can view them after the local MongoDB server is running and data has been written.

## Tests and CI

Run frontend tests and build:

```sh
npm test -- --watchAll=false --runInBand
npm run build
```

Run backend tests:

```sh
cd backend
npm test
```

GitHub Actions runs these checks for pull requests into `main` and pushes to `main`. The automated tests do not require a MongoDB connection or payment credentials. To require passing CI before a pull request can merge, enable a branch protection rule or ruleset for `main` in the repository settings and require both checks: **Frontend tests and build** and **Backend tests**. This blocks merging when checks fail; it does not prevent a developer from creating a local commit.

This workflow validates changes and builds the frontend. It does not deploy the app.
