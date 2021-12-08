import Head from 'next/head';
import Navegation from "./Navigation";

const Container =(props) => {
    return (
    <div >
    <Head>
        <title>Next Js</title>
        <link rel = "stylesheet" href = 'https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/cerulean/bootstrap.min.css'/>
    </Head>
        <Navegation/>
        <div className='container'>
        {props.children}

        </div>
    </div>
    )
}

export default Container;