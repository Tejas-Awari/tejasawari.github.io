document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".add-cart").forEach(button => {
    button.addEventListener("click", () => {
        const product = button.dataset.product;
        const value = Number(button.dataset.value);

        // Standard Meta event: AddToCart
        if (typeof fbq === "function") {
            fbq("track", "AddToCart", {
                content_name: product,
                content_type: "product",
                value: value,
                currency: "USD"
            });
        }

        const message = document.getElementById("cart-message");
        message.textContent = `${product} was added to your demo cart.`;
    });
});

document.getElementById("lead-form").addEventListener("submit", event => {
    event.preventDefault();

    // The thank-you page fires the Lead event.
    window.location.href = "thank-you.html";
});
