import styles from "./ProductAddCard.module.css"

function addProduct(data) {
    console.log(data)
    return  fetch( "http://localhost:8000/api/product", {
        method: "Post",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
}

function ProductAddCard() {
    async function onClick(event) {
        event.preventDefault();
        const data = {
            name: event.target.elements.name.value,
            description: event.target.elements.description.value,
            category: event.target.elements.category.value,
            price: event.target.elements.cost.value
        }
        await addProduct(data)
    }

    return (
        <div className={styles.productAdd}>
            <div className={styles.file}>
                <img src="https://pcavto.com/image/cache/catalog/farcar/rl_screenshots/RL_FarCar_screenshots_06-1024x768.jpg" alt={"file"}/>
                <input type="file"/>
            </div>
            <div className={styles.productAdd__content}>
                <form className={styles.productAdd__form} onSubmit={onClick}>
                    <input
                        placeholder="Название"
                        type="text"
                        id="name"
                    />
                    <input
                        placeholder="Описание"
                        type="textarea"
                        id="description"
                    />
                    <input
                        placeholder="Категория"
                        type="text"
                        id="category"
                    />
                    <input
                        placeholder="Стоимость"
                        type="number"
                        id="cost"
                    />
                    <button type="submit" className={styles.productAdd__content_button}>
                        Добавить товар
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ProductAddCard