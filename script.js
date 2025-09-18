var speech = new SpeechSynthesisUtterance()
let voices = []
let voiceselector = document.querySelector("select")
var rateslider = document.getElementById("rateslider")
var rate = document.getElementById("rate")

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices()
    speech.voice = voices[0]
    speech.rate = 0.5

    voices.forEach((voice, i) => (voiceselector.options[i] = new Option(voice.name, i)))
    voiceselector.addEventListener("change", () => {
        speech.voice = voices[voiceselector.value]
    })
}
rateslider.addEventListener("input", ()=>{
    rate.textContent = rateslider.value
})
document.querySelector("button").addEventListener("click", ()=>{
    speech.rate = rateslider.value
    speech.text = document.querySelector("textarea").value
    window.speechSynthesis.speak(speech)
})