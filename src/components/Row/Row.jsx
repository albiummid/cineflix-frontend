import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import tmdb from '../../Axios/TMDB'
import { tmdbImg } from '../../Axios/request'
import SwipeSlider from '../SwipeSlider/SwipeSlider'
import { SwiperSlide } from 'swiper/react'

export default function Row({ rowTitle, fetchURL, delay }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    tmdb
      .get(fetchURL)
      .then((res) => setData(res.data.results))
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) <p>Loading...</p>

  return (
    <RowContainer key={rowTitle}>
      <h1 className='title'>{rowTitle}</h1>
      <SwipeSlider delay={delay}>
        {data.map((item) => {
          let releaseDate = item.release_date
          const rD = releaseDate?.slice(0, 4)
          return (
            <SwiperSlide key={item.key}>
              <PoserCard>
                <img src={tmdbImg + item.poster_path} alt={item.title} />
                <div className='desc'>
                  <p>
                    {item.title} ({rD})
                  </p>
                  <h3>{item.vote_average}</h3>
                </div>
                <div className='info'></div>
              </PoserCard>
            </SwiperSlide>
          )
        })}
      </SwipeSlider>
    </RowContainer>
  )
}

const PoserCard = styled.div`
  cursor: pointer;
  width: 100%;
  :hover {
    transform: scale(105%);
  }
  img {
    width: 100%;
    height: fit-content;
    position: relative;
  }
  :hover {
    .info {
      opacity: 0.7;
    }
  }
  .desc {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
    color: white;
    width: 100%;
    height: fit-content;
    padding: 10px 20px;
    p {
      margin: 0;
    }
    h3 {
      float: right;
      color: yellow;
      margin: 0;
      font-size: 1.5rem;
    }
    background: linear-gradient(
      180deg,
      rgba(53, 59, 80, 0),
      rgba(3, 3, 5, 0.884) 70%,
      rgba(0, 0, 0, 0.87)
    );
    @media (max-width: 640px) {
      b {
        font-size: smaller;
        font-weight: normal;
      }
    }
  }
`
const RowContainer = styled.div`
  position: relative;
  background-color: #0d1218;
  margin: 60px auto;
  color: white;
  padding: 20px;
  .title {
    text-align: center;
    cursor: pointer;
    color: white;
    border: 2px dashed white;
    width: fit-content;
    padding: 5px 10px;
    :hover {
      border: 2px dashed teal;
      color: #08f0f0;
    }
  }
`
