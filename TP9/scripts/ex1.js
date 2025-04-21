const definitions = new Map([
  ['JavaScript', {
    titre: 'JavaScript',
    texte: 'JavaScript est un langage de programmation permettant d’ajouter de l’interactivité aux pages web.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
  }],
  ['HTML', {
    titre: 'HTML',
    texte: 'HTML (HyperText Markup Language) est le langage utilisé pour structurer le contenu des pages web.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'
  }]
]);

const tooltip = document.getElementById('tooltip');
const title = document.getElementById('tooltip-title');
const text = document.getElementById('tooltip-text');
const img = document.getElementById('tooltip-img');

document.querySelectorAll('.definition').forEach(el => {
  el.addEventListener('mouseenter', (e) => {
    const def = definitions.get(e.target.dataset.word);
    if (def) {
      title.textContent = def.titre;
      text.textContent = def.texte;

      if (def.image) {
        img.src = def.image;
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }

      tooltip.style.top = (e.pageY + 15) + 'px';
      tooltip.style.left = (e.pageX + 15) + 'px';
      tooltip.style.display = 'block';
    }
  });

  el.addEventListener('mousemove', (e) => {
    tooltip.style.top = (e.pageY + 15) + 'px';
    tooltip.style.left = (e.pageX + 15) + 'px';
  });

  el.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });
});
