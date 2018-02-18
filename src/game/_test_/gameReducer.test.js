import reducer from '../reducers/gameReducer'
import * as types from '../actions/actionTypes'
import CardData from '../../deck/CardData'

let card1 = new CardData("4","clubs");
let card2 = new CardData("5","spades");

describe('game reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        activePlayer: 0, 
        cards: [null, null], 
        scores: [0, 0]
      }
    )
  })

  it('should handle StartGame', () => {
    expect(
      reducer([], {
        type: types.StartGame
      })
    ).toEqual(
      {
        activePlayer: 0, 
        cards: [null, null], 
        scores: [0, 0]
      }
    )
  })

  it('should handle PickCard Player 1', () => {
    expect(
      reducer(
        {
          activePlayer:0,
          cards:[null, null]
        }
    , {
        type: types.PickCard,
        card:card1
      })
    ).toEqual(
      {
        activePlayer:1,
        cards:{0:card1, 1:null}
      }
    )
  })

  it('should handle PickCard Player 2', () => {
    expect(
      reducer(
        {
          activePlayer:1,
          cards:[card1, null]
        }
      , 
      {
        type: types.PickCard,
        card:card2
      })
    ).toEqual(
      {
        activePlayer:0,
        cards:{0:card1, 1:card2}
      }
    )
  })

  it('should handle EvaluateRound', () => {
    expect(
      reducer({
        cards:{0:card1, 1:card2},
        scores: [0, 0]
      },
      {
        type: types.EvaluateRound
      })
    ).toEqual(
      {
        cards: [null, null], 
        scores: [0, 1]
      }
    )
  })
})