const pieces = {
    empty: 0,
    wP: 1,
    wN: 2,
    wB: 3,
    wR: 4,
    wQ: 5,
    wK: 6,
    bP: 7,
    bN: 8,
    bB: 9,
    bR: 10,
    bQ: 11,
    bK: 12
};

const boardSquaresNumber = 120;

const files = {
    fileA: 0,
    fileB: 1,
    fileC: 2,
    fileD: 3,
    fileE: 4,
    fileF: 5,
    fileG: 6,
    fileH: 7,
    fileNone: 8,
};

const ranks = {
    rank1: 0,
    rank2: 1,
    rank3: 2,
    rank4: 3,
    rank5: 4,
    rank6: 5,
    rank7: 6,
    rank8: 7,
    rankNone: 8,
};

const colors = {
    white: 0,
    black: 1,
    both: 2
};

const squares = {
    a1: 21,
    b1: 22,
    c1: 23,
    d1: 24,
    e1: 25,
    f1: 26,
    g1: 27,
    h1: 28,
    a8: 91,
    b8: 92,
    c8: 93,
    d8: 94,
    e8: 95,
    f8: 96,
    g8: 97,
    h8: 98,
    noSquare: 99,
    offBoard: 100
};

const bollean = {
    false: 0,
    true: 1
};

const filesBoard = new Array(boardSquaresNumber);
const ranksBoard = new Array(boardSquaresNumber);

const fileRankSquare = (file, rank) => {
    return ((21 + file) + (rank * 10));
}
