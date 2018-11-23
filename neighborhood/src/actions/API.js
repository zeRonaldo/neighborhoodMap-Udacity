const api = "https://api.foursquare.com/v2"
const apiID= "client_id=KYX00UGARA5N45WJOVVQVLTRZA0TEFYBZYTCVMKU5NPYKDNS"
const apiSecret= "client_secret=1DFUDINGTAYFIPYABZA43RFLO0IGHTO2GA05V5UNSFZWKHPP"
const headers = {
    'Accept' : 'application/json'
}

export async function  getAllPlaces() {
    let all = []
   await getAllBars().then( result => {
        result.map( place => {
            all= [...all, {
                id: place.venue.id,
                name: place.venue.name,
                category: 'bars',
                locationTxt: place.venue.location.address,
                neighborhood: place.venue.location.neighborhood,
                location:{
                  lat: place.venue.location.lat,
                  lng: place.venue.location.lng
                }
            }];
        })      
      });
    await getAllRestaurant().then( result => {
        result.map( place => {
            all= [...all, {
                id: place.venue.id,
                name: place.venue.name,
                category: 'restaurants',
                locationTxt: place.venue.location.address,
                neighborhood: place.venue.location.neighborhood,
                location:{
                  lat: place.venue.location.lat,
                  lng: place.venue.location.lng
                }
            }];
        })      
      });;
    await getAllLandscape().then( result => {
        result.map( place => {
            all= [...all, {
                id: place.venue.id,
                name: place.venue.name,
                category: 'landscapes',
                locationTxt: place.venue.location.address,
                neighborhood: place.venue.location.neighborhood,
                location:{
                  lat: place.venue.location.lat,
                  lng: place.venue.location.lng
                }
            }];
        })      
      });;
   
    
    return all;
}

export const getAll = () =>
    fetch(`${api}/users/523939690/lists?${apiID}&${apiSecret}&v=20181123`, {headers})
        .then(res => res.json())
        .then( data => data)


export const getAllBars = () => 
    fetch(`${api}/lists/5bf72eb082a750003958c054?${apiID}&${apiSecret}&v=20181123`, {headers})
        .then(res => res.json())
        .then(data => data.response.list.listItems.items)

export const getAllRestaurant = () =>
    fetch(`${api}/lists/5bf72fe10d173f002cce56b5?${apiID}&${apiSecret}&v=20181123`, {headers})
    .then(res => res.json())
    .then(data => data.response.list.listItems.items)

export const getAllLandscape = () =>
    fetch(`${api}/lists/5bf72de3b3c961002c3f0a43?${apiID}&${apiSecret}&v=20181123`, {headers})
    .then(res => res.json())
    .then(data => data.response.list.listItems.items)

export const addToAll = (results) =>{
    let list= [];
    console.log(results);
    results.forEach(result => {
        result.map(place => {
            list.push(place);
        })
    });
    return list;
}