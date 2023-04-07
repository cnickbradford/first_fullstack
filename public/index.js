const ulEl = document.querySelector('ul');

fetch(`/dnd/class`)
    .then(res => res.json())
    .then(data => {

        data.forEach(element => {
          console.log(data)
            let cardEl = document.createElement('div')
            cardEl.classList.add('card')
            let listEl = document.createElement('li')
            listEl.append(cardEl)
            ulEl.innerHTML += (makeCard(element))

        });
    })


function makeCard(element) {
    return ` <li>
        <div class="card">
        <h1>${element.name}</h1>
        <input type="textbox">
        <button onclick = "postComment(event)" classid = "${element.id}">add cd</button> 
        </div>
    </li>`
}

async function postComment(event){
    let cardEl = event.target.parentNode
    let id = event.target.getAttribute('classid')
    let comment =  {'comment': event.target.previousElementSibling.value}
    try {
        const response = await fetch(`/dnd/class/${id}`, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(comment),
        });
    
        const result = await response.json();
        console.log("Success:", result);
        cardEl.innerHTML += result.comment
      } catch (error) {
        console.error("Error:", error);
      }
}