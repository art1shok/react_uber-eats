export const loadRestaurantData = async() => {
  const response = await fetch(
    '/restaurants/17231840-0c52-40ae-9735-b37b6f113e4e.json'
  );
  const result = await response.json();

  return result.data.feedItems.map(item => result.data.storesMap[item.uuid]);
};
