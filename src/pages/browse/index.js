import React from 'react';
import { Container, Title, List, Playlist } from './styles';


const Browse = () => (
  <Container>
    <Title>Navegar</Title>
    <List>
      <Playlist to="/playlists/1">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Iowa_10th_Anniversary_Cover.jpg/220px-Iowa_10th_Anniversary_Cover.jpg"
               alt="PlayList"/>
          <strong>Rock dos Bons</strong>              
          <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial!</p>
      </Playlist>
      <Playlist to="/playlists/1">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Iowa_10th_Anniversary_Cover.jpg/220px-Iowa_10th_Anniversary_Cover.jpg"
               alt="PlayList"/>
          <strong>Rock dos Bons</strong>              
          <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial!</p>
      </Playlist>
      <Playlist to="/playlists/1">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Iowa_10th_Anniversary_Cover.jpg/220px-Iowa_10th_Anniversary_Cover.jpg"
               alt="PlayList"/>
          <strong>Rock dos Bons</strong>              
          <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial!</p>
      </Playlist>
      <Playlist to="/playlists/1">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Iowa_10th_Anniversary_Cover.jpg/220px-Iowa_10th_Anniversary_Cover.jpg"
               alt="PlayList"/>
          <strong>Rock dos Bons</strong>              
          <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial!</p>
      </Playlist>
    </List>
  </Container>
)

export default Browse; 