import ascii_art as art

art_dict = {0:art.zero, 1:art.one, 2:art.two, 3:art.three, 4:art.four, 5:art.five}

word = input('Player one, choose a word: ')

word = word.lower()
length = len(word)
guess = '_' * length

def find_all(string, letter):
    indices = []
    index = string.find(letter)
    while index != -1:
        indices.append(index)
        string = string.replace(letter, '-', 1)
        index = string.find(letter)
    return indices


used_letters = []
level = 0
while guess != word and level < 5:
    print(guess, used_letters)
    print(art_dict[level])
    letter = input('Player two, guess a letter: ')
    if len(letter) > 1:
        print('Only single letters please.')
        continue
    elif letter in used_letters:
        print('You have already used that letter.')
        continue
    used_letters.append(letter)
    indices = find_all(word, letter)
    if len(indices) == 0:
        print('Incorrect, try again!')
        level += 1
    else:
        print('Correct')
        for i in indices:
            list_guess = list(guess)
            list_guess[i] = letter 
            guess = ''.join(list_guess)

if guess == word:
    print(f'Well done, the word was {word}.')
elif level == 5:
    print(art_dict[5])
    print(f'Better luck next time. The word was {word}.')