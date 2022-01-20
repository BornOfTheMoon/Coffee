import styles from "./ProductAdd.module.css"

function ProductAdd() {
    return (
        <div className={styles.productAdd}>
            <div className={styles.file}>
            <img src="https://pcavto.com/image/cache/catalog/farcar/rl_screenshots/RL_FarCar_screenshots_06-1024x768.jpg"/>
                <input type="file"/>
            </div>
            <div className={styles.productAdd__content}>
                    <form className={styles.productAdd__form}>
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

export default ProductAdd

