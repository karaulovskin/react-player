import React from "react";
import { Root, Row, Col, TitlePrimary, TitleRemixed } from './styles';
import pic from './pic.jpg';

const tracks = [
  {
    id: 1,
    titlePrimary: 'Morgen',
    titleRemixed: 'Original Mix',
    trackArtists: 'Stephan Jolk',
    trackGenres: 'Melodic House & Techno',
    trackTime: '6:19',
    trackKey: 'C Major',
    trackBpm: '124 BPM',
    trackLabel: 'Afterlife Records',
    trackReleased: '2021-07-23',
    trackBuy: 'August 6, 2021',
  },
  {
    id: 2,
    titlePrimary: 'Just A Machine',
    titleRemixed: 'Original Mix',
    trackArtists: 'Fred Lenix',
    trackGenres: 'Techno (Peak Time / Driving)',
    trackTime: '6:27',
    trackKey: 'C Major',
    trackBpm: '127 BPM',
    trackLabel: 'ELEVATE',
    trackReleased: '2021-01-15',
    trackBuy: 'August 6, 2021',
  },
];


const list = tracks.map((
  {
    id,
    titlePrimary,
    titleRemixed,
    trackArtists,
    trackGenres,
    trackTime,
    trackKey,
    trackBpm,
    trackLabel,
    trackReleased,
    trackBuy,
  }) =>
  <Root key={id}>
    <Row>
      <Col>
        <img src={ pic }  alt="Stephan Jolk"/>
      </Col>
      <Col>
        <div>
          <TitlePrimary>{titlePrimary}</TitlePrimary>
          <TitleRemixed>{titleRemixed}</TitleRemixed>
        </div>
        <div>
          <span>{trackArtists}</span>
        </div>
      </Col>
      <Col>
        <div>
          <span>{trackGenres}</span>
        </div>
        <div>
          <span>{trackTime}</span>
        </div>
      </Col>
      <Col>
        <div>
          <span>{trackKey}</span>
        </div>
        <div>
          <span>{trackBpm}</span>
        </div>
      </Col>
      <Col>
        <div>
          <span>{trackLabel}</span>
        </div>
        <div>
          <span>{trackReleased}</span>
        </div>
      </Col>
      <Col>
        <div>
          <span>{trackBuy}</span>
        </div>
      </Col>
    </Row>
  </Root>
);

const Tracks = () => {
  return (
    <>
      {list}
    </>
  )
}

export default Tracks;