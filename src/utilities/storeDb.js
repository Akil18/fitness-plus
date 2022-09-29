const addtoDb = (value) => {
  const db = getDb();
    if (db) {
        localStorage.setItem('break-time', value);
    } else {
        localStorage.setItem('break-time', value);
    }
};

const getDb = () => {
  const db = localStorage.getItem('break-time');
  return db;
};

export { addtoDb};