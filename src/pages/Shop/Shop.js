import React from 'react';
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection';
// import './Shop.scss';
import SHOP_DATA from './shop.data';

const collections = SHOP_DATA;

function Shop() {
	return (
		<div className="shop-page">
			{collections.map(({ id, ...otherSectionProps }) => <PreviewCollection key={id} {...otherSectionProps} />)}
		</div>
	);
}

export default Shop;
