import { FinishGame } from "../actions";

const defaultState = {
    winnerList: []
};

export default function (state = defaultState, action) {
    switch (action.type) {
        case FinishGame:
            let newWinner = {
                winner: action.winner,
                score: action.score
            }

            return {
                ...state,
                winnerList: [...state.winnerList, { ...newWinner }]
            };
        default:
            return state;
    }
}
