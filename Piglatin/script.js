function pigLatinWord(word) {
  if (!word) return word;

  const vowels = /^[aeiou]/i;
  if (vowels.test(word)) {
    return word; // leave vowels as-is
  } else {
    const m = word.match(/^[^aeiou]+/i);
    const cluster = m ? m[0] : '';
    return word.slice(cluster.length) + cluster + 'ay';
  }
}

const input = document.getElementById('textIn');
const out = document.getElementById('out');
const btn = document.getElementById('go');

function convert() {
  const v = input.value.trim();
  out.textContent = pigLatinWord(v);
}

btn.addEventListener('click', convert);
input.addEventListener('keydown', e => { 
  if (e.key === 'Enter') convert(); 
});

input.value = 'banana';
convert();