async function fetchByQuery(query) {
  const res = await fetch(`https://geo.ipify.org/api/v1?apiKey=at_SBCwE593NDsXu98SwxXDtyVZtM4GL&ipAddress=${query}&domain=${query}`);
  const data = await res.json();
  if (data.messages) {
    throw new Error(data.messages);
  }
  return data;
}

export { fetchByQuery };