const menu = [
    {
        id: 1,
        title: "Partha",
        category: "breakfast",
        price: 8.99,
        img: "./img/paratha.jpg",

        desc: `Paratha is a flatbread native to South Asia, prevalent throughout the modern-day nations of India, Sri Lanka, Pakistan, where wheat is the traditional staple. `,

    },
    {
        id: 2,
        title: "Halwa Puri",
        category: "breakfast",
        price: 12.99,
        img: "./img/halwa puri.jpg",
        desc: `A Pakistani Halwa Puri breakfast consists of puris, chole masala, suji halwa and aloo ki bhujia. `,

    },
    {
        id: 3,
        title: "Haleem",
        category: "lunch",
        price: 28.99,
        img: "./img/haleem.webp",
        desc: `Haleem  is made by blending or mashing the meat in the curry and serving hot with flat breads or on its own. `,

    },
    {
        id: 4,
        title: "Bryani",
        category: "lunch",
        price: 15.99,
        img: "./img/brayni.jpg",
        desc: `Biryani is made with Indian spices, rice, and usually some type of meat or in some cases without any meat, and sometimes, in addition, eggs and potatoes`,

    },
    {
        id: 5,
        title: "Chicken karahi",
        category: "lunch",
        price: 45.99,
        img: "./img/karahi.jpg",
        desc: `Chicken karahi, or kadai chicken, is a chicken dish from South Asia. It is noted for its spicy taste and is notable in Pakistani and North Indian cuisine. `,

    },
    {
        id: 6,
        title: "Payy",
        category: "lunch",
        price: 55.99,
        img: "./img/payy.jpg",
        desc: `Paya is a traditional Pakistani breakfast dish. It is made using trotters and served with naan or sometimes rice. `,

    },
    {
        id: 7,
        title: "Dall",
        category: "lunch",
        price: 15.99,
        img: "./img/dall.jpg",
        desc: `Yellow split peas are very prevalent in the Indian communities of Guyana, Fiji, Suriname, Jamaica, South Africa, Mauritius, Trinidad and Tobago `,

    },
    {
        id: 8,
        title: "Pallk Gosht",
        category: "lunch",
        price: 30.99,
        img: "./img/palk.jpg",
        desc: `Palak gosht is a popular curry made with lamb lathered in a spicy spinach masala. A delicious comfort food served with chapattis, paratha, or naan.`,

    },
    {
        id: 9,
        title: "Channy",
        category: "lunch",
        price: 14.99,
        img: "./img/channy.jpg",
        desc: `Chana masala, also known as channay, chole masala, chhole masala, chole or chholay, is a dish originating from the Indian subcontinent. `,

    },
    {
        id: 10,
        title: "Chapli Kabab",
        category: "breakfast",
        price: 17.99,
        img: "./img/chapli.jpg",
        desc: `Chapli Kebab or Chapli Kabab is a Pashtun-style minced kebab, usually made from ground beef, mutton or chicken with various spices in the shape of a patty. `,

    },
    {
        id: 11,
        title: "Pakora",
        category: "refreshment",
        price: 3.99,
        img: "./img/pakora.jpg",
        desc: `Pakora is a spiced fritter originating from the Indian subcontinent. They are sold by street vendors and served in restaurants in South Asia and UK. `,

    },
    {
        id: 12,
        title: "Samosa",
        category: "refreshment",
        price: 4.99,
        img: "./img/samosa.jpg",
        desc: `A samosa or singara is a fried South Asian pastry with a savory filling, including ingredients such as spiced potatoes, onions, and peas. `,

    },
    {
        id: 13,
        title: "Shawarma",
        category: "refreshment",
        price: 13.99,
        img: "./img/shawar.jpeg",
        desc: `Shawarma  is a popular Middle Eastern dish that originated in the Ottoman Empire, consisting of meat cut into thin slices, stacked in a cone-like shape, `,

    },
    {
        id: 14,
        title: "Luddu",
        category: "dessert",
        price: 15.99,
        img: "./img/luddu.jpg",
        desc: `Laddu or laddoo is a spherical sweet originating from India and spread through the Indian subcontinent and the Malay world `,

    },
    {
        id: 15,
        title: "Gulab Jaman",
        category: "dessert",
        price: 10.99,
        img: "./img/gulab.jpg",
        desc: `Gulab jamun is a sweet confectionary or dessert, originating in the Indian subcontinent and a type of mithai popular in India, Pakistan, Nepal. `,

    },
    {
        id: 16,
        title: "Jalabi",
        category: "dessert",
        price: 5.99,
        img: "./img/jalabi.jpg",
        desc: `Jalebi, is a popular sweet snack in south and west Asia, Africa, and Mauritius. It goes by many names, including jilapi, zelepi, jilebi `,

    },
    {
        id: 17,
        title: "Rass malai",
        category: "dessert",
        price: 35.99,
        img: "./img/rass.webp",
        desc: `Ras malai, rasamalai, or rossomalai is a dessert originating from the eastern regions of the Indian subcontinent.`,

    }
]

const sectioncenter = document.querySelector(".food-center")
const filterbtns = document.querySelectorAll(".all-btn")


window.addEventListener("DOMContentLoaded", function () {

    displayfooditems(menu);



});



filterbtns.forEach(function (btns) {
    btns.addEventListener('click', function (e) {
        const category = e.currentTarget.dataset.id;
        const foodcategory = menu.filter(function (fooditems) {
            // console.log(fooditems.category);

            if (fooditems.category === category) {
                return fooditems;
            }
        });

        if (category === "all") {
            displayfooditems(menu);
        }
        else {
            displayfooditems(foodcategory);
        }

    });
});


function displayfooditems(fooditems) {

    let displayfood = fooditems.map(function (item) {
        // console.log(item);


        return `<article class="food">
        <img src="${item.img}" alt="" class="food-img">
        
        <div class="food-info">
        <header>
        <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
              </header>
          <div class="food-text">
            <p>
            ${item.desc}
            </p>
            </div>
            </div>
            </article>`;
    })
    displayfood = displayfood.join("");
    sectioncenter.innerHTML = displayfood;
}        
