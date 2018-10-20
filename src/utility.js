const shakespeareApi = "https://api.graph.cool/simple/vi/shakespeare"


let options = {
    method: "POST",
    header: {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify( {

        }
    )
}


function randomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}