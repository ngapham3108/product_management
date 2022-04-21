import style from "./Home.module.css"

function Home () {
    return (
        <div className={style.background} style={{textAlign: 'center'}}>
            <h1>Welcome to our Product Management App</h1>
        </div>
    );
}

export default Home;