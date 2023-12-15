export default function Log({turns}) {

    let liElements = [];
    for(const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;
        liElements.push(
            <li key={`${row}${col}`}>
                {player} Selected {row}, {col}
            </li>
        );
    }
    return (
        <ol id="log">
            {liElements}
        </ol>
    );
}