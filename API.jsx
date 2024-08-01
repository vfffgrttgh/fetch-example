import { useEffect } from 'react';

function API() {
  useEffect(() => {
    fetch("https://youtube.com")
    .then(document.write("API is caught!");
  }, [])
  return(
    <>
      
    </>
  );
}

export default API;
