import axios from 'axios';

export async function fetchImages(keyword, page) {
  const baseUrl = 'https://pixabay.com/api/';
  const key = '43086871-ad01a7cbad34982c2244ec443';
  const params = {
    key: key,
    q: keyword,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page,
  };

  try {
    const response = await axios.get(baseUrl, { params });
    
    if (response.status !== 200) {
      throw new Error('Error');
    }
    
    return response.data;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Error during API call',
      position: 'topRight',
    });
    throw error;
  }
}
