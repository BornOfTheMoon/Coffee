export const GetRequest = (defaultData, setData, URL) => {
    console.log("get")
    setData(defaultData)
    fetch(URL, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then((response) => response.json())
        .then((response) => {setData(response)})
}