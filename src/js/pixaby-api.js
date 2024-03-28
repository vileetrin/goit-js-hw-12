export function fetchImages(keyword) {
  const baseUrl = 'https://pixabay.com/api/?key=';
  const key = '43086871-ad01a7cbad34982c2244ec443';
  const params = new URLSearchParams({
    q: keyword,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
    const url = `${baseUrl}${key}&${params}`;

    return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error');
      }
      return response.json();
    })
    .then(data => {
      return data.hits;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
