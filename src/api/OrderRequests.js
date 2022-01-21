export function deleteOrder(order) {
    return  fetch( "http://localhost:8000/api/order", {
        method: "DELETE",
        body: JSON.stringify(order),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
}

export function addOrder(order) {
    console.log(order)
    return  fetch( "http://localhost:8000/api/order", {
        method: "Post",
        body: JSON.stringify(order),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
}