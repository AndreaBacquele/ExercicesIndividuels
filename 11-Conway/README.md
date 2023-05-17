1. Enoncé

L'exercice consiste à "décrire" des chaînes de caractères selon le principe suivant :

Prenons la chaîne de caractères "a". Celle-ci est composée d'une (1) occurrence du caractère 'a'. Nous pouvons donc décrire la chaîne "a" par la chaîne "1a".
Prenons désormais la nouvelle chaîne "1a". Celle-ci est composée d'un (1) caractère '1' puis d'un (1) caractère 'a'. Nous pouvons donc la décrire par "111a".
De même, la chaîne "111a" est composée de 3 caractères consécutifs '1' puis d'un (1) caractère 'a'. Nous pouvons donc la décrire comme "311a"
et ainsi de suite...

Si on représente les chaînes successives verticalement, où chaque chaîne décrit la précédente, nous obtenons :a1a111a311a13211a111312211a...

Une telle suite s'appelle [Suite de Conway] (https://fr.wikipedia.org/wiki/Suite_de_Conway) ou suite "audioactive".

L'objectif de l'exercice est de réaliser un générateur de suites de Conway.

Contraintes:

Langage : JS ou Python
