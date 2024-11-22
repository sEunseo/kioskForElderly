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
const getcategories = () => {

    sendHttpRequest('GET', 'http://localhost:2021/category').then(responseData => {
        console.log("Azul I'm here")
        console.log(responseData);
        // console.log(responseData[0].SubCAt[0])
        let html, html1, html2 = '';
        for (let i = 0; i < responseData.length; i++) {
            html += `<tr class="gradeA">
            <td class="center hidden-phone">${responseData[i].NameCat}</td>
            <td class="center hidden-phone"><a href="#"><img src="public/lib/advanced-datatable/images/details_close.png"></a></td>
          </tr>`

            for (let y = 0; y < responseData[i].SubCAt.length; y++) {
                html1 += `<tr class="gradeA">
                <td class="center hidden-phone">${responseData[i].SubCAt[y].NameSubCat}</td>
                <td class="center hidden-phone"><a href="#"><img src="public/lib/advanced-datatable/images/details_close.png"></a></td>
              </tr>`

              

            }
        }
        document.getElementById("DashCat").insertAdjacentHTML('afterbegin', html);
        document.getElementById("DashSubCat").insertAdjacentHTML('afterbegin', html1);
        document.getElementById("DashProduct").insertAdjacentHTML('afterbegin', html2);
        
    });
};
