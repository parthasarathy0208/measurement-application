function showTop() {
    document.getElementById("topPage").style.display = "block";
    document.getElementById("resultPage").style.display = "none";
    document.getElementById("pantPage").style.display = "none";
    document.getElementById("pantResultPage").style.display = "none";
}

function calculateTop() {

    let height = document.getElementById("height").value;
    let chest = document.getElementById("chest").value;
    let shoulder = document.getElementById("shoulder").value;
    let waist = document.getElementById("waist").value;
    let seat = document.getElementById("seat").value;

    // ✅ Validation: check empty fields
    if (height === "" || chest === "" || shoulder === "" || waist === "" || seat === "") {
        alert("Please enter all Top measurements before calculating.");
        return; // stop function here
    }

    // Convert to numbers
    height = parseFloat(height);
    chest = parseFloat(chest);
    shoulder = parseFloat(shoulder);
    waist = parseFloat(waist);
    seat = parseFloat(seat);

    // Show entered values
    document.getElementById("rHeight").value = height;
    document.getElementById("rChest").value = chest;
    document.getElementById("rShoulder").value = shoulder;
    document.getElementById("rWaist").value = waist;
    document.getElementById("rSeat").value = seat;

    // ===== FORMULAS =====

    let cHeight = height + 2;
    let cChest = (chest / 4) + 1.25;

    let cShoulder;
    if (shoulder <= 15) {
        cShoulder = ((shoulder - 3) / 2) + 0.25;
    } else {
        cShoulder = ((shoulder - 4) / 2) + 0.25;
    }

    let cCentre = (cChest - cShoulder) / 2;
    let cXY = (chest / 4) - 0.50 - cCentre;

    let cWasteLine = 6.5;
    let cSeatLine = 7.5;

    let cChest2 = cChest;
    let cWaist = (waist / 4) + 0.50;
    let cSeat2 = (seat / 4) + 0.50;

    // Bottom logic
    let cBottomTop;
    if (cSeat2 <= 10) {
        cBottomTop = 10;
    } else {
        cBottomTop = cSeat2;
    }

    // ===== DISPLAY VALUES =====
    document.getElementById("cHeight").value = cHeight.toFixed(2);
    document.getElementById("cChest").value = cChest.toFixed(2);
    document.getElementById("cShoulder").value = cShoulder.toFixed(2);
    document.getElementById("cCentre").value = cCentre.toFixed(2);
    document.getElementById("cXY").value = cXY.toFixed(2);
    document.getElementById("cWasteLine").value = cWasteLine;
    document.getElementById("cSeatLine").value = cSeatLine;
    document.getElementById("cChest2").value = cChest2.toFixed(2);
    document.getElementById("cWaist").value = cWaist.toFixed(2);
    document.getElementById("cSeat2").value = cSeat2.toFixed(2);
    document.getElementById("cBottomTop").value = cBottomTop.toFixed(2);

    // Switch pages
    document.getElementById("topPage").style.display = "none";
    document.getElementById("resultPage").style.display = "block";
}

function showPant() {
    document.getElementById("pantPage").style.display = "block";
    document.getElementById("pantResultPage").style.display = "none";
    document.getElementById("topPage").style.display = "none";
    document.getElementById("resultPage").style.display = "none";
}

function calculatePant() {

    let height = document.getElementById("pHeight").value;
    let hip = document.getElementById("pHip").value;
    let seat = document.getElementById("pSeat").value;
    let knee = document.getElementById("pKnee").value;
    let bottom = document.getElementById("pBottom").value;

    // ✅ Validation: check empty fields
    if (height === "" || hip === "" || seat === "" || knee === "" || bottom === "") {
        alert("Please enter all Pant measurements before calculating.");
        return; // stop function here
    }

    // Convert to numbers
    height = parseFloat(height);
    hip = parseFloat(hip);
    seat = parseFloat(seat);
    knee = parseFloat(knee);
    bottom = parseFloat(bottom);

    // Show entered values
    document.getElementById("rpHeight").value = height;
    document.getElementById("rpHip").value = hip;
    document.getElementById("rpSeat").value = seat;
    document.getElementById("rpKnee").value = knee;
    document.getElementById("rpBottom").value = bottom;

    // Calculations
    let pcHeight = height + 4;
    let pcSeat1 = (seat / 6) + 1;
    let pcSeat2 = (seat / 3) + 2;
    let pcSeat3 = (seat / 4) + 2;
    let pcSeat4 = (seat / 2);
    let pcKnee = (knee / 2) + 0.5;
    let pcBottom = (bottom / 2) + 0.5;

    // Display calculated values
    document.getElementById("pcHeight").value = pcHeight.toFixed(2);
    document.getElementById("pcSeat1").value = pcSeat1.toFixed(2);
    document.getElementById("pcSeat2").value = pcSeat2.toFixed(2);
    document.getElementById("pcSeat3").value = pcSeat3.toFixed(2);
    document.getElementById("pcSeat4").value = pcSeat4.toFixed(2);
    document.getElementById("pcKnee").value = pcKnee.toFixed(2);
    document.getElementById("pcBottom").value = pcBottom.toFixed(2);

    // Switch pages
    document.getElementById("pantPage").style.display = "none";
    document.getElementById("pantResultPage").style.display = "block";
}

function resetTop() {
    document.getElementById("height").value = "";
    document.getElementById("chest").value = "";
    document.getElementById("shoulder").value = "";
    document.getElementById("waist").value = "";
    document.getElementById("seat").value = "";
}
function resetPant() {
    document.getElementById("pHeight").value = "";
    document.getElementById("pHip").value = "";
    document.getElementById("pSeat").value = "";
    document.getElementById("pKnee").value = "";
    document.getElementById("pBottom").value = "";
}
