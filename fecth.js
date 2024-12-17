const origin = "https://openlibrary.org/";

async function searchBook(event) {
  event.preventDefault();
  const params = new URLSearchParams({
    title: event.target.search.value,
  });

  const searchBtn = document.querySelector("form button[type=submit]");
  const searchBtnText = document.querySelector("button p");
  const loader = document.querySelector("button .loader");
  try {
    //gunakan fecth dengan melalui object request
    const url = `${origin}/search.json?${params.toString()}`;
    const request = new Request(url);
    // disable button, hide text and show loader
    searchBtn.disabled = true;
    searchBtnText.classList.add("hidden");
    loader.classList.remove("hidden");

    const response = await fetch(request);
    // biasanya error di tangani oleh catch
    // ada beberapa error yang tidak masuk catch , 404
    if (!response.ok) throw new Error(response.statusText);

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  } finally {
    // enable button, show text and hide loader
    searchBtn.disabled = false;
    searchBtnText.classList.remove("hidden");
    loader.classList.add("hidden");
  }
}

// async function searchBook(event) {
//   event.preventDefault();
//   const params = new URLSearchParams({
//     title: event.target.search.value,
//   });

//   const searchBtn = document.querySelector("form button[type=submit]");
//   const searchBtnText = document.querySelector("button p");
//   const loader = document.querySelector("button .loader");

//   try {
//     const proxy = "https://cors-anywhere.herokuapp.com/";
//     const url = `${proxy}https://openlibrary.org/search.json?${params.toString()}`;
//     const request = new Request(url);

//     // Disable button, show loader
//     searchBtn.disabled = true;
//     searchBtnText.classList.add("hidden");
//     loader.classList.remove("hidden");

//     const response = await fetch(request);
//     if (!response.ok) throw new Error(response.statusText);

//     const json = await response.json();
//     console.log(json); // Check the fetched data
//   } catch (error) {
//     console.log("Error:", error.message);
//   } finally {
//     // Re-enable button
//     searchBtn.disabled = false;
//     searchBtnText.classList.remove("hidden");
//     loader.classList.add("hidden");
//   }
// }

async function createList(event) {
  event.preventDefault();

  const searchBtn = document.querySelector("form:nth-child(2) button");
  const searchBtnText = document.querySelector("p");
  const loader = document.querySelector(".loader");
  const body = {
    name: event.target.listname.value,
    description: event.target.description.value,
  };

  try {
    const user = "habibmr";
    const url = `${origin}/people?${user}/list`;
    const request = new Request(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    // disable button, hide text and show loader
    searchBtn.disabled = true;
    searchBtnText.classList.add("hidden");
    loader.classList.remove("hidden");

    const response = await fetch(request);
    // biasanya error di tangani oleh catch
    // ada beberapa error yang tidak masuk catch , 404
    if (!response.ok) throw new Error(response.statusText);

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  } finally {
    // enable button, show text and hide loader
    searchBtn.disabled = false;
    searchBtnText.classList.remove("hidden");
    loader.classList.add("hidden");
  }
}
