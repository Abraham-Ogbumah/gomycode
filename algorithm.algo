ALGORITHM read_sentence
VAR
    sentence_length, word_count, vowels : INTEGER; 
    sentence : STRING;

    vowel_set = define_set("aeiouAEIOU")

BEGIN
    Read(sentence)
    check each character in sentence
        if character equal '.'
            do not continue
        add one to sentence_length
        if character equal ''
            add one to word_count
        if character is in vowel_set
            add one to vowels
        add one to sentence_length
    print sentence_length, word_count, vowels
END