# Programa en python para resolver el problema de las N reynas

global N
N = 8

def printSolution(tablero):
	for i in range(N):
		for j in range(N):
			print (tablero[i][j],end=' ')
		print()


# Una funcion para revisar si la reyna puede
# ser puesta en la tablero [fila][columna]. Esta 
# funcion es llamada cuando las "col" reynas
# ya estan puestas en las columnas de 0 a -1
# asi que tenemos que ver el lado izquierdo
# para las reynas que la pueden atacar
def esSeguro(tablero, fila, col):

	#  Revisa esta fila en el lado izquierdo
	for i in range(col):
		if tablero[fila][i] == 1:
			return False

	# Revisa la diagonal de arriba a la izquierda
	for i, j in zip(range(fila, -1, -1), range(col, -1, -1)):
		if tablero[i][j] == 1:
			return False

	# Revisa la diagonal de abajo a la izquierda
	for i, j in zip(range(fila, N, 1), range(col, -1, -1)):
		if tablero[i][j] == 1:
			return False

	return True

def solveNQUtil(tablero, col):
	# En el caso base: si todas las reynas estan puestas
	# entonces regresa verdad
	if col >= N:
		return True

	# Considera esta columna e intenta poner
	# esta reyna en todas las filas una por una
	for i in range(N):

		if esSeguro(tablero, i, col):
            # Pone la reyna en la tablero [i][col]
			tablero[i][col] = 1

            # se repite para poner el resto de las reynas
			if solveNQUtil(tablero, col + 1) == True:
				return True

            # Si poner la reyna en tablero[i][col]
		
            # no lleva a una solucion
            # la reyna del tablero [i[col]
			tablero[i][col] = 0

    # si la reyna no se puede poner en una fila en
    # esta columna col va a regresar falso
	return False

# Esta funcion utiliza principalmente el problema usando la solucion solveNQUtil 
# para resolver el problema. regresa falso si las reynas
# no se pueden poner, y true si se puede
# poner las reynas en la forma en la que estan.
# Puede que haya mas de una solucion
# pero esta funcion solo imprime una

def solveNQ():
	tablero = [ [0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0]
			]

	if solveNQUtil(tablero, 0) == False:
		print ("La solucion no Existe")
		return False

	printSolution(tablero)
	return True

# prueba la funcion
solveNQ()
