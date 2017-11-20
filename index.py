import speech_recognition as sr

r = sr.Recognizer()

def getSpeech(text):
    with sr.Microphone() as source:
        print(text)
        return r.listen(source)


try:
    text = r.recognize_google(getSpeech('Yeah: '))

    if text == 'Chotu' :
        command = r.recognize_google(getSpeech('Yes master Ooj...'))

        if command == 'weather':
            print("IDK, just look up at the sky you lazy people")
        else:
            print(command)
    else:
        print(text)

except Exception as e:
    print(e)
