import speech_recognition as sr
import pyttsx3

engine = pyttsx3.init()

r = sr.Recognizer()

def getSpeech(text):
    with sr.Microphone() as source:
        print(text)
        return r.listen(source)

def response(command):
    if command == 'weather':
        return "I. Don't. Know, just look up at the sky you lazy people"
    else:
        return 'You said ' + command + "I don't recognise this command."


# engine.say('I am ready')
# engine.runAndWait()
while True:
    try:
        text = r.recognize_google(getSpeech('Yeah: '))

        if text == 'Chotu' :
            engine.say('Yes master Oje')
            engine.runAndWait()

            command = r.recognize_google(getSpeech('\nYes master Ooj...'))

            engine.say(response(command))
            engine.runAndWait()

            continue

        else:
            print(text)
            engine.say('You said ' + text + "I don't recognise this command.")
            engine.runAndWait()

            continue
    except sr.UnknownValueError:
        engine.say('SAY SOMETHING YOU IDIOT!')
        engine.runAndWait()

        continue
