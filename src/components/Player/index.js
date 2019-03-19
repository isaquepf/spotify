import React from 'react';
import Slider from 'rc-slider';

import {Container, Current, Volume, Progress, Controls, Time, ProgressSlider} from './styles';

import VolumeIcon from  '../../assets/images/volume.svg';
import ShuffleIcon from  '../../assets/images/shuffle.svg';
import BackwardIcon from  '../../assets/images/backward.svg';
import ForwardIcon from  '../../assets/images/forward.svg';
import PlayIcon from  '../../assets/images/play.svg';
import PauseIcon from  '../../assets/images/pause.svg';
import RepeatIcon from  '../../assets/images/repeat.svg';

const Player = () => (
    <Container>
        <Current>
            <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Iowa_10th_Anniversary_Cover.jpg/220px-Iowa_10th_Anniversary_Cover.jpg"
                alt="Cover"/>
            <div>
                <span>Iowa</span>
                <small>Slipknot</small>
            </div>
        </Current>

        <Progress>
            <Controls>
                <button>
                     <img src={ShuffleIcon} alt="Shuffle"/> 
                </button>
                <button>
                     <img src={BackwardIcon} alt="Backward"/> 
                </button>
                <button>
                     <img src={PlayIcon} alt="Play"/> 
                </button>
                <button>
                     <img src={ForwardIcon} alt="Forward"/> 
                </button>
                <button>
                     <img src={RepeatIcon} alt="Repeat"/> 
                </button>                
            </Controls>
            <Time>
                <span>1:39</span>
                <ProgressSlider>
                    <Slider railStyle={{ background: '#404040', borderRadius: 10 }}
                        trackStyle={{ background: '#1ED760'}}
                        handleStyle={{ border: 0 }}
                        ></Slider>
                </ProgressSlider>
                <span>4:24</span>
            </Time>
        </Progress>
        <Volume>
            <img src={VolumeIcon} alt="Volume"/>
            <Slider
                railStyle={{ background: '#404040', borderRadius: 10 }}
                trackStyle={{ background: '#FFF'}}
                handleStyle={{display: 'none'}}
                value={100}/>
        </Volume>
    </Container>
);

export default Player;
