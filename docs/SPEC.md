# Tonnage

## Technical Specifications

By Mikey Petty

### Goals

- Develop Tonnage as a Progressive Web App, at least initially
- Store data locally on device that is offline compatible
- Sync data to a shared cloud database

### System Architecture

#### Phase 1: Frontend + Backend Only

##### Frontend

- **UI Library:** React
- **Build Tool & Dev Server:** Vite
- **Language:** Typescript
- **Local/Offline Storage:** SQLite WASM
- **Web Server:** Nginx
- **Code Quality:** ESlint, Prettier

###### Frontend Testing

- **Unit Testing:** Vitest + React Testing Library
- **End-to-End Testing:** Playwright

##### DevOps

- GitHub Actions for linting, testing, and deployment
- Docker for consistent environment behavior

#### Deployment & Hosting

- **Frontend Hosting:** Vite builds static assets (`dist/`) which are served via Nginx
- **Containerization:** Docker used for consistent build/deploy environments
- **CI/CD:** GitHub Actions handles linting, testing, and deployment pipeline

#### Phase 2 (Future)

This is the phase where we will add user Authentication, cloud managed Database, and data syncs
between local data & cloud database

- Cloud Database: Postgres
- Cloud Provider: TBD

##### Adding a Backend Framework

- **Backend Framework & ORM:** Django
- **API Toolkit:** Django REST Framework
- **Backend Database:** Postgres
- **Cloud Provider:** TBD
- **Web Server:** Gunicorn
- **Code Quality:** Black, Flake8, and isort

#### Deployment & Hosting

- **Backend Hosting:** Backend is hosted with Gunicorn
- **Containerization:** Docker used for consistent build/deploy environments
- **CI/CD:** GitHub Actions handles linting, testing, and deployment pipeline
