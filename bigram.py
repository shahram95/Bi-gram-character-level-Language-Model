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

N = torch.zeros((27, 27), dtype=torch.int32)
chars = sorted(list(set(''.join(words))))
stoi = {s:i+1 for i,s in enumerate(chars)}
stoi['.'] = 0
itos = {i:s for s,i in stoi.items()}

for w in words:
    chs = ['.'] + list(w) + ['.']                       # Hallucinating start and end characters
    for ch1, ch2 in zip(chs, chs[1:]):
        ix1 = stoi[ch1]
        ix2 = stoi[ch2]
        N[ix1, ix2] += 1

plt.figure(figsize=(16,16))
plt.imshow(N, cmap='Blues')
for i in range(27):
    for j in range(27):
        chstr = itos[i] + itos[j]
        plt.text(j,i,chstr, ha="center", va="bottom", color="gray")
        plt.text(j, i, N[i,j].item(), ha="center", va="top", color="gray")
plt.axis("off")
plt.show()

 