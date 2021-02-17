import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

const VideoFooter = () => {
  return (
    <div className='videoFooter'>
      <div className='videoFooter__text'>
        <h3>@mutasemKwaik</h3>
        <p>this is description</p>
        <div className='videoFooter__ticker'>
          <MusicNoteIcon className='videoFooter__icon' />
          <Ticker mode='smooth'>
            {({ index }) => (
              <>
                <p>hi there welcome here</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className='videoFooter__record'
        src='https://static.thenounproject.com/png/934821-200.png'
        alt=''
      />
    </div>
  );
};

export default VideoFooter;
