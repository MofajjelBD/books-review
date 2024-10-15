// Local storage data view get method
const getStorageBookApp = (saveStore) => {
  const getStorageBookApp = localStorage.getItem(saveStore);
  if (getStorageBookApp) {
    return JSON.parse(getStorageBookApp);
  }
  return [];
};

// Local storage save data
const saveApp = (id, saveStore) => {
  const storeBook = getStorageBookApp(saveStore);
  const exists = storeBook.find((storeBook) => storeBook === id);
  if (!exists) {
    storeBook.push(id);
    localStorage.setItem(saveStore, JSON.stringify(storeBook));
  }
};

// Local storage filter remove data
const removeApp = (id, saveStore) => {
  const storeBook = getStorageBookApp(saveStore);
  const exists = storeBook.find((storeBook) => storeBook === id);
  if (exists) {
    const updatedStoreBook = storeBook.filter((storeBook) => storeBook !== id);
    localStorage.setItem(saveStore, JSON.stringify(updatedStoreBook));
  }
};

export { saveApp, getStorageBookApp, removeApp };
