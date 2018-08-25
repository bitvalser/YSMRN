const audio = document.getElementById('audio');
const styles = document.getElementById('styles');

audio.addEventListener('play', () => {
    setTimeout(() => {
        styles.href = './style.css';
    }, 9000);
})