declare global {
  interface FileSystemDirectoryHandle {
    /**
     * Returns an async iterator for the entries in this directory
     * @returns AsyncIterableIterator of [name, handle] pairs
     */
    entries(): AsyncIterableIterator<[string, FileSystemHandle]>;

    /**
     * Returns an async iterator for the keys (names) in this directory
     */
    keys(): AsyncIterableIterator<string>;

    /**
     * Returns an async iterator for the values (handles) in this directory
     */
    values(): AsyncIterableIterator<FileSystemHandle>;
  }
}

export {};
