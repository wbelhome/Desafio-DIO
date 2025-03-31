#Verificando Palíndromos
# Verificando Palíndromos

# Solicita uma palavra do usuário
palavra = input("Digite uma palavra: ").strip().lower()

# Verifica se a palavra é um palíndromo
if palavra == palavra[::-1]:
    print(f"A palavra '{palavra}' é um palíndromo.")
else:
    print(f"A palavra '{palavra}' não é um palíndromo.")
