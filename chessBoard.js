var size = 5
board = ''

for (y = 0; y < size; y ++) {
	line = '\n'
	space1 = ' '
	space2 = '#'
	if (y % 2 !== 0) {
		space1 = '#'
		space2 = ' '
	}
	for (x = 0; x < size; x ++) {
			if (x % 2 == 0) {
				line += space1
			}
			else {
				line += space2
			}
		}
	board += line
}

console.log(board)