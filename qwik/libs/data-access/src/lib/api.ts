export interface Todo {
  id: number;
  message: string;
}

interface DB {
  store: Record<string, any[]>;
  get: (storeName: string) => any[];
  set: (storeName: string, value: any[]) => boolean;
  add: (storeName: string, value: any) => boolean;
}
export const db: DB = {
  store: { todos: [] },
  get(storeName) {
    return db.store[storeName];
  },
  set(storeName, value) {
    try {
      db.store[storeName] = value;
      return true;
    } catch (e) {
      return false;
    }
  },
  add(storeName, value) {
    try {
      db.store[storeName].push(value);
      return true;
    } catch (e) {
      return false;
    }
  },
};
