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

- Platform: React
- Local Database: SQLite

##### Backend

- Django

##### Database

- All data stored locally for now. Eventually, we'll add a Postgres database

##### DevOps

- GitHub Actions for testing and deployment
- Docker for consistent environment behavior
