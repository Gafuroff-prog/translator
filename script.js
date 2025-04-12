async function translateText() {
    const inputElement = document.getElementById("inputText");
    const outputElement = document.getElementById("outputText");
    const speaker = document.getElementById("speak");
  
    let originalText = inputElement.value.trim();
    const text = originalText.toLowerCase();
  
    const fromLang = document.getElementById("fromLang").value;
    const toLang = document.getElementById("toLang").value;
  
    if (!text) {
      alert("Matn kiriting!")
      return;
    }
  
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${fromLang}|${toLang}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      let translated = data.responseData.translatedText;
  
     
      translated = translated.charAt(0).toUpperCase() + translated.slice(1);
  
      outputElement.value = translated;

    } catch (error) {
      outputElement.value = "Xatolik yuz berdi: " + error;
    }
  }

document.getElementById("speak").addEventListener("click", function(){
    const text = document.getElementById("outputText").value;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = document.getElementById("toLang").value;
    speechSynthesis.speak(utterance);
});




