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
        console.log("Hi I'm Here")
        console.log(responseData);
        // console.log(responseData[0].SubCAt[0])
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
        document.getElementById("myorder").innerHTML = "My Order - " + localStorage.getItem('takeIn') + " Table(" + localStorage.getItem('numtable') + ")"
    });
};
const showproduct = (idCAt, namesubcat) => {
    console.log("responseData");
    let html = '';
    document.getElementById("cd-gallery-items").innerHTML = '';
    sendHttpRequest('GET', 'http://localhost:2021/product/' + idCAt + '/' + namesubcat).then(responseData => {
        console.log(responseData);
        console.log(responseData.length);

        for (let i = 0; i < responseData.length; i++) {
            html += ` <li> <div class="card">
    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light" id="card">
        <img src="https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Quarter-Pounder-with-Cheese.jpg?$Product_Desktop$" alt="test" class="img-fluid" />
        <a href="#!">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
        </a>
    </div>
    <div class="card-body">
    <input type=hidden id="idcat" value="${idCAt}">
    <input type=hidden id="namesubcat" value="${namesubcat}">
    <input type=hidden id="idpro" value="${responseData[i]._id}">
        <h3 class = "card-title"
        id ="itemscard" > <strong> ${
            responseData[i].NameProduct
        } </strong> </h3>
       <p class = "card-text" style="margin-bottom: 3% ; line-height: 1.3"; >
           <strong>prix </strong>:  <strong id="pricecard">  ${
               responseData[i].priceProduct
           }
           </strong>  <br> <strong> Ingredient </strong> : `
            for (let y = 0; y < responseData[i].Ingredient.length; y++) {
                html += responseData[i].Ingredient[y].Ingredient + ", "
            }

            html += `</p> 
        <a href = "#para"
        class = "btn btn-primary"  style="background-color: #ffea00da ; border: none"
        onclick = "addCommand('${responseData[i].NameProduct}','${responseData[i].priceProduct}','${idCAt}','${namesubcat}','${responseData[i]._id}')" > Add this product </a>
    </div>
    </div>
    </li>`
        }
        document.getElementById("cd-gallery-items").insertAdjacentHTML('afterbegin', html);
    });
};

function addCommand(name, price, namecat, namsubcat, idprod) {
    let html = `<li>
                <input type="hidden" class="namecat" id="idcat" value="${namecat}">
                <input type="hidden" class="namesubcat" id="namesubcat" value="${namsubcat}">
                <input type="hidden" class="proInfo" id="idpro" value="${idprod}">
				<span class="cd-qty">1x</span> ${name}
				<div class="cd-price">${price} Dh </div>
				<a href="#0" class="cd-item-remove cd-img-replace">Remove</a>
			</li>`
    document.getElementById("cart-items").insertAdjacentHTML('afterbegin', html);
    let total = document.getElementById("total").innerHTML;
    console.log("hello my friend");
    console.log(parseInt(total) + parseInt(price));
    document.getElementById("total").innerHTML = parseInt(total) + parseInt(price);
}

async function submitCommand() {
    let proInfo = document.getElementsByClassName("proInfo")
    let namecat = document.getElementsByClassName("namecat")
    let namesubcat = document.getElementsByClassName("namesubcat")
    let codepromo = document.getElementById("formControlSm")
    let cardFid = document.getElementById("formControlSmfid").value;
    if (cardFid == '') {
        cardFid = 1
    }
    console.log(cardFid);
    await sendHttpRequest('Get', 'http://localhost:2021/cardFid/' + cardFid).then(responseData => {
        console.log(responseData);
        localStorage.setItem('codecard', responseData.cardcode);
    })
    let products = [];
    console.log(codepromo.value);
    for (let i = 0; i < proInfo.length; i++) {
        products.push({
            idpro: proInfo[i].value,
            idcat: namecat[i].value,
            idsubcat: namesubcat[i].value
        })
        console.log(codepromo.value);
    }
    sendHttpRequest('POST', 'http://localhost:2021/command', {
        products: products,
        tableId: localStorage.getItem('idtable'),
        codePromoId: codepromo.value,
        cardFid: cardFid
    }).then(responseData => {
        localStorage.setItem('numCmd', responseData.numCommande);
        localStorage.setItem('total', document.getElementById("total").innerHTML);
        self.location = "../orderChekingPage/ordercheck.html ";

    })
}