const { Engine, Render, Runner, World, Bodies } = Matter;

const cells = 3
const width = 600
const height = 600

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes: false,
        width,
        height
    }
});

Render.run(render);
Runner.run(Runner.create(), engine);




// Walls
const walls = [
    Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
    Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }),
    Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }),
    Bodies.rectangle(width, height / 2, 40, height, { isStatic: true }),
];

World.add(world, walls)

// Maze generation

const shuffle = (arr) => {
    let counter = arr.length;

    while (counter > 0) {
        const index = Math.floor(Math.random() * counter)
        counter--;

        const temp = arr[counter]
        arr[counter] = arr[index]
        arr[index] = temp
    }
    return arr
}

const grid = Array(cells)
    // .fill([false, false, false])
    .fill(null)
    .map(() => Array(cells).fill(false))

const verticala = Array(cells)
    .fill(null)
    .map(() => Array(cells - 1).fill(false))

const horizontal = Array(cells - 1)
    .fill(null)
    .map(() => Array(cells).fill(false))

const startRow = Math.floor(Math.random() * cells)
const startColumn = Math.floor(Math.random() * cells)

const stepThroughCell = (row, column) => {
    // if I have visited the cell at [row, coulumn], then return
    if (grid[row][column]) {
        return;
    }
    // Mark this cell as being visited
    grid[row][column] = true;

    const neighbors = shuffle([
        [row - 1, column],
        [row, column + 1],
        [row + 1, column],
        [row, column - 1]
    ])


}
// stepThroughCell(startRow, startColumn)
stepThroughCell(1, 1)
// console.log(grid)