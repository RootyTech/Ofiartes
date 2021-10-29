export function Read(nombre, cargo, contenido) {

    const text = `Testimonio de ${nombre} ${cargo} : ${contenido}`;
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(text);
    utterThis.lang = 'es-ES';
    synth.speak(utterThis)

}