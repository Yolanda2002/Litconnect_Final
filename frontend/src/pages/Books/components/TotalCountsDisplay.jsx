import React from 'react';

const TotalCountsDisplay = ({ data }) => {
    // 初始化计数
    let totalLikes = 0;
    let totalComments = 0;
    let totalFavorites = 0;
    let totalReviews = 0;

    // 累加每个月的数量
    Object.values(data).forEach(item => {
        totalLikes += item.likeCount;
        totalComments += item.commentCount;
        totalFavorites += item.favoriteCount;
        totalReviews += item.reviewCount;
    });

    // 定义阴影样式
    const boxShadowStyle = 'rgba(0, 0, 0, 0.1) 0px 4px 12px';
    const borderRadiusStyle = '8px';

    return (
        
        <div className={'grid grid-cols-2 gap-4  py-4'}>
            
            <div style={{ flex: '50%', padding: '10px', boxSizing: 'border-box', backgroundColor: 'white', boxShadow: boxShadowStyle , borderRadius: borderRadiusStyle}}>
                <h2 className='text-center'>Total Likes</h2>
                <p className='text-center  text-2xl'>{totalLikes}</p>
            </div>
            <div style={{ flex: '50%', padding: '10px', boxSizing: 'border-box', backgroundColor: 'white', boxShadow: boxShadowStyle, borderRadius: borderRadiusStyle }}>
                <h2 className='text-center'>Total Comments</h2>
                <p className='text-center  text-2xl'>{totalComments}</p>
            </div>
            <div style={{ flex: '50%', padding: '10px', boxSizing: 'border-box', backgroundColor: 'white' , boxShadow: boxShadowStyle, borderRadius: borderRadiusStyle}}>
                <h2 className='text-center'>Total Favorites</h2>
                <p className='text-center  text-2xl'>{totalFavorites}</p>
            </div>
            <div style={{ flex: '50%', padding: '10px', boxSizing: 'border-box', backgroundColor: 'white' , boxShadow: boxShadowStyle, borderRadius: borderRadiusStyle}}>
                <h2 className='text-center'>Total Reviews</h2>
                <p className='text-center  text-2xl'>{totalReviews}</p>
            </div>
        </div>
    );
};

export default TotalCountsDisplay;
