export const CREATE_MESSAGES_TABLE: string = /*sql*/ `
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`;

export const INSERT_MESSAGE: string = /*sql*/ `
  INSERT INTO messages (content) VALUES (?)
`;
