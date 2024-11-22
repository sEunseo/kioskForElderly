  const sendHttpRequest = (method, url, data) => {
      return fetch(url, {
          method: method,
          body: JSON.stringify(data),
          headers: data ? {
              'Content-Type': 'application/json'
          } : {}
      }).then(response => {
          if (response.status == 44400) {
              return response.json().then(errResData => {
                  const error = new Error('Something went wrong!');
                  error.data = errResData;
                  throw error;
              });
          }
          return response.json();
      });
  };
  async function eatIn() {
      localStorage.setItem('takeIn', 'Eat In');
      console.log(localStorage.getItem('takeIn'));
      await sendHttpRequest('GET', 'http://localhost:2021/table').then(responseData => {
          console.log(responseData);
          if (responseData == null) {
              localStorage.setItem('numtable', "all tables are busy");

          } else {
              localStorage.setItem('numtable', responseData.numTable);
              localStorage.setItem('idtable', responseData._id);
          }
      })
  }

  function takeAway() {
      localStorage.setItem('takeIn', 'Take away');
      console.log(localStorage.getItem('takeIn'));
      localStorage.setItem('numtable', '0');
  }