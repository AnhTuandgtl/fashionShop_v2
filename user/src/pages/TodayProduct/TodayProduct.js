import React, { Fragment, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../../Redux/Actions/productActions';

import { Box, Pagination, Skeleton, Typography } from '@mui/material';
import styles from './TodayProduct.module.scss';
import Product from '~/components/Product/Product';
import { Message } from '@mui/icons-material';
import { Card } from 'react-bootstrap';
import useSearchParamsCustom from '~/hooks/useSearchParamCustom';
const NotFound = ({ children, empty }) => {
    if (empty) return children;
    return <Fragment />;
};
const MainSection = ({ children }) => {
    return (
        <div className={styles.containerTodayProduct}>
            <div className={styles.section}>
                <div className="row col-12">
                    <div className="row divider-custom">
                        <Typography color="primary" fontWeight={600}>
                            Sản phẩm hôm nay
                        </Typography>
                    </div>

                    <Fragment>{children}</Fragment>
                </div>
            </div>
        </div>
    );
};
const TodayProduct = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products, page, pages } = productList;

    const { replaceParams, getParamValue } = useSearchParamsCustom();
    const pageWantToMove = Number(getParamValue('page')) || 1;
    const pageSize = 42;
    let SkeletonOption = window.innerWidth > 540 ? [1, 2, 3, 4, 5, 6] : [1];

    const handleChangePage = (e, value) => {
        replaceParams([{ key: 'page', value }]);
    };
    useEffect(() => {
        dispatch(listProduct({ page: pageWantToMove - 1, limit: pageSize }));
    }, [dispatch, pageWantToMove]);

    if (loading)
        return (
            <MainSection>
                <div className=" d-flex justify-content-center">
                    {SkeletonOption.map((key) => (
                        <div key={key} className="col-lg-2 col-md-3 col-sm-4" style={{ padding: '15px 7.9px' }}>
                            <Skeleton variant="rectangular" width={'100%'} height={209} />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton width="60%" />
                        </div>
                    ))}
                </div>
            </MainSection>
        );

    if (error)
        return (
            <MainSection>
                <Message variant="alert-danger">{error}</Message>
            </MainSection>
        );
    if (products?.length === 0)
        return (
            <MainSection>
                <NotFound>
                    <div
                        className="col-lg-12 col-md-6 col-sm-6 d-flex align-content-center justify-center flex-column"
                        style={{ alignItems: 'center', justifyContent: 'center' }}
                    >
                        <div className="position-relative">
                            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/a60759ad1dabe909c46a817ecbf71878.png" />
                        </div>
                    </div>
                </NotFound>
            </MainSection>
        );

    return (
        <MainSection>
            <>
                {products?.map((product) => (
                    <div
                        className="col-lg-2 col-md-3 col-sm-6 mb-3"
                        style={{ paddingLeft: 4, paddingRight: 4 }}
                        key={product._id}
                    >
                        <Product product={product} />
                    </div>
                ))}
            </>
            {pages > 1 ? (
                <Box className="col-12 d-flex justify-content-center mb-5">
                    {<Pagination color="primary" count={pages} page={page + 1} onChange={handleChangePage} />}
                </Box>
            ) : null}
        </MainSection>
    );
};

export default TodayProduct;
