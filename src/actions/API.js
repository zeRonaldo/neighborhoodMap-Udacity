const api = "https://api.foursquare.com/v2"
const apiID= "client_id=LW2JNPOKB1YSLROQ1R0BAVVOHV2VWTJV0WOYYMPEJAAJ4HL3"
const apiSecret= "client_secret=4GZM2DYX1JUTIEKISTTBWUVTM2MY4GH2WJ2TSIYTYJMW4OM5"
const headers = {
    'Accept' : 'application/json'
}

export async function  getAllPlaces() {
    let all = []
   await getAllBars().then( result => {
        result.map( place => {
           return all = [...all, {
                id: place.venue.id,
                name: place.venue.name,
                category: ['bars'],
                locationTxt: place.venue.location.address,
                neighborhood: place.venue.location.neighborhood,
                photo: place.photo.prefix+'250x250'+place.photo.suffix,
                photographer: place.photo.user.firstName,
                location:{
                  lat: place.venue.location.lat,
                  lng: place.venue.location.lng
                }
            }];
        })      
      });
    await getAllRestaurant().then( result => {
        result.map( place => {
            return all= [...all, {
                id: place.venue.id,
                name: place.venue.name,
                category: ['restaurants'],
                locationTxt: place.venue.location.address,
                neighborhood: place.venue.location.neighborhood,
                photo: place.photo.prefix+'250x250'+place.photo.suffix,
                photographer: place.photo.user.firstName,
                location:{
                  lat: place.venue.location.lat,
                  lng: place.venue.location.lng
                }
            }];
        })      
      });
    await getAllLandscape().then( result => {
        result.map( place => {
            return all= [...all, {
                id: place.venue.id,
                name: place.venue.name,
                category: ['landscapes'],
                locationTxt: place.venue.location.address,
                neighborhood: place.venue.location.neighborhood,
                photo: place.photo.prefix+'250x250'+place.photo.suffix,
                photographer: place.photo.user.firstName,
                location:{
                  lat: place.venue.location.lat,
                  lng: place.venue.location.lng
                }
            }];
        })      
      });
      
      all = addToAll(all);
    
    return all;
}

export const getAll = () =>
    fetch(`${api}/users/523939690/lists?${apiID}&${apiSecret}&v=20181123`, {headers})
        .then(res => res.json())
        .then( data => data)


export const getAllBars = () => 
    fetch(`${api}/lists/5bf72eb082a750003958c054?${apiID}&${apiSecret}&v=20181123`, {headers})
        .then(res => res.json())
        .then(data => {return data.response.list.listItems.items})

export const getAllRestaurant = () =>
    fetch(`${api}/lists/5bf72fe10d173f002cce56b5?${apiID}&${apiSecret}&v=20181123`, {headers})
    .then(res => res.json())
    .then(data => data.response.list.listItems.items)

export const getAllLandscape = () =>
    fetch(`${api}/lists/5bf72de3b3c961002c3f0a43?${apiID}&${apiSecret}&v=20181123`, {headers})
    .then(res => res.json())
    .then(data => data.response.list.listItems.items)


export const getPlace = (id) => 
    fetch(`${api}/venues/${id}?${apiID}&${apiSecret}&v=20181123`, {headers})
    .then(res => res.json())
    .then(data => {
        let placeDetails = data.response.venue;
        return placeDetails;
    })
    
export const addToAll = (results) =>{
    let list= [];
    results.forEach(place => {
        if(list.length > 0){
            let onList = list.findIndex( item => item.id === place.id);
            if(onList !== -1){
                list[onList].category.push(place.category);
            }else{
                return list.push(place);
            }
            
        }else{
            return list.push(place)
        }
            
        })
   
    return list;
}