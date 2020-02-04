export const getRandomNumber = (min = 0, max = MAX) => {
    return min + Math.floor(Math.random() * (max - min + 1))
}