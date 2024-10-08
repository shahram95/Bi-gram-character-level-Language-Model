# import any relevant libraries here
import torch

# Load dataset

words = open('data.txt', 'r').read().splitlines()


# Starting bi-gram

bigram_dictionary = {}

for w in words:
    chs = ['<S>'] + list(w) + ['<E>']                       # Hallucinating start and end characters
    for ch1, ch2 in zip(chs, chs[1:]):
        bigram = (ch1, ch2)
        bigram_dictionary[bigram] = bigram_dictionary.get(bigram, 0) + 1

#print(sorted(bigram_dictionary.items(), key = lambda kv : -kv[1]))

