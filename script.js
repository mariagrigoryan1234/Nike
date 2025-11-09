class Product {
    constructor(name, img, oldprice, newprice, category, gallery, description, colors, sizes, coments) {
        this.name = name;
        this.img = img;
        this.oldprice = oldprice;
        this.newprice = newprice;
        this.category = category;
        this.gallery = gallery;
        this.description = description;
        this.colors = colors;
        this.sizes = sizes;
        this.coments = coments;
    }
    render = function () {
        const product = document.createElement('article');
        product.classList.add('product');

        product.innerHTML = `
        
        <img src = "${this.img}"/>
        <h3>${this.name}</h3>
        <h4>${this.category}</h4>
        <h5>${this.colors}</h5>
        <div>
        <span>$${this.newprice}</span>
        <span>$${this.oldprice}</span>
        <div/>
       
        `

        document.body.append(product)

    } 
}


var product = new Product('Nike Dunk Low Retro', "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d60e7242-8d11-4752-af05-451d9f3b55ae/NIKE+DUNK+LOW+RETRO.png",
    130, 110, "Men's Shoes", [
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d60e7242-8d11-4752-af05-451d9f3b55ae/NIKE+DUNK+LOW+RETRO.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/da758b36-2e7c-434f-8e36-a7aa238fb482/NIKE+DUNK+LOW+RETRO.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/88bdfa1c-ff79-43cf-ba5e-5e181f4117c1/NIKE+DUNK+LOW+RETRO.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/52c4b48d-f254-4b9f-bdeb-9c33e806ece0/NIKE+DUNK+LOW+RETRO.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f8c7fc8f-e14c-4716-9678-0928ff9601f6/NIKE+DUNK+LOW+RETRO.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c4c9a693-5219-435a-8ab8-5ae3165e0a72/NIKE+DUNK+LOW+RETRO.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e804379-4ed7-4eb5-9df6-f33aeafb6b45/NIKE+DUNK+LOW+RETRO.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d63a9fe9-16d6-44c7-8884-298d08bb1dc6/NIKE+DUNK+LOW+RETRO.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e7bafa3a-df0f-4c71-80ea-7d45213c3b56/NIKE+DUNK+LOW+RETRO.png",
],
    "You can always count on a classic. The Dunk Low pairs its iconic color blocking with polished, genuine leather and plush padding for game-changing comfort that lasts. The possibilities are endless—how will you wear your Dunks?",
    4,
    [
        "M 6 / W 7.5",
        "M 7 / W 8.5",
        "M 8 / W 9.5",
        "M 9 / W 10.5",
        "M 10 / W 11.5",
        "M 11 / W 12.5",
        "M 11 / W 12.5",
        "M 13 / W 14.5",
        "M 15 / W 16.5",
        "M 6.5 / W 8",
        "M 7.5 / W 9",
        "M 8.5 / W 10",
        "M 9.5 / W 11",
        "M 10.5 / W 12",
        "M 11.5 / W 13",
        "M 12.5 / W 14",
        "M 14 / W 15.5"
    ],

    [
        {
            name:"SirjanC94962412",
            date:"Sep 18, 2025",
            comment:"In the pictures they look like kinda like a yellow cream and a brown color. In person it’s an off white and dark brown. Basically two completely different pairs of shoes"
        },
        {
            name:"jordanv690113428",
            date:"Aug 17, 2025",
            comment:"Colors shown on website make it look like an off white/cream. It’s most definitely the same white as the pandas"
        }
    ]

)

product.render()
document.querySelector('.product').onclick = function(){
    localStorage.setItem('currentproduct',JSON.stringify(product))
    location.href='./product_detal.html'
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