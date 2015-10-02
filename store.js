/**
 * Created by michaelkober on 2015-10-02.
 */

var database = {
    users : [{"name":"Mike",passport: "123456", allergies: "ägg", "email":"michael.kober@jayway.com","longitude": "12.784406","latitude": "55.941582"}, {"name":"Erik","email":"erik@jayway.com","longitude": "12.804137","latitude": "55.945024"}, {"name":"Andreas","email":"andreas@jayway.com","longitude": "12.770166","latitude": "55.960413"}],
    logMessages: [{message: "KHelg travel created!"}, {"name": "Nisse", message: "Snart dags att skriva in passnummmer."}],
    events: [{"title":"Going out for a beer","description":"Örenäs is known for it's famous pubs and local breweries. Let's go out and drink some beers.", from: "20:00", to: "23:00", participants:[{"name": "Mike", "id":"0"}]},{"title":"Take a walk","description":"Take a walk around Örenäs castle.", from: "10:00", to: "11:00", participants:[{"name": "Erik", "id":"1"},{"name": "Andreas", "id":"2"}]},,{"title":"Trip to Kallbadhus Bjärred","description":"Make a trip to Bjärred and visit the Kallbadhus.", from: "18:00", to: "19:00", participants:[{"name": "Mike", "id":"0"},{"name": "Andreas", "id":"2"}]}],
    infos: [{"title":"Agenda","description":"09:00 Frukost\n10:00 Trip to Landskrona.\n20:00 Beer"}]
};


function update(callback) {
  var msg = callback(database);
  console.log('update: ', msg);
  msg && database.logMessages.push({message: msg});
}
module.exports = {
  update: update,
  db: database
}
