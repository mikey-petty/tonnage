# Tonnage

## Technical Specifications

By Mikey Petty

### Goals

- Develop Tonnage as a Progressive Web App, at least initially
- Store data locally on device
- Sync data to a shared cloud database

### System Architecture

#### Phase 1: Offline Only

##### Frontend

- UI Library: React
- Build Tool & Dev Server: Vite
- Language: Typescript
- Local Database: SQLite (embedded)

###### Testing

- Unit: Vitest
- End-to-End: Playwright

##### Backend

TODO: Define backend for app

- Django

##### DevOps

- GitHub Actions for linting, testing, and deployment
- Docker for consistent environment behavior

#### Deployment & Hosting

- **Frontend Hosting:** Vite builds static assets (`dist/`) which are served via Nginx
- **Backend Hosting:** TODO: add backend hosting service
- **Containerization:** Docker used for consistent build/deploy environments
- **CI/CD:** GitHub Actions handles linting, testing, and deployment pipeline

#### Phase 2 (Future)

- Cloud Database: Postgres
- Sync service to merge local + remote data
