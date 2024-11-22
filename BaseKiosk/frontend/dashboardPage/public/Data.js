const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
const tableDash =  document.getElementById("DashCat");
const tableSubdash = document.getElementById("DashSubCat");
const tableProduct = document.getElementById("Product");

const getData = () => {
    
    axios.get('http://localhost:2021/category').then(response => {
        

        for( let i = 0; i < response.data.length ; i++ ) {
            
            console.log(response.data[0].NameCat);
            html =`<tr class="gradeA">
            <td class="center hidden-phone">${response.data[i].NameCat}</td>
            <td class="center hidden-phone"><button data-toggle="modal" data-target="#ModalUpCat" onclick="UpdateCat('${response.data[i]._id}','${response.data[i].NameCat}')"><img src="public/lib/advanced-datatable/images/detail_update.png"></button></td>           
            <td class="center hidden-phone"><button onclick="deleteCat('${response.data[i]._id}')"><img src="public/lib/advanced-datatable/images/details_close.png"></button></td>
          </tr>`;
          
            
            tableDash.innerHTML = tableDash.innerHTML + html;
        }
        for( let x = 0; x < response.data[0].SubCAt.length ; x++) {
            // console.log(response.data[0].SubCAt[x]);
            html = `<tr class="gradeA">
                <td class="center hidden-phone">${response.data[0].SubCAt[x].NameSubCat}</td>
                <td class="center hidden-phone"><button data-toggle="modal" data-target="#ModalUpSubCat" onclick="UpdateSubCat('${response.data[0].NameCat}','${response.data[0].SubCAt[x]._id}','${response.data[0].SubCAt[x].NameSubCat}')"><img src="public/lib/advanced-datatable/images/detail_update.png"></button></td>           
            <td class="center hidden-phone"><button onclick="deleteSubCat('${response.data[0].SubCAt[x]._id}')"><img src="public/lib/advanced-datatable/images/details_close.png"></button></td>
              </tr>`

              tableSubdash.innerHTML = tableSubdash.innerHTML + html;
        }
            
        for( let y = 0; y < response.data[0].SubCAt.length ; y++) {
            console.log(response.data[0].SubCAt[y].Product[y]);
            html = `<tr class="gradeA">
                <td class="center hidden-phone">${response.data[0].SubCAt[y].Product[y].NameProduct}</td>

                <td class="center hidden-phone"><button data-toggle="modal" data-target="#ModalUpProduct" 
                onclick="UpdateProduct('${response.data[0].NameCat}','${response.data[0].SubCAt[x].NameSubCat}','${response.data[0].SubCAt[y].Product[y]._id}','${response.data[0].SubCAt[y].Product[y].NameProduct}')">
                <img src="public/lib/advanced-datatable/images/detail_update.png"></button></td>

                <td class="center hidden-phone"><button onclick="deleteProd('${response.data[0].SubCAt[y].Product[y]._id}')">
                <img src="public/lib/advanced-datatable/images/details_close.png"></button></td>
                </tr>`


              tableProduct.innerHTML = tableProduct.innerHTML + html;
        }

    });
};





// POST Category


function sendData() {
    var nameCateg = document.getElementById('category').value;

    obj = {
        NameCat : nameCateg
    }
    console.log(obj);

    axios.post('http://localhost:2021/category/addcategory',obj)
      .then(function (response) {
        console.log(response);
        // location.reload();
      })
      .catch(function (error) { 
        console.log(error);
      });
    
   

}


// DELETE Category By :id

function deleteCat(id) {
    axios.delete('http://localhost:2021/category/delete/'+ id)
    .then(function (response) {
        console.log(response);
        location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
    
}

// PUT Category

function UpdateCat(id, name) {

    

    document.getElementById("categoryUp").value = name;

    var categoryUp = document.getElementById('categoryUp').value;
    

    console.log(id)
    // console.log(name)
        obj = {
            name : categoryUp,
        }
        console.log(obj);
    
        axios.put('http://localhost:2021/category/update/' +id, obj)
          .then(function (response) {
            console.log(response);
            // location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });
    
   
  
  }

