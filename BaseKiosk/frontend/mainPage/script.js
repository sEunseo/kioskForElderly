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
        console.log(responseData[0]);
        console.log(responseData[0].SubCAt[0])
        let html = '';
        for (let i = 0; i < responseData.length; i++) {
            html += ` <li class = "nav-item dropdown" >
            <a class = "nav-link dropdown-toggle" href = "#"
        id = "navbarDropdown"
        role = "button"
        data-toggle = "dropdown"
        aria-haspopup = "true"
        aria-expanded = "false" >
           ${responseData[i].NameCat} </a> <div class = "dropdown-menu"
        aria-labelledby = "navbarDropdown" >`
            for (let y = 0; y < responseData[i].SubCAt.length; y++) {
                html += `<a class="dropdown-item" onclick="showproduct('${responseData[i].NameCat}','${responseData[i].SubCAt[y].NameSubCat}')" > ${responseData[i].SubCAt[y].NameSubCat} </a>`
                console.log(responseData[i].SubCAt[y].NameSubCat)
            }
            `</li>
            </div>`

            console.log(responseData[i]);
        }
        document.getElementById("menu").insertAdjacentHTML('afterbegin', html);

    });
};
const showproduct = (idCAt, namesubcat) => {
    console.log("responseData");
    let html = '';
    document.getElementById("cards").innerHTML = '';
    sendHttpRequest('GET', 'http://localhost:2021/product/' + idCAt + '/' + namesubcat).then(responseData => {
        console.log(responseData);
        console.log(responseData.length);

        for (let i = 0; i < responseData.length; i++) {
            html += `<div class="card">
    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light" id="card">
        <img src="https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Quarter-Pounder-with-Cheese.jpg?$Product_Desktop$" alt="test" class="img-fluid" />
        <a href="#!">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
        </a>
    </div>
    <div class="card-body">
        <h5 class = "card-title"
        id ="itemscard" > ${
            responseData[i].NameProduct
        } </h5>
       <p class = "card-text" >
           prix: <strong id="pricecard">  ${
               responseData[i].priceProduct
           }
           </strong> <br> Ingredient: `
            for (let y = 0; y < responseData[i].Ingredient.length; y++) {
                html += responseData[i].Ingredient[y].Ingredient + ", "
            }

            html += `</p> 
        <a href = "#para"
        class = "btn btn-primary"
        onclick = "addCommand('${responseData[i].NameProduct}','${responseData[i].priceProduct}')" > Add this product </a>
    </div>
    </div>`
        }
        document.getElementById("cards").insertAdjacentHTML('afterbegin', html);
    });
};

function addCommand(name, price) {
     let html = `<tr>
     <td id="items">${name}</td>
            <td class="text-center" id="price">${price}</td>
            <td class="text-center" id="quantity"> 1  </td>
             <td class="text-right" id="total">${price}</td> </tr>`
 document.getElementById("bill").insertAdjacentHTML('afterbegin', html);

}

function submitCommand() {
  
}