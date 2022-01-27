import json

four_letter_words = []
count_fours = 0
count_fives = 0
count_all = 0

with open('dictionary.json') as f:
    data = json.load(f)
    print(len(data))
    for element in data:
       count_all += 1
       if len(element) == 5:
           if '-' in element: continue
           count_fives += 1
           print(element)

       if len(element) == 4:
           if '-' in element: continue
           count_fours += 1
#           print(element)

    print(count_fives, "five letter words")
    print(count_fours, "four letter words")
    print(count_all, "all words")

#//with open('four_letter_words.json', mode='x') as w:
#k    json.dump(four_letter_words, w)
