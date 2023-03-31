# Fonction qui prend en paramétre le nombre d'allumettes à enlever 
total_allumettes = 50

def je_retire_les_allumettes(allumettes_a_retirer):
   global total_allumettes
   total_allumettes -= allumettes_a_retirer
   if total_allumettes <0:
      total_allumettes = 0
   print(total_allumettes)

#Demande le nombre d'allumettes que l'on veut retirer / vérifie si c'est bien un nombre
def ask_player():
   print("Combien d'allumettes retire-t'on?")
   number = input()
   try :
      int(number)
   except: 
      print("Ce n'est pas un nombre.")
      ask_player()
   else :
      number = int(number)
      if good_number(number) == True :
         je_retire_les_allumettes(number)
      else :
          ask_player()

  #Check si le joueur a enlevé le bon nombre d'allumettes 
def good_number(number):
   if 6>= number >=1:
      return True
   else :
      print("Vous ne pouvez enlever qu'1 à 6 allumettes, pas plus, pas moins")
      return False

#Check si on a gagné la partie
def did_you_win(total_allumettes):
    while total_allumettes != 0:
        ask_player()
    else:
        print("you win")

did_you_win(total_allumettes)
   








# Tant que allumettes_depart !=0 , combien d'allumettes on enleve 
# Demander combien d'allumettes on enléve 

   #si le nombre d'allumette supérieur à 0 : input
   #if allumettes > 0 :
   #   allumettes_retrait = input ("Combien d'allumettes voulez-vous retirer? ")
   #   print ("Nous allons donc retirer " + allumettes_retrait + " " + "allumettes")
   #else : 
   #   input ("Il ne reste plus assez d'allumette, enlevez moins d'allumettes")

#demande_retrait_allumette(allumettes_depart)


""" def retrait_allumette(allumettes):
    allumettes_a_retirer = input ("Combien d'allumettes voulez-vous retirer? ")
    nbr_allumettes_a_retirer = int(allumettes_a_retirer)
    print ("Nous allons donc retirer " + allumettes_a_retirer + " " + "allumettes")
    allumettes_maj = allumettes - nbr_allumettes_a_retirer
    return allumettes_maj
 """

""" print(retrait_allumette(allumettes_depart))
print(retrait_allumette(20)) """



#future interface graphique
#from tkinter import *

#window = Tk()
#window.mainloop()
#window.title("Allumette Party")
#window.geometry("800x600") (Taille définie de la fenetre)
#window.minsize(640,480) 
#Taille minimal de la fenetre
#interdire le redimensionnement
#window.resizable(width=False, height=False)
