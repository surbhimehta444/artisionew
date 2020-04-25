const mainUrl = 'https://artiso.herokuapp.com/member/'
export const helper = (url, method, body) => {
    if(method === 'GET') {
        fetch(`${mainUrl}${url}`)               //converted to string
        .then((res) => res.json())
        .then((res) => {return res})    
    }

    return fetch(`${mainUrl}${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then((res) => res.json())
    .then((res) => {return res})
}
