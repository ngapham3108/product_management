import style from "./NotFoundPage.module.css"

function NotFoundPage () {
    return (
        <div className={style.background} style={{textAlign: 'center'}}>
            <h1>404 Page Not Found !!!</h1>
        </div>
    );
}

export default NotFoundPage;