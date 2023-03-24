const menu = [{
    id: 1,
    title: "Rich Dad Poor Dad",

    price: 14,
    avaible:5,
    a:"book.html",
    img: "richdadpoordad.jpg",
    desc: `Robert Kiyosaki (Rich Dad Poor Dad) offers personal finance education to help you learn about cash flow, real estate, investing, and business building. `,
},
{
    id: 2,
    title: "It Ends with Us",

    avaible:5,
    price: 13.99,
    img:  "Ends_with_us.png",
    desc: `A gentle orphan discovers life and love in an indifferent adult world. David Copperfield (Daniel Radcliffe) lives a nearly-idyllic existence with his beautiful mother Clara (Emilia Fox) and their housekeeper Peggotty (Pauline Quirke). His life changes forever when his mother re-marries. `,
},
{
    id: 3,
    title: "It Start with Us",

    avaible:5,
    price: 6.99,
    img:  "Start_with_us.png",
    desc: `The Handmaid's Tale is an American dystopian television series created by Bruce Miller, based on the 1985 novel of the same name by Canadian author Margaret`,
},
{
    id: 4,
    title: "The Power of your subconscious Mind",

    avaible:5,
    price: 20.99,
    img:  "power.jpg",
    desc: `The name derives from “Hebe”, the Greek goddess of youth. Her name means youth or prime of life, and she personified both youth and immortality. `,
},
{
    id: 5,
    title: "Head First Java ",

    avaible:5,
    price: 22.99,
    img:  "java.jpeg",
    desc: `The Scarlet Letter: A Romance is a work of historical fiction by American author Nathaniel Hawthorne, published in 1850 `,
},
{
    id: 6,
    title: "Python For Beginers",

    avaible:5,
    price: 18.99,
    img:  "python.jpg",
    desc: `Great Expectations is the thirteenth novel by Charles Dickens and his penultimate completed novel. It depicts the education of an orphan nicknamed Pip.`,
},
{
    id: 7,
    title: "Fundamentals of Engineering Mathematics",

    avaible:5,
    price: 8.99,
    img:  "maths.jpg",
    desc: `To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and was instantly successful.  `,
},
{
    id: 8,
    title: "The Science book",

    avaible:5,
    price: 12.99,
    img:  "science.jpg",
    desc: `The 7 Habits of Highly Effective People, first published in 1989, is a business and self-help book written by Stephen R. Covey.  `,
},
{
    id: 9,
    title: "English For Engineers",

    avaible:5,
    price: 16.99,
    img:  "english.jpg",
    desc: `A long book that requires real mental exertion, Thinking, Fast and Slow is a worthwhile read by Nobel laureate Daniel Kahneman.`,
},
{
    id: 10,
    title: " Data Communication And Networking ",

    avaible:5,
    price: 16.99,
    img:  "DCN.jpg",
    desc: `A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.`,
},
];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function() {
let displayMenu = menu.map(function(item) {
    // console.log(item);

    return `<article class="menu-item">
    <a href="book.html"><img src=${item.img} alt=${item.title} class="photo" /></a>
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">$${item.price}</h4>
        </header>
        <p class="item-text">
          ${item.desc}
        </p>
      </div>
    </article>`;
});
displayMenu = displayMenu.join("");
console.log(displayMenu);

sectionCenter.innerHTML = displayMenu;
});