module.exports = function towelSort (matrix) {
	const newArr = []
	if (matrix === undefined) {return newArr}
		for (let i = 0; i < matrix.length; i++) {
			newArr.push()
			if ((i + 1) % 2 == 0) {
				newArr.push(matrix[i].reverse())
			}
			else {
				newArr.push(matrix[i])
			}
		}
		return newArr.flat(1)
}




