import fetch from 'isomorphic-fetch';
import Error from 'next/error';

class Index extends React.Component {

    static async getInitialProps() {
        const API_KEY = '43ca30a1fc202be9';
        const large_area = 'Z011'; //東京
        let shops;

        try {
            const response = await fetch(`http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${API_KEY}&large_area=${large_area}&format=json&count=10`);
            const resultsJson = await response.json();
            shops = resultsJson.results.shop;
        } catch (err) {
            console.log(err);
            shops = [];
        }

        
        return { shops };
    }

    render() {

        const { shops } = this.props;
        if (shops.length === 0) {
            return (
                <Error statusCode={503} />
            )
        }
        return (
            <div>
                <h1>Groumet Search</h1>
                <div>
                    {shops.map(shop => (
                        <h2 key={shop.id}>{ shop.name }{ shop.address }</h2>
                    ))}
                </div>
            </div>
        )
    }
}

export default Index;