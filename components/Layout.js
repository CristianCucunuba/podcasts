import Link from "next/link";
import Head from "next/head";

export default class Layout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Head>
                    <title>{this.props.title}</title>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                </Head>
                <header>
                    <Link href="/">
                        <a>Podcasts</a>
                    </Link>
                </header>
                {this.props.children}
                <style jsx>
                    {`
                        header {
                            color: #fff;
                            background: #001D4A;
                            padding: 15px;
                            text-align: center;
                        }
                        header a {
                            text-decoration: none;
                            color: #fff;
                            font-weight: 700;
                            font-size: 30px;
                        }
                    `}
                </style>
                <style jsx global>
                    {`
                        body {
                            margin: 0;
                            background: white;
                            font-family: system-ui;
                        }
                    `}
                </style>
            </React.Fragment>
        );
    }
}
