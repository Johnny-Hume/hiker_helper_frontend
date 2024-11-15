function sendCreatePostRequest(){
    fetch("http://localhost:5000/post", {
	method: "POST",
	body: JSON.stringify(createPostObj()),
	headers: { "content-type": "application/json" }
    })
      .then(response => {
	if (!response.ok) {
	  throw new Error('Network response was not ok');
	}
	return response.json();
      })
      .then(data => {
	document.getElementById("statusOutput").innerText = "Post Created!"
	console.log(data)
      })
      .catch(error => {
	console.error('Error:', error);
      });
}

function createPostObj(){

    userId = document.getElementById("userId").value;
    userType = document.getElementById("userType").value;
    title = document.getElementById("title").value;
    pickup = document.getElementById("pickup").value;
    dropoff = document.getElementById("dropoff").value;
    date = document.getElementById("date").value;
    num_passengers = document.getElementById("num_passengers").value;

    return {
	user_id: userId,
	user_type: userType,
	title: title,
	pickup: pickup,
	dropoff: dropoff,
	date: date,
	num_passengers: num_passengers
    }
}

