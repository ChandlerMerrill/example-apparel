export function serializeTimestamps(data) {
  const obj = { ...data };
  for (const key in obj) {
    const value = obj[key];
    if (value?.toDate) {
      obj[key] = value.toDate().toISOString();
    }
  }
  return obj;
}

