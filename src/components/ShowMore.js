import React from 'react';

function ShowMore({visible, count, showMore}) {
    return (
        <div className='showMore'>
            {
              visible >= count ? '' : (
                <div className='showMore__Button'>
                  <button onClick={showMore}>Show More</button>
                </div>
              )
            }
        </div>
    )
}

export default ShowMore;