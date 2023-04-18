colors = ['red','blue']
possible_colors = ['red','blue','green','yellow']

def ask_colors():
    given_colors = []
    while len(given_colors) < 4 :
        print ("Donnez moi une couleur")
        colour1 = input()
        check_autorized_colors()
        given_colors.append(colour1)
        print(len(given_colors))
    print(given_colors)
    return given_colors

ask_colors()
    
def check_autorized_colors():
    

