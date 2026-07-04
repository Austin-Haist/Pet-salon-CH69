let salon = {
    name: "Happy Paws Pet Salon",
    hours: {
        open: "9:00 AM",
        close: "6:00 PM"
    },
    phone: "111-555-1234",
    address: {
        street: "123 Main Street",
        city: "San Diego",
        state: "CA",
        zip: "1234"
    }
};

function displaySalonInfo() {
    let info = salon.name + " is located at " + salon.address.street + ", " + salon.address.city + ", " + salon.address.state + " " + salon.address.zip + ". Our hours of operation are from " + salon.hours.open + " to " + salon.hours.close + ". You can contact us at " + salon.phone + ".";

    document.getElementById("salonInfo").innerHTML = info;
}

displaySalonInfo();

