
export function sendRequest(data) {
  // Dummy API calling
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( 2 );
    }, 2000);
  })
  .then(data => ({ data }))
  .catch(error => ({ error }));
}

