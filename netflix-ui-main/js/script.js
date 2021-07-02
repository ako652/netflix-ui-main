const getData = async (url) => {
    
    try {
        const response = await fetch(url, 
        {
            
headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjA5MmIzNTgxNzAwMTVjMjI3MGIiLCJpYXQiOjE2MjUyMTI3ODMsImV4cCI6MTYyNjQyMjM4M30.0nEbWDQOAfP02w81gp-Weumaa1mK-y5OiUQ1Ncqk4IA"
}
})
        if (!response.ok) throw new Error("Failed to fetch")

        const events = await response.json()
        console.log(events)
        return events

    } catch (err) {
        console.log(err)
    } finally {
        console.log("I'm the last thing")
    }
}

const displayEvents = (events) => {
    const lastmovie = document.querySelector("#lastmovie")
    const middlemovies = document.querySelector("#middlemovies")
    const trendingnow = document.querySelector("#trending-now")
  
    lastmovie.innerHTML=""
    middlemovies.innerHTML=""
    trendingnow.innerHTML=""
    
        events.forEach(event => {
            lastmovie.innerHTML = lastmovie.innerHTML + `<div class="col-md-2">
            <img class="movie-cover" src=${event.imageUrl}">
            <div class="card-body text-secondary">
            <h5 id= "category"class="card-title">${event.category}</h5>
            <p id="description" class="card-text">${event.description}</p>
            <p id="name">${event.name}</p>
            <a href="./detail.html?id=${event._id}">VIEW DETAILS</a>
                
              </div>
        </div>
            `
            
            
        

        
            middlemovies.innerHTML = middlemovies.innerHTML + `<div class="col-md-2">
            <img class="movie-cover" src=${event.imageUrl}">
            <div class="card-body text-secondary">
            <h5 id= "category"class="card-title">${event.category}</h5>
            <p id="description" class="card-text">${event.description}</p>
            <p id="name">${event.name}</p>
            <a href="./detail.html?id=${event._id}">VIEW DETAILS</a>
                
              </div>
        </div>
            `
            
            
        

        
            trendingnow.innerHTML = trendingnow.innerHTML + `<div class="col-md-2">
            <img class="movie-cover" src=${event.imageUrl}">
            <div class="card-body text-secondary">
            <h5 id= "category"class="card-title">${event.category}</h5>
            <p id="description" class="card-text">${event.description}</p>
            <p id="name">${event.name}</p>
            <a href="./detail.html?id=${event._id}">VIEW DETAILS</a>
                
              </div>
        </div>
            `
        })  
            
        
    

}

window.onload = async () => {
    const url =  "https://striveschool-api.herokuapp.com/api/movies/" 

    const events = await getData(url)
    displayEvents(events)


    
    







}