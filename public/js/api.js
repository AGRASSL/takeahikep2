$(document).ready(function () {

//EVENT LISTENER ON 'SEARCH' BUTTON TO GIVE RESULTS ON SEARCH AND STORES SEARCH IN LOCAL STORAGE
$('.searchBtn').on('click', function(){
    let trailSearch = $("#searchItem").val();
    let oldTrail = JSON.parse(window.localStorage.getItem(trailSearch)) || [];
    oldTrail.push(trailStorageArr);
        console.log(trailSearch);
    window.localStorage.setItem("userTrail", JSON.stringify(trailSearch));
    $(".cardCol").style.display = "block";
});
//API CALL TO DISPLAY RESULTS BASED ON SEARCH
async function sendApiRequest(trailSearch) {
    let API_KEY = "XmWbylfho2r7DAcbZIzAhOUdKoJBEKKJ3qvDEg9f";
    let response = await fetch(
        `https://developer.nps.gov/api/v1/parks?stateCode=` + trailSearch + `limit=50&start=0&q=hiking&api_key=${API_KEY}`
    );
    let data = await response.json();
        console.log(data);
    if (data > 0) {
        cardPop(data);
    } else {
        $(".cardCol").style.display = "none";
    }
    function cardPop(ingData) {
        console.log(ingData);
        for (var i = 1; i < 11; i++) {
            $("#cardTitle" + i).text(ingData["hits"][i]["data"]["fullName"]);
            $("#cardInfo" + i).text(ingData["hits"][i]["data"]["description"]);
            var cardLinkURL = ingData["hits"][i]["data"]["url"];
            $("#cardLink" + i).attr("href", cardLinkURL); 
            var cardImgURL = ingData["hits"][i]["data"]["images"];
            $("#cardImg" + i).attr("src", cardImgURL); 
          }
    }
    cardPop(data);
}
});