import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionsOverView = ({ collections }) => (
    <div className='collections-overview'>
         {collections.map(({id, ...OtherCollectionProps }) => (
             <CollectionPreview key={id} {...OtherCollectionProps}/>
         ))}
    </div>
);

const mapStateToProps = createStructuredSelector ({
    collections : selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverView);