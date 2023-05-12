# Fonction qui prend en paramétre le nombre d'allumettes à enlever 
total_allumettes = 50

def je_retire_les_allumettes(allumettes_a_retirer):
   global total_allumettes
   total_allumettes -= allumettes_a_retirer
   if total_allumettes < 0 :
      print ("Vous avez enlevé trop d'allumettes. Refaite un nouveau retrait.")
      total_allumettes += allumettes_a_retirer
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
      if good_number(number) is True :
         je_retire_les_allumettes(number)
         if total_allumettes == 0 :
            print ("Congratulations, you win")
         elif total_allumettes < 0 : 
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
   ask_player()
   if total_allumettes < 0 :
      #Comment faire pour garder la valeur obtenue avant de refaire askPlayer
      print("Vous avez enlevé trop d'allumettes. Vous devez tomber à 0 allumettes exactement")
      ask_player()
   elif total_allumettes == 0 :
      print("Congratulations ! You win !")
   else :
      print

def player_one():
   print ("Player one : à vous de jouer")
   did_you_win(total_allumettes)

def player_two():
   print ("Player two : à vous de jouer")
   did_you_win(total_allumettes)

def one_turn():
   #tant que total_allumettes !=0, on enchaine joueur 1 et joueur 2
   while total_allumettes != 0:
      player_one()
      player_two()

one_turn()
   
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
