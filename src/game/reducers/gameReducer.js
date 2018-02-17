import { EvaluateRound, PickCard, StartGame } from "../actions";

/**
 * Terminology used in the instructions:
 *
 * Game - a series of rounds where players are taking cards from the deck one by one. Game continues until there
 *        are any cards in the card deck
 *
 * Round - two consecutive turns made by players form a round. At the end of each round player with higher value card
 *         obtains one point
 */

// Default state of the game reducer
const defaultState = {
    activePlayer: 0, // index of current player - 0 or 1
    cards: [null, null], // player1 and player2 cards respectively
    scores: [0, 0] // player1 and player2 total score respectively
};

function getDefaultState() {
    return defaultState;
}

export default function (state = getDefaultState(), action) {
    switch (action.type) {
        case StartGame:
            // Action happens when new game started, should reset state to be same as default
            return { ...state };

        case PickCard:
            // Action stores card passed with action object to state and changes activePlayer to next player
            return { ...state };

        case EvaluateRound:
            // Action evaluates game round result and :
            //    - Adds points for the player who won by
            //      comparing player1 and player2 cards numeric value (see card data class)
            //    - Resets player's cards to default value
            return { ...state };
        default:
            return state;
    }
}
