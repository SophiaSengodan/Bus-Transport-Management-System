function searchBus() {
    let input = document.getElementById("search");
    let filter = input.value.toLowerCase();
    let table = document.getElementById("busTable");
    let rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
        let route = rows[i].getElementsByTagName("td")[1];

        if (route) {
            let text = route.textContent.toLowerCase();

            if (text.includes(filter)) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
}

function bookBus(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let busNo = document.getElementById("busNo").value;
    let date = document.getElementById("date").value;

    document.getElementById("message").innerHTML =
        "Booking successful!<br>" +
        "Passenger: " + name + "<br>" +
        "Bus Number: " + busNo + "<br>" +
        "Travel Date: " + date;

    document.querySelector("form").reset();
}
