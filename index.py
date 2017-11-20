import speech_recognition as sr

r = sr.Recognizer()


with sr.Microphone() as source:
    print('Say: ')
    audio = r.listen(source)

try:
    text = r.recognize_google(audio)

    if text == 'Chotu' :
        print('Yes master Ooj...')
    else:
        print(text)

except Exception as e:
    print(e)
