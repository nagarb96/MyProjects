const testimonials = [
    {
        name : "Jacob Parker",
        photoUrl : "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur suscipit accusantium soluta mollitia at et consequatur ad dolorum velit. Facilis",
    },
    {
        name : "Ashley Brown",
        photoUrl : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        text : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus mollitia unde, non dolores earum repellat soluta quae animi doloremque esse alias, nulla magni ullam illum!",
    },
    {
        name : "Peter parker",
        photoUrl : "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quod distinctio quidem, autem aliquid id nemo dolores totam quibusdam aperiam expedita possimus.",
    },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();


function updateTestimonial() {
    const { name, photoUrl, text } = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;

    idx++;

    if (idx === testimonials.length) {
        idx = 0;
    } 
    setTimeout(() => {
        updateTestimonial();
    }, 1000);
}
