window.wtf2 = document.getElementById("wtf")

window.dataFormHandler = async () => {
    // event.preventDefault();

    const id = document.getElementById("id").value
    const name = document.getElementById("nayme").value
    const location = document.getElementById("location").value
    const length = document.getElementById("length").value
    const blog = document.getElementById("blog").value
    const data = {
        id: id,
        name: name,
        location: location,
        length: length,
        blog: blog
    }
    console.log(data)
    const response = await fetch('/add', {
        method: 'POST',
        body: JSON.stringify({ data }),
        headers: { 'Content-Type': 'application/json' },
      })
      if (response.ok) {
          console.log("we did it!!!")
      } else {
        alert(response.statusText);
      }
    
}

wtf2.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("click")
 dataFormHandler()
}
)