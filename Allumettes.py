# Fonction qui prend en paramétre le nombre d'allumettes à enlever 
allumettes_depart = 50
print(type(allumettes_depart))

def enlever_des_allumettes(allumettes, allumettes_retirees):
   allumettes_maj = allumettes- allumettes_retirees
   return allumettes_maj
# Demander à un utilisateur le nombre d'allumettes qu'il veut enlever (tant qu'il y a encore des allumettes au départ donc allumette >0)

print(enlever_des_allumettes(allumettes_depart, 10))
# 