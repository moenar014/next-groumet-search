import Link from 'next/link';

const ShopList = ({ shops }) => (
    <div className="shop-list">
        {shops.map(shop => (
            <div className="shop" key={shop.id}>
                <h2 className="shop-titile">{shop.name}{shop.address}</h2>
                <Link href={shop.urls.pc}>
                    <a>{shop.name}のホットペッパーのページへ</a>
                </Link>
            </div>
        ))}
    </div>
)

export default ShopList;