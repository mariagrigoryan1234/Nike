
var currentproduct = JSON.parse(localStorage.getItem('currentproduct'));

document.getElementById('mainimg').src = currentproduct.img;

currentproduct.gallery.map((e) => {
    const gallerimg = document.createElement('li');
    gallerimg.innerHTML = `
    <img src="${e}"/>
                            
    `
    document.getElementById('gallery_box').append(gallerimg)

    gallerimg.onmouseover = function () {
        document.getElementById('mainimg').src = e
    }
})


document.getElementById('name').textContent = currentproduct.name;

document.getElementById('category').textContent = currentproduct.category;

document.getElementById('newprice').textContent = `$${currentproduct.newprice}`;

document.getElementById('oldprice').textContent = `$${currentproduct.oldprice}`;

document.getElementById('colors').textContent = currentproduct.colors;
document.getElementById('desc').textContent = currentproduct.description

currentproduct.sizes.map((e) => {
    const sizeitem = document.createElement('li');
    sizeitem.textContent = e;
    document.getElementById('sizes').append(sizeitem)
}
)



currentproduct.coments.map((e) => {
    const coments = document.createElement('li');
    coments.innerHTML = `
  <span>${e.name} ${e.date}</span>
  <p>${e.comment}</p>
  `
    document.getElementById('comments').append(coments)
}
)

var addtobaag_button = document.getElementById('addtobaag_button')
var favorite = document.getElementById('favorite')

addtobaag_button.onclick = function(){
    localStorage.setItem('shopcartproduct',JSON.stringify(currentproduct))
}

favorite.onclick = function(){
localStorage.setItem('likedproduct', JSON.stringify(currentproduct))
}


var shopbagbtn = document.getElementById('shopbagbtn')

shopbagbtn.onclick = function(){
    document.querySelector('.shopbag').style.right='0'
}

var closshopbag = document.getElementById('closshopbag')

closshopbag.onclick = function(){
    document.querySelector('.shopbag').style.right='-100%'
}
var closslikebox = document.getElementById('closelikebox')

closslikebox.onclick = function(){
    document.querySelector('.likebox').style.right='-100%'
}


////////////////////////////////////////////////

var likebtn = document.getElementById('likebtn')

likebtn.onclick = function(){
document.querySelector('.likebox').style.right = '0'
}



var shopcartproduct =JSON.parse(localStorage.getItem('shopcartproduct'))
var prodprice = shopcartproduct.newprice
document.querySelector('#shopbagproducts').innerHTML = `
<li>
<img src="${shopcartproduct.img}"/>
<div>
<h3>${shopcartproduct.name}</h3>
<span id="prodprice">$${prodprice}</span>
<div>
<button id="minusbtn"><i class="fa-solid fa-minus"></i></button>
<span id="prodcount"></span>
<button id="plusbtn"><i class="fa-solid fa-plus"></i></button>
</div>
</div>
</li>
`

var prodcountcount = 1;
document.querySelector('#prodcount').textContent = prodcountcount


var plusbtn = document.getElementById('plusbtn')

plusbtn.onclick = function(){
    prodcountcount++
    document.querySelector('#prodcount').textContent = prodcountcount;
    prodprice+= shopcartproduct.newprice
    document.getElementById('prodprice').textContent =`$${prodprice}`
}

var minusbtn = document.getElementById('minusbtn')


minusbtn.onclick = function(){
    if(prodcountcount>1){
        prodcountcount--
        document.querySelector('#prodcount').textContent = prodcountcount;
        prodprice-= shopcartproduct.newprice
        document.getElementById('prodprice').textContent = `$${prodprice}`
    }
}

var likedproducts =JSON.parse(localStorage.getItem('likedproduct'))
document.querySelector('#likedproducts').innerHTML = `
<li>
<img src="${likedproducts.img}"/>
<div>
<h3>${likedproducts.name}</h3>
<span id="prodprice">$${prodprice}</span>
</div>
</li>
`