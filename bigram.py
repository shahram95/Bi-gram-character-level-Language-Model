# import any relevant libraries here
import torch
import matplotlib.pyplot as plt

# Load dataset

words = open('data.txt', 'r').read().splitlines()


# Starting bi-gram

'''bigram_dictionary = {}

for w in words:
    chs = ['<S>'] + list(w) + ['<E>']                       # Hallucinating start and end characters
    for ch1, ch2 in zip(chs, chs[1:]):
        bigram = (ch1, ch2)
        bigram_dictionary[bigram] = bigram_dictionary.get(bigram, 0) + 1

#print(sorted(bigram_dictionary.items(), key = lambda kv : -kv[1]))

'''

N = torch.zeros((28, 28), dtype=torch.int32)
chars = sorted(list(set(''.join(words))))
stoi = {s:i for i,s in enumerate(chars)}
stoi['<S>'] = 26
stoi['<E>'] = 27

for w in words:
    chs = ['<S>'] + list(w) + ['<E>']                       # Hallucinating start and end characters
    for ch1, ch2 in zip(chs, chs[1:]):
        ix1 = stoi[ch1]
        ix2 = stoi[ch2]
        N[ix1, ix2] += 1


plt.imshow(N)
plt.colorbar()
plt.show()