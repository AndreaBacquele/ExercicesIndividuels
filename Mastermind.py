colors = ['red','blue']
possible_colors = ['red','blue','green','yellow']

def ask_color():
    given_color = []
    while len(given_color) < 4 :
        print ("Donnez moi une couleur")
        colour1 = input()
        given_color.append(colour1)
        print(len(given_color))
        if len(given_color) == 4:
         break
    print(given_color)
    return given_color

ask_color()

    

ask_color()
#def check_autorized_colors():

