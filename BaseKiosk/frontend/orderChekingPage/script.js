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
  async function billdata() {
      let html = '';
      // let card = await sendHttpRequest('GET', 'http://localhost:2021/cardFid/'+localStorage.getItem("codecard"))
      await sendHttpRequest('GET', 'http://localhost:2021/command/' + localStorage.getItem("numCmd")).then(responseData => {
          console.log(responseData);
          let codepromodesc = 'your code is not valid';
          let newPrice = localStorage.getItem('total');
          let dateCommand = responseData.DateCommande;
          let total = localStorage.getItem('total');
          let tablenumber = "later";
          let table = '';
          let codepromo = '';
          if (responseData.CodePromo != null) {
              codepromodesc = responseData.CodePromo.Promodesc;
              newPrice = parseFloat(total) - parseFloat(total) * responseData.CodePromo.Promo;
              codepromo = ` <tr>
            <td class="no-line"> <strong>code promo</strong> </td>
            <td class="no-line text-center">${codepromodesc}</td>
            <td class="no-line text-center"><strong> New Price</strong></td>
            <td class="no-line text-right">${newPrice} dh </td>
            </tr>`
          }
          if (responseData.Table != null) {
              tablenumber = responseData.Table.numTable;
              table = `
                <td class="no-line text-center"> <strong>Table number</strong> </td>
                <td class="no-line text-right"> ${tablenumber}</td>
                </tr>`
          }

          for (let i = 0; i < responseData.Produit.length; i++) {
              html += `<tr>
             <td>${responseData.Produit[i].NameProduct}</td>
             <td class="text-center">${responseData.Produit[i].priceProduct} dh</td>
             <td class="text-center">1</td>
             <td class="text-right">${responseData.Produit[i].priceProduct} dh</td>
                </tr>`
          }
          html += `<tr>
            <td class="no-line"><strong>date </strong> </td>
            <td class="no-line">${dateCommand}</td>
            <td class="no-line text-center"><strong>Total Price</strong></td>
            <td class="no-line text-right">${total} dh</td>
            </tr>`
          html += codepromo +
              `<tr>
            <td class="no-line"> <strong>Card fidality num : ${localStorage.getItem("codecard")} </strong></td>
            <td class="no-line text-center"> +12 pionts </td>
            ${table}
            </tr>`
      })
      document.getElementById("tableData").insertAdjacentHTML('afterbegin', html);

  }