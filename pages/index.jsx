import { React } from "react";
import Container from "../components/Container";
import Users from "../components/Users";
import Head from 'next/head';
import fetch from "isomorphic-fetch";

const Index = (props) => {
    return (
        <div>
            <Container>
                <Head>
                <title>Next Js</title>
                <link rel="stylesheet" href='https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/cerulean/bootstrap.min.css' />
            </Head>
            <h1>Next</h1>
            <Users users={props.users}/>
            </Container>
            
        </div>
    );


}
Index.getInitialProps = async (ctx) => {
    const res = await fetch('https://reqres.in/api/users');
    const resJson = await res.json();
    return { users: resJson.data };
}
export default Index