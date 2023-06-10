const handleSubmitForm = async (e) => {
  e.preventDefault();
  const body = new FormData(form);
  body.append("created_at", new Date().getTime());
  try {
    const res = await fetch("/items", {
      method: "POST",
      body: body,
    });
    const data = await res.json();
    if (data === "200") {
      window.location.pathname = "/";
    }
  } catch (e) {
    console.error("error occure" + e);
  }
};
const form = document.querySelector(".write-form");
form.addEventListener("submit", handleSubmitForm);
