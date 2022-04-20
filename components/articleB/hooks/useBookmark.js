import { useState, useEffect, useCallback } from 'react';

const useBookmark = () => {
  const [bookmarkSymbolData, setBookmarkSymobolData] = useState();

  const setBookmark = useCallback((market) => {
    const bookmark = localStorage.getItem('bookmark');

    if (bookmark) {
      const parseBookmark = JSON.parse(bookmark);

      if (!parseBookmark.includes(market)) {
        localStorage.setItem(
          'bookmark',
          JSON.stringify([...parseBookmark, market])
        );
      } else {
        localStorage.setItem(
          'bookmark',
          JSON.stringify(parseBookmark.filter((el) => el !== market))
        );
      }
    } else {
      localStorage.setItem('bookmark', JSON.stringify([market]));
    }

    if (JSON.parse(localStorage.getItem('bookmark')).join() !== '') {
      setBookmarkSymobolData(
        JSON.parse(localStorage.getItem('bookmark')).join()
      );
    } else {
      setBookmarkSymobolData(undefined);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('bookmark') === null) {
        localStorage.setItem('bookmark', '[]');
      }
    }
  }, []);

  return { setBookmark, bookmarkSymbolData };
};

export default useBookmark;
