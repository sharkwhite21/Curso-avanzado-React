import styled, { css, keyframes } from 'styled-components'
import { bounceDown } from '../../styles/animation'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  ${props => props.fixed && css`
    {
      ${bounceDown({ time: '1s' })}
      background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20 rgba(0,0,0, 0.3);
      left: 0;
      right: 0;
      margin: 0 auto;
      max-width: 400px;
      padding: 5px;
      position: fixed;
      top: -20px;
      transform: scale(0.5);
      z-index: 2;
    }

  `}
`

export const Item = styled.li`
  padding: 0 8px;
`
const ldsFacebook = keyframes`
    0% {
        top: 6px;
        height: 51px;
    }
    50%, 100% {
        top: 19px;
        height: 26px;
    }
`

export const SquareLoading = styled.div`
    display: block;
    position: relative;
    width: 64px;
    height: 64px;
    margin: 0 auto 5px;
`
export const SquareInside = styled.div`
    display: inline-block;
    position: absolute;
    left: 6px;
    width: 13px;
    background: #222;
    animation: ${ldsFacebook} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    &:nth-child(1) {
        left: 6px;
        animation-delay: -0.24s;
    }
    &:nth-child(2) {
        left: 26px;
        animation-delay: -0.12s;
    }
    &:nth-child(3) {
        left: 45px;
        animation-delay: 0;
    }
`
