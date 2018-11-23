const api = "https://api.foursquare.com/v2"
const apiID= "client_id=KYX00UGARA5N45WJOVVQVLTRZA0TEFYBZYTCVMKU5NPYKDNS"
const apiSecret= "client_secret=1DFUDINGTAYFIPYABZA43RFLO0IGHTO2GA05V5UNSFZWKHPP"
const headers = {
    'Accept' : 'application/json'
}

export const getAllPlaces = () => 
    fetch(`${api}/lists/5bf72eb082a750003958c054?${apiID}&${apiSecret}&v=20181123`, {headers})
        .then(res => res.json())
        .then(data => data.response.list.listItems)
