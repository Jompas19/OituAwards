const reviewScreen = document.getElementById('reviewScreen');
const reviewScroll = document.getElementById('reviewScroll');
const reviewStage = document.getElementById('reviewStage');
const reviewGrid = document.getElementById('reviewGrid');
const confirmVotes = document.getElementById('confirmVotes');
const editVotes = document.getElementById('editVotes');
const receiptStage = document.getElementById('receiptStage');
const urnScene = document.getElementById('urnScene');
const urn = document.getElementById('urn');
const urnSlot = document.getElementById('urnSlot');
const flightLayer = document.getElementById('flightLayer');
const categorySweep = document.getElementById('categorySweep');
const voteStage = document.querySelector('.vote-stage');
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
const homeScreen = document.getElementById('homeScreen');
const voteScreen = document.getElementById('voteScreen');
const voteScroll = document.getElementById('voteScroll');
const categoriesScreen = document.getElementById('categoriesScreen');
const categoriesScroll = document.getElementById('categoriesScroll');
const categoriesStartButton = document.getElementById('categoriesStartButton');
const categoriesList = document.getElementById('categoriesList');
const startVotingButton = document.getElementById('startVotingButton');
const identityModal = document.getElementById('identityModal');
const voterSelect = document.getElementById('voterSelect');
const voterSelectButton = document.getElementById('voterSelectButton');
const voterSelectText = document.getElementById('voterSelectText');
const voterOptions = document.getElementById('voterOptions');
const confirmIdentity = document.getElementById('confirmIdentity');
const cancelIdentity = document.getElementById('cancelIdentity');
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');
const toast = document.getElementById('toast');
const categoriesButton = document.getElementById('categoriesButton');
const pageTransition = document.getElementById('pageTransition');
const nomineeGrid = document.getElementById('nomineeGrid');
const categoryTitle = document.getElementById('categoryTitle');
const categoryDescription = document.getElementById('categoryDescription');
const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');
const heroTitle = document.querySelector('.hero-title');
const runnerScene = document.getElementById('runnerScene');
const runnerFigure = document.getElementById('runnerFigure');
const runnerShadow = document.getElementById('runnerShadow');
let runnerRunImage = document.getElementById('runnerRunImage');
let runnerStandImage = document.getElementById('runnerStandImage');

const VOTERS = [
  'FERNANDO MELO VERISSIMO',
  'GEOVANA DE MELO MENDES',
  'HENRIQUE LECOMTE FERREIRA',
  'IAN GABRIEL TOBIAS DE ALMEIDA',
  'JOÃO PAULO BARBOSA SOUSA',
  'JOÃO VICTOR MESQUITA GOMES',
  'JÚLIA NOGUEIRA DE SOUZA PALMEIRA',
  'JULIANA GUIDASTRI AGUIAR',
  'LUIS GUILHERME TEIXEIRA MADUREIRA DE FREITAS',
  'MARIANA ALVES DOS SANTOS'
];

const RUNNER_ASSETS = {
  'JOÃO PAULO BARBOSA SOUSA': {
    run: 'assets/runner-joao-run.webp',
    stand: 'assets/runner-joao-stand.webp'
  },
  'MARIANA ALVES DOS SANTOS': {
    run: 'assets/runner-mariana-run.webp',
    stand: 'assets/runner-mariana-stand.webp'
  },
  'GEOVANA DE MELO MENDES': {
    run: 'assets/runner-geovana-run.webp',
    stand: 'assets/runner-geovana-stand.webp'
  },
  'JÚLIA NOGUEIRA DE SOUZA PALMEIRA': {
    run: 'assets/runner-julia-run.webp',
    stand: 'assets/runner-julia-stand.webp'
  },
  'LUIS GUILHERME TEIXEIRA MADUREIRA DE FREITAS': {
    run: 'assets/runner-luis-run.webp',
    stand: 'assets/runner-luis-stand.webp'
  },
  'FERNANDO MELO VERISSIMO': {
    run: 'assets/runner-fernando-run.webp',
    stand: 'assets/runner-fernando-stand.webp'
  },
  'IAN GABRIEL TOBIAS DE ALMEIDA': {
    run: 'assets/runner-ian-run.webp',
    stand: 'assets/runner-ian-stand.webp'
  },
  'JOÃO VICTOR MESQUITA GOMES': {
    run: 'assets/runner-joaovictor-run.webp',
    stand: 'assets/runner-joaovictor-stand.webp'
  },
  'JULIANA GUIDASTRI AGUIAR': {
    run: 'assets/runner-juliana-run.webp',
    stand: 'assets/runner-juliana-stand.webp'
  },
  'HENRIQUE LECOMTE FERREIRA': {
    run: 'assets/runner-henrique-run.webp',
    stand: 'assets/runner-henrique-stand.webp'
  }
};

const CATEGORIES = [
  {
    title: 'Pior professor',
    description: 'Escolha uma das opções abaixo.',
    nominees: [
      { name: 'Henrique de Paula', photo: 'assets/prof-frederico-barra.webp' },
      { name: 'Frederico Barra', photo: 'assets/prof-jose-miguel.webp' },
      { name: 'Guilherme Holanda', photo: 'assets/prof-guilherme-holanda.webp' },
      { name: 'José Miguel', photo: 'assets/prof-henrique-de-paula.webp' },
      { name: 'Renata Machado', photo: 'assets/prof-renata-machado.webp' }
    ]
  },
  {
    title: 'Melhor residente',
    description: 'Escolha uma das opções abaixo.',
    nominees: [
      { name: 'Mercielle (Pediatria)', photo: 'assets/res-mercielle.webp' },
      { name: 'Nívea (Pediatria)', photo: 'assets/res-nivea.webp' },
      { name: 'Débora (Neurologia)', photo: 'assets/res-debora.webp' },
      { name: 'Kassem (Otorrino)', photo: 'assets/res-kassem.webp' }
    ]
  },
  {
    title: 'Melhor ambulatório',
    description: 'Escolha uma das opções abaixo.',
    nominees: [
      { name: 'Endócrino (Thais)', photo: 'assets/amb-endocrino.webp' },
      { name: 'Psiquiatria (Savio)', photo: 'assets/amb-psiquiatria.webp' },
      { name: 'Reumatologia (Vitalina)', photo: 'assets/amb-reumatologia.webp' },
      { name: 'Oftalmologia (CEROF)', photo: 'assets/amb-oftalmologia.webp' }
    ]
  },
  {
    title: 'Pior ambulatório',
    description: 'Escolha uma das opções abaixo.',
    nominees: [
      { name: 'Neurologia (Leonardo Caixeta)', photo: 'assets/ambw-neurologia.webp' },
      { name: 'Adolescente (Tiago Iorc)', photo: 'assets/ambw-adolescente.webp' },
      { name: 'Infectologia (CAIS - Novo Mundo)', photo: 'assets/ambw-infectologia.webp' },
      { name: 'Cremic', photo: 'assets/ambw-cremic.webp' }
    ]
  },
  {
    title: 'Melhor rodízio',
    description: 'Escolha uma das opções abaixo.',
    nominees: [
      { name: 'Endócrino', photo: 'assets/rot-obstetricia.webp' },
      { name: 'Uro/Nefro', photo: 'assets/rot-uro-nefro.webp' },
      { name: 'Psiquiatria e Saúde Mental', photo: 'assets/rot-psiquiatria.webp' },
      { name: 'Obstetrícia e Puercultura', photo: 'assets/rot-endocrino.webp' }
    ]
  },
  {
    title: 'Pior rodízio',
    description: 'Escolha uma das opções abaixo.',
    nominees: [
      { name: 'Cremic', photo: 'assets/rotp-cremic.webp' },
      { name: 'Megazord', photo: 'assets/rotp-megazord.webp' },
      { name: 'DIP e Dermato', photo: 'assets/rotp-dip-dermato.webp' },
      { name: 'Neuro', photo: 'assets/rotp-neuro.webp' },
      { name: 'Saúde Mental', photo: 'assets/rotp-saude-mental.webp' }
    ]
  },
  {
    title: 'Melhor foto do GymRats',
    description: 'Escolha uma das opções abaixo.',
    photoCategory: true,
    nominees: [
      { name: 'Foto 1', photo: 'assets/gymrats-01.webp' },
      { name: 'Foto 2', photo: 'assets/gymrats-02.webp' },
      { name: 'Foto 3', photo: 'assets/gymrats-03.webp' },
      { name: 'Foto 4', photo: 'assets/gymrats-04.webp' },
      { name: 'Foto 5', photo: 'assets/gymrats-05.webp' },
      { name: 'Foto 6', photo: 'assets/gymrats-06.webp' },
      { name: 'Foto 7', photo: 'assets/gymrats-07.webp' },
      { name: 'Foto 8', photo: 'assets/gymrats-08.webp' },
      { name: 'Foto 9', photo: 'assets/gymrats-09.webp' }
    ]
  },
  {
    title: 'Melhor momento Luís',
    description: 'Escolha uma das opções abaixo.',
    nominees: [
      { name: 'Chego atrasado, jogo a mochila no chão e deixo lá', photo: 'assets/moment-mochila-chao.webp' },
      { name: 'O pênis dele em centímetros', photo: 'assets/moment-penis-cm.webp' },
      { name: '08:22: “Vai ter aula?” (A aula era 07:30)', photo: 'assets/moment-vai-ter-aula.webp' },
      { name: 'Chego atrasado, abro a porta bem devagar (enquanto careta), faz MUITO barulho e todos ficam me olhando', photo: 'assets/moment-porta.webp' }
    ]
  },
  {
    title: 'Melhor comentário do Ratinho',
    description: 'Escolha uma das opções abaixo.',
    nominees: [
      { name: 'Você instrumentou?', photo: 'assets/ratinho-instrumentou.webp' },
      { name: 'Não posso ir, vão precisar de mim na cirurgia', photo: 'assets/ratinho-cirurgia.webp' },
      { name: 'Vocês todos são covardes e mimadinhos, principalmente o João Paulo', photo: 'assets/ratinho-covardes.webp' },
      { name: 'Nossa vei, se esse professor não me liberar logo, cê vai ver, eu vou xingar ele tudo', photo: 'assets/ratinho-professor.webp' },
      { name: 'Que frio 🥶', photo: 'assets/ratinho-frio.webp' }
    ]
  },
  {
    title: 'Melhor piada interna',
    description: 'Escolha uma das opções abaixo.',
    nominees: [
      { name: 'Ain sou interno (e suas variações)', photo: 'assets/joke-interno.webp' },
      { name: 'Prescrevo forest, salmão, aula de piano', photo: 'assets/joke-forest.webp' },
      { name: 'O drama do HDMI às 22:30', photo: 'assets/joke-hdmi.webp' },
      { name: 'Reflexão original e inédita', photo: 'assets/joke-reflexao.webp' },
      { name: 'Meu nome é Joao Paulo, eu não tenho um PÂAAR na vida, nao gosto desses trem de saude mental', photo: 'assets/joke-joaopaulo-paar.webp' },
      { name: '*tosse* Gemin', photo: 'assets/joke-gemin.webp' },
      { name: 'Partiu leve?', photo: 'assets/joke-partiu-leve.webp' }
    ]
  }
];

const pendingDialog = document.getElementById('pendingDialog');
const pendingList = document.getElementById('pendingList');
const pendingShortcut = document.getElementById('pendingShortcut');
const pendingFirst = document.getElementById('pendingFirst');
let reviewAttempted = false;
let pendingClosing = false;
let pendingReturnFocus = null;

function missingCategories() {
  return CATEGORIES.map((category, index) => index).filter(index => !Number.isInteger(categorySelections[index]) || !CATEGORIES[index].nominees[categorySelections[index]]);
}
function syncPendingShortcut() {
  const count = missingCategories().length;
  pendingShortcut.hidden = !reviewAttempted || currentCategory === CATEGORIES.length - 1;
  pendingShortcut.textContent = count ? `✦ ${count} ${count === 1 ? 'categoria pendente' : 'categorias pendentes'} · Ver pendências →` : '✦ Todos os votos escolhidos · Revisar votos →';
  pendingShortcut.classList.toggle('is-ready', count === 0);
}
function showPendingVotes() {
  if (pendingDialog.open || transitionLocked) return;
  const missing = missingCategories();
  if (!missing.length) return;
  reviewAttempted = true;
  saveStageDraft('ballot');
  syncPendingShortcut();
  const done = CATEGORIES.length - missing.length;
  document.getElementById('pendingTitle').textContent = missing.length === 1 ? 'Falta só um voto!' : 'Faltam alguns votos!';
  document.getElementById('pendingCopy').textContent = `${done} de ${CATEGORIES.length} categorias votadas. Escolha um indicado em cada categoria para liberar a revisão.`;
  document.getElementById('pendingProgress').style.setProperty('--pending-fill', `${done / CATEGORIES.length * 100}%`);
  pendingList.replaceChildren();
  missing.forEach((index, position) => {
    const li = document.createElement('li');
    li.style.setProperty('--pending-index', position);
    const button = document.createElement('button'); button.type = 'button';
    const number = document.createElement('span'); number.className = 'pending-number'; number.textContent = String(index + 1).padStart(2, '0');
    const title = document.createElement('span'); title.textContent = CATEGORIES[index].title;
    const arrow = document.createElement('span'); arrow.className = 'pending-arrow'; arrow.textContent = '→'; arrow.setAttribute('aria-hidden', 'true');
    button.append(number,title,arrow); li.append(button); pendingList.append(li);
    button.addEventListener('click', () => closePendingVotes(index));
  });
  pendingFirst.hidden = missing.length === 1;
  pendingReturnFocus = document.activeElement;
  pendingDialog.showModal();
  document.getElementById('pendingTitle').focus({preventScroll:true});
}
async function closePendingVotes(index = null) {
  if (!pendingDialog.open || pendingClosing) return;
  pendingClosing = true;
  try {
    if (!reducedMotion()) { pendingDialog.classList.add('is-leaving'); await wait(210); }
    pendingDialog.close();
    pendingDialog.classList.remove('is-leaving');
    if (index !== null) {
      if (index !== currentCategory) await moveCategory(index);
      else voteScroll.scrollTop = 0;
      categoryTitle.focus({preventScroll:true});
      if (!reducedMotion()) categoryTitle.animate([{filter:'brightness(1.6)',transform:'translateY(3px)'},{filter:'brightness(1)',transform:'none'}], {duration:550,easing:'ease-out'});
    } else pendingReturnFocus?.focus({preventScroll:true});
  } finally { pendingClosing = false; }
}
pendingFirst.addEventListener('click', () => closePendingVotes(missingCategories()[0]));
document.getElementById('pendingClose').addEventListener('click', () => closePendingVotes());
pendingDialog.addEventListener('cancel', event => { event.preventDefault(); closePendingVotes(); });
pendingShortcut.addEventListener('click', () => elegantTransition('review'));

let selectedVoter = '';
let selectedNominee = null;
let currentCategory = 0;
const categorySelections = Array(CATEGORIES.length).fill(null);
let toastTimer;
let transitionLocked = false;
let runnerAnimationFrame = null;
let runnerCurrentX = null;
let runnerCurrentY = null;
let runnerCurrentSize = null;
let runnerShadowY = null;
let runnerVisibleVoter = null;
let runnerEntryComplete = false;
let runnerRequest = 0;
let runnerExiting = false;
const preparedImages = new Map();


function syncHeroTitle() {
  if (heroTitle) heroTitle.dataset.text = heroTitle.textContent.trim();
}

function startHomeIntro() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    homeScreen.classList.add('intro-complete');
    return;
  }
  homeScreen.classList.remove('intro-complete');
  requestAnimationFrame(() => {
    window.setTimeout(() => {
      homeScreen.classList.add('intro-complete');
    }, 1450);
  });
}

function renderVoters() {
  voterOptions.innerHTML = '';
  VOTERS.forEach((name, index) => {
    const option = document.createElement('button');
    option.type = 'button';
    option.className = 'select-option';
    option.setAttribute('role', 'option');
    option.setAttribute('aria-selected', 'false');
    option.dataset.value = name;
    option.textContent = name;
    option.addEventListener('click', () => selectVoter(name, option));
    option.addEventListener('keydown', (event) => handleOptionKeydown(event, index));
    voterOptions.appendChild(option);
  });
}

function selectVoter(name, option) {
  selectedVoter = name;
  voterSelectText.textContent = name;

  // O botão só é liberado depois que a animação de entrada termina.
  confirmIdentity.disabled = true;

  [...voterOptions.children].forEach((item) => {
    const active = item === option;
    item.classList.toggle('is-selected', active);
    item.setAttribute('aria-selected', String(active));
  });
  closeSelect();

  const request = ++runnerRequest;
  const stillSelected = () => request === runnerRequest && selectedVoter === name && identityModal.classList.contains('is-open') && !identityModal.classList.contains('is-closing');
  const unlockConfirm = () => {
    if (stillSelected() && runnerVisibleVoter === name && runnerEntryComplete) {
      confirmIdentity.disabled = false;
      confirmIdentity.focus({ preventScroll: true });
    }
  };
  const enter = () => {
    if (stillSelected()) playRunnerScene(name, unlockConfirm, request);
  };
  if (runnerVisibleVoter === name && runnerEntryComplete && !runnerExiting) {
    unlockConfirm();
  } else if (runnerVisibleVoter) {
    exitRunnerScene(() => { if (stillSelected()) setTimeout(enter, 90); });
  } else {
    setTimeout(enter, 120);
  }
}

function openSelect() {
  voterSelect.classList.add('is-open');
  voterSelectButton.setAttribute('aria-expanded', 'true');
  const target = voterOptions.querySelector('.is-selected') || voterOptions.firstElementChild;
  setTimeout(() => target?.focus({ preventScroll: true }), 60);
}

function closeSelect() {
  voterSelect.classList.remove('is-open');
  voterSelectButton.setAttribute('aria-expanded', 'false');
}

function toggleSelect() {
  voterSelect.classList.contains('is-open') ? closeSelect() : openSelect();
}

function handleOptionKeydown(event, index) {
  const options = [...voterOptions.children];
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    options[(index + 1) % options.length].focus();
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    options[(index - 1 + options.length) % options.length].focus();
  } else if (event.key === 'Escape') {
    event.preventDefault();
    closeSelect();
    voterSelectButton.focus();
  }
}

let modalTrigger = startVotingButton;
function openModal(event) {
  if (transitionLocked) return;
  modalTrigger = event?.currentTarget || startVotingButton;
  identityModal.classList.remove('is-closing');
  identityModal.classList.add('is-open');
  identityModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  if (selectedVoter && !runnerVisibleVoter) {
    const option = [...voterOptions.children].find(item => item.dataset.value === selectedVoter);
    if (option) selectVoter(selectedVoter, option);
  }
  setTimeout(() => voterSelectButton.focus({ preventScroll: true }), 320);
}

function closeModal({ returnFocus = true } = {}) {
  ++runnerRequest;
  closeSelect();
  stopRunnerScene();
  identityModal.classList.add('is-closing');
  setTimeout(() => {
    identityModal.classList.remove('is-open', 'is-closing');
    identityModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (returnFocus) modalTrigger.focus({ preventScroll: true });
  }, 210);
}

let resultsUnlocked = false;
function setScreen(target) {
  if (target === 'results' && !resultsUnlocked) return;
  if (target !== 'results' && resultsUnlocked) { resultsUnlocked = false; document.getElementById('resultsContent').replaceChildren(); document.getElementById('resultsStats').replaceChildren(); document.getElementById('resultsNote').textContent = ''; }
  const screens = { home: homeScreen, categories: categoriesScreen, vote: voteScreen, review: reviewScreen, quiz: document.getElementById('quizScreen'), likely: document.getElementById('likelyScreen'), personal: document.getElementById('personalScreen'), results: document.getElementById('resultsScreen') };
  Object.entries(screens).forEach(([key, screen]) => {
    const active = key === target;
    screen.classList.toggle('is-active', active);
    screen.setAttribute('aria-hidden', String(!active));
  });
  if (target === 'vote') voteScroll.scrollTop = 0;
  if (target === 'categories') categoriesScroll.scrollTop = 0;
  if (target === 'review') reviewScroll.scrollTop = 0;
  if (target === 'quiz') document.getElementById('quizScroll').scrollTop = 0;
  if (target === 'likely') document.getElementById('likelyScroll').scrollTop = 0;
  if (target === 'results') document.getElementById('resultsScroll').scrollTop = 0;

}

function renderCategoriesList() {
  document.getElementById('categoriesCount').textContent = `${CATEGORIES.length} categorias da premiação`;
  categoriesList.replaceChildren();
  CATEGORIES.forEach((category, index) => {
    const item = document.createElement('li');
    const number = document.createElement('span');
    number.className = 'category-list-number';
    number.setAttribute('aria-hidden', 'true');
    number.textContent = String(index + 1).padStart(2, '0');
    const title = document.createElement('span');
    title.textContent = category.title;
    item.append(number, title);
    categoriesList.appendChild(item);
  });
}

// Fallback for older Safari: suppress only vertical overscroll at the boundaries.
// Native vertical scrolling and horizontal carousel swipes remain available.
function containVerticalOverscroll(scroller) {
  let lastX = 0, lastY = 0, originX = 0, originY = 0, axis = null;
  scroller.addEventListener('touchstart', event => {
    if (event.touches.length !== 1) { axis = 'multi'; return; }
    originX = lastX = event.touches[0].clientX;
    originY = lastY = event.touches[0].clientY;
    axis = null;
  }, { passive: true });
  scroller.addEventListener('touchmove', event => {
    if (event.touches.length !== 1 || axis === 'multi') return;
    const { clientX: x, clientY: y } = event.touches[0];
    const dy = y - lastY;
    lastX = x; lastY = y;
    if (!axis) {
      const dxTotal = Math.abs(x - originX), dyTotal = Math.abs(y - originY);
      if (Math.max(dxTotal, dyTotal) < 6) return;
      axis = dxTotal > dyTotal ? 'x' : 'y';
    }
    if (axis !== 'y') return;
    const max = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
    if ((dy > 0 && scroller.scrollTop <= 0) || (dy < 0 && scroller.scrollTop >= max - 1)) {
      if (event.cancelable) event.preventDefault();
    }
  }, { passive: false });
}
containVerticalOverscroll(voteScroll);
containVerticalOverscroll(categoriesScroll);
containVerticalOverscroll(reviewScroll);

function transitionTo(target) {
  if (transitionLocked) return;
  if (reducedMotion() && target !== 'vote') { setScreen(target); return; }
  transitionLocked = true;
  pageTransition.classList.remove('is-running');
  void pageTransition.offsetWidth;
  pageTransition.classList.add('is-running');

  window.setTimeout(() => setScreen(target), 490);
  window.setTimeout(() => {
    pageTransition.classList.remove('is-running');
    transitionLocked = false;
  }, 1100);
}

function renderCategory(index) {
  const category = CATEGORIES[index];
  if (!category) return;

  categoryTitle.textContent = category.title;
  categoryDescription.textContent = category.description;
  nextButton.innerHTML = index === CATEGORIES.length - 1 ? 'REVISAR VOTOS <span aria-hidden="true">→</span>' : 'PRÓXIMA <span aria-hidden="true">→</span>';
  progressText.textContent = `${index + 1} / ${CATEGORIES.length}`;
  progressBar.style.width = `${((index + 1) / CATEGORIES.length) * 100}%`;
  selectedNominee = categorySelections[index];

  const count = category.nominees.length;
  nomineeGrid.style.setProperty('--columns', Math.min(count, 5));
  nomineeGrid.innerHTML = '';
  nomineeGrid.classList.remove('has-selection');
  nomineeGrid.classList.toggle('is-photo-category', category.photoCategory === true);

  category.nominees.forEach((nominee, nomineeIndex) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'nominee-card';
    if (nominee.name.length > 34) card.classList.add('has-long-name');
    if (nominee.name.length > 70) card.classList.add('has-very-long-name');
    const isSelected = selectedNominee === nomineeIndex;
    card.classList.toggle('is-selected', isSelected);
    card.setAttribute('role', 'radio');
    card.setAttribute('aria-checked', String(isSelected));
    card.setAttribute('aria-label', `Selecionar ${nominee.name}`);

    const check = document.createElement('span');
    check.className = 'nominee-check';
    check.setAttribute('aria-hidden', 'true');
    check.textContent = '✓';

    const photo = document.createElement('div');
    photo.className = 'nominee-photo';

    if (nominee.photo) {
      const image = document.createElement('img');
      image.src = nominee.photo;
      image.alt = '';
      photo.appendChild(image);
    } else {
      const placeholder = document.createElement('span');
      placeholder.className = 'photo-placeholder';
      placeholder.setAttribute('aria-hidden', 'true');
      photo.appendChild(placeholder);
    }

    const name = document.createElement('span');
    name.className = 'nominee-name';
    name.textContent = nominee.name;

    card.append(check, photo, name);
    card.addEventListener('click', () => selectNominee(card, nomineeIndex));
    nomineeGrid.appendChild(card);
  });

  nomineeGrid.classList.toggle('has-selection', selectedNominee !== null);
  syncPendingShortcut();
  nomineeGrid.scrollLeft = 0;
  if (selectedNominee !== null && window.matchMedia('(max-width: 760px)').matches) {
    const selected = nomineeGrid.children[selectedNominee];
    if (selected && nomineeGrid.clientWidth) nomineeGrid.scrollLeft += selected.getBoundingClientRect().left + selected.offsetWidth/2 - nomineeGrid.getBoundingClientRect().left - nomineeGrid.clientWidth/2;
  }
}

function selectNominee(card, nomineeIndex) {
  if (transitionLocked) return;
  const isAlreadySelected = selectedNominee === nomineeIndex && card.classList.contains('is-selected');

  [...nomineeGrid.children].forEach((item) => {
    item.classList.remove('is-selected');
    item.setAttribute('aria-checked', 'false');
  });

  if (isAlreadySelected) {
    nomineeGrid.classList.remove('has-selection');
    selectedNominee = null;
    categorySelections[currentCategory] = null;
    saveStageDraft('ballot');
    syncPendingShortcut();
    return;
  }

  card.classList.add('is-selected');
  card.setAttribute('aria-checked', 'true');
  nomineeGrid.classList.add('has-selection');
  selectedNominee = nomineeIndex;
  categorySelections[currentCategory] = nomineeIndex;
  saveStageDraft('ballot');
  syncPendingShortcut();

  if (window.matchMedia('(max-width: 760px)').matches) {
    requestAnimationFrame(() => {
      const cardRect = card.getBoundingClientRect();
      const gridRect = nomineeGrid.getBoundingClientRect();
      nomineeGrid.scrollTo({ left: nomineeGrid.scrollLeft + cardRect.left + cardRect.width / 2 - gridRect.left - gridRect.width / 2, behavior: 'smooth' });
    });
  }
}

function stopRunnerScene() {
  if (runnerAnimationFrame) {
    cancelAnimationFrame(runnerAnimationFrame);
    runnerAnimationFrame = null;
  }
  runnerScene?.classList.remove('is-active', 'is-standing');
  runnerScene?.setAttribute('aria-hidden', 'true');
  runnerCurrentX = null;
  runnerCurrentY = null;
  runnerCurrentSize = null;
  runnerShadowY = null;
  runnerVisibleVoter = null;
  runnerEntryComplete = false;
  runnerExiting = false;
}

async function playRunnerScene(voterName, onComplete, request = runnerRequest) {
  const assets = RUNNER_ASSETS[voterName];
  if (!assets || !runnerScene || !runnerFigure || !runnerShadow || !runnerRunImage || !runnerStandImage || !identityModal || !voterSelectButton) {
    onComplete?.();
    return;
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const modalCard = identityModal.querySelector('.modal-card');
  if (!modalCard || !identityModal.classList.contains('is-open')) {
    onComplete?.();
    return;
  }

  if (runnerAnimationFrame) {
    cancelAnimationFrame(runnerAnimationFrame);
    runnerAnimationFrame = null;
  }

  // Decodificar as duas poses antes de tocar a animação. O mesmo elemento
  // já preparado é movido para o palco; nenhuma imagem antiga é reutilizada.
  let run, stand;
  try {
    run = await prepareImage(assets.run);
    stand = await prepareImage(assets.stand);
    await Promise.all([run.decode?.(), stand.decode?.()]);
  } catch (_) {
    if (request === runnerRequest) showToast('Não foi possível carregar o personagem. Selecione o nome novamente.');
    return;
  }
  if (request !== runnerRequest || selectedVoter !== voterName || !identityModal.classList.contains('is-open') || identityModal.classList.contains('is-closing')) return;
  runnerScene.classList.remove('is-active', 'is-standing');
  function swapPose(old, image, id, className) {
    image.id = id; image.className = className; image.alt = ''; image.draggable = false;
    if (old !== image) old.replaceWith(image);
    return image;
  }
  runnerRunImage = swapPose(runnerRunImage, run, 'runnerRunImage', 'runner-frame runner-run');
  runnerStandImage = swapPose(runnerStandImage, stand, 'runnerStandImage', 'runner-frame runner-stand');
  runnerVisibleVoter = voterName;
  runnerEntryComplete = false;
  runnerExiting = false;

  const isMobile = window.matchMedia('(max-width: 760px)').matches;
  const modalRect = modalCard.getBoundingClientRect();

  // Desktop: personagem ligeiramente mais alto que a modal.
  // Mobile: ainda grande, mas sem encobrir a tela inteira.
  const size = isMobile
    ? Math.max(245, modalRect.height * 0.82)
    : Math.max(390, modalRect.height * 1.16);

  const shadowW = Math.round(size * 0.45);
  runnerFigure.style.width = `${size}px`;
  runnerShadow.style.width = `${shadowW}px`;

  // Entra totalmente de fora da tela, pela direita.
  const startX = window.innerWidth + size * 0.55;

  // Para fora da modal, à esquerda, ocupando a área lateral.
  const endX = isMobile
    ? Math.max(6, modalRect.left - size * 0.74)
    : Math.max(12, modalRect.left - size * 0.92);

  // Centraliza verticalmente o personagem em relação à modal.
  const figureBaseY = modalRect.top + (modalRect.height - size) / 2;
  const shadowBaseY = figureBaseY + size * 0.90;

  const runDuration = reduceMotion ? 1 : (isMobile ? 1850 : 2050);
  runnerCurrentX = startX;
  runnerCurrentY = figureBaseY;
  runnerCurrentSize = size;
  runnerShadowY = shadowBaseY;
  // A posição inicial precisa existir ANTES de tornar o palco visível.
  runnerFigure.style.transform = `translate3d(${startX}px, ${figureBaseY}px, 0)`;
  runnerShadow.style.transform = `translate3d(${startX + size * .28}px, ${shadowBaseY}px, 0)`;
  runnerShadow.style.opacity = '.27';
  runnerScene.classList.add('is-active');
  runnerScene.setAttribute('aria-hidden', 'false');
  const start = performance.now();

  function frame(now) {
    const elapsed = now - start;
    const p = Math.min(elapsed / runDuration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    const x = startX + (endX - startX) * eased;
    const bob = reduceMotion ? 0 : Math.sin(p * Math.PI * 8.4) * (isMobile ? 5 : 6.5);
    const tilt = reduceMotion ? 0 : Math.sin(p * Math.PI * 8.4) * 2.2;
    const shadowScale = 1 - Math.abs(bob) / 22;

    runnerCurrentX = x;
    runnerCurrentY = figureBaseY + bob;

    runnerFigure.style.transform = `translate3d(${x}px, ${figureBaseY + bob}px, 0) rotate(${tilt}deg)`;
    runnerShadow.style.transform = `translate3d(${x + size * 0.28}px, ${shadowBaseY}px, 0) scale(${shadowScale})`;
    runnerShadow.style.opacity = `${0.14 + shadowScale * 0.18}`;

    if (p < 1) {
      runnerAnimationFrame = requestAnimationFrame(frame);
      return;
    }

    runnerAnimationFrame = null;
    runnerCurrentX = endX;
    runnerCurrentY = figureBaseY;
    runnerFigure.style.transform = `translate3d(${endX}px, ${figureBaseY}px, 0)`;
    runnerShadow.style.transform = `translate3d(${endX + size * 0.28}px, ${shadowBaseY}px, 0) scale(1)`;
    runnerShadow.style.opacity = '.27';
    runnerScene.classList.add('is-standing');
    runnerEntryComplete = true;
    onComplete?.();
  }

  runnerAnimationFrame = requestAnimationFrame(frame);
}

function exitRunnerScene(onComplete) {
  if (!runnerScene?.classList.contains('is-active') || !runnerVisibleVoter) {
    stopRunnerScene();
    onComplete?.();
    return;
  }

  if (runnerAnimationFrame) {
    cancelAnimationFrame(runnerAnimationFrame);
    runnerAnimationFrame = null;
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const size = runnerCurrentSize || 390;
  const startX = runnerCurrentX ?? 0;
  const baseY = runnerCurrentY ?? 0;
  const shadowY = runnerShadowY ?? (baseY + size * .9);
  const endX = -size * 1.35;
  const duration = reduceMotion ? 1 : 950;
  const start = performance.now();

  // Volta para a pose de corrida antes de sair.
  runnerExiting = true;
  runnerEntryComplete = false;
  runnerScene.classList.remove('is-standing');

  function frame(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = p * p; // acelera suavemente para fora
    const x = startX + (endX - startX) * eased;
    const bob = reduceMotion ? 0 : Math.sin(p * Math.PI * 5.5) * 5;
    const tilt = reduceMotion ? 0 : Math.sin(p * Math.PI * 5.5) * 2;

    runnerCurrentX = x;
    runnerCurrentY = baseY + bob;

    runnerFigure.style.transform = `translate3d(${x}px, ${baseY + bob}px, 0) rotate(${tilt}deg)`;
    runnerShadow.style.transform = `translate3d(${x + size * 0.28}px, ${shadowY}px, 0) scale(.96)`;
    runnerShadow.style.opacity = `${0.26 * (1 - p * .45)}`;

    if (p < 1) {
      runnerAnimationFrame = requestAnimationFrame(frame);
      return;
    }

    runnerAnimationFrame = null;
    stopRunnerScene();
    onComplete?.();
  }

  runnerAnimationFrame = requestAnimationFrame(frame);
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('is-visible');
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2400);
}

startVotingButton.addEventListener('click', openModal);
categoriesStartButton.addEventListener('click', openModal);
voterSelectButton.addEventListener('click', toggleSelect);

identityModal.addEventListener('click', (event) => {
  if (event.target.hasAttribute('data-close-modal')) closeModal();
});

document.addEventListener('click', (event) => {
  if (voterSelect.classList.contains('is-open') && !voterSelect.contains(event.target)) closeSelect();
});

cancelIdentity.addEventListener('click', () => closeModal());

confirmIdentity.addEventListener('click', () => {
  if (!selectedVoter || confirmIdentity.disabled || transitionLocked || resumeDialog.open) return;
  try {
    const participation = readParticipation(selectedVoter);
    const kind = participationKinds.find(k => !participation.records[k]);
    if (!kind) { resetParticipation(); preparePersonal(participation.records); enterParticipation('personal'); return; }
    const draft = readStageDraft(kind, selectedVoter);
    if (draft || participation.exists) {
      resumeChoice = {voter:selectedVoter, kind};
      const label = personalLabels[kind];
      const answered = draft ? draft.selections.filter(Number.isInteger).length : 0;
      document.getElementById('resumeTitle').textContent = draft ? 'Continue de onde parou!' : 'Sua participação continua!';
      document.getElementById('resumeCopy').textContent = draft
        ? label + ': ' + answered + ' de ' + stageLength(kind) + ' respostas salvas. As respostas desta etapa só entram no resultado depois da conclusão.'
        : 'Sua próxima etapa é: ' + label + '. As etapas já confirmadas continuam registradas.';
      document.getElementById('resumeStartOver').hidden = !draft || (kind==='ballot' && !participation.exists);
      document.getElementById('resumeContinue').textContent = draft ? 'Continuar de onde parei →' : 'Continuar participação →';
      resumeDialog.showModal();
      document.getElementById('resumeContinue').focus();
      return;
    }
    beginParticipation(participation, kind, draft);
  } catch (_) { showToast('Não foi possível consultar as respostas salvas. Habilite o armazenamento do navegador.'); }
});

function enterParticipation(destination) {
  try { sessionStorage.setItem('oituawards_voter', selectedVoter); } catch (_) {}
  confirmIdentity.disabled = true;
  voterSelectButton.disabled = true;
  cancelIdentity.disabled = true;

  const beginCurtainTransition = () => {
    // Mantém a modal exatamente como está enquanto a cortina começa a fechar.
    // A modal só é escondida quando a cortina já cobriu a tela por completo.
    transitionTo(destination);
    if (destination === 'personal') setTimeout(() => { showToast('Você já possui respostas registradas.'); document.getElementById('personalTitle').focus({preventScroll:true}); }, reducedMotion()?480:1120);

    window.setTimeout(() => {
      closeSelect();
      identityModal.classList.remove('is-open', 'is-closing');
      identityModal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');

      voterSelectButton.disabled = false;
      cancelIdentity.disabled = false;
      confirmIdentity.disabled = false;
    }, 460);
  };

  // Primeiro o personagem corre para fora pela esquerda.
  // Com a modal ainda visível, a cortina só começa depois que ele sai totalmente.
  if (runnerVisibleVoter) {
    exitRunnerScene(beginCurtainTransition);
  } else {
    beginCurtainTransition();
  }
}

// Category-to-category: a short golden sweep and directional content movement.
async function moveCategory(index) {
  if (transitionLocked) return;
  transitionLocked = true;
  const direction = index > currentCategory ? 1 : -1;
  try {
    if (!reducedMotion()) {
      categorySweep.classList.toggle('is-back', direction < 0);
      categorySweep.classList.add('is-sweeping');
      await voteStage.animate([{opacity:1,transform:'translateX(0)'},{opacity:0,transform:`translateX(${-direction * 24}px)`}],{duration:145,easing:'ease-in',fill:'forwards'}).finished;
    }
    // Clear the outgoing animation before revealing new content.
    voteStage.getAnimations().forEach(animation => animation.cancel());
    currentCategory = index;
    saveStageDraft('ballot');
    renderCategory(index);
    voteScroll.scrollTop = 0;
    if (!reducedMotion()) await voteStage.animate([{opacity:0,transform:`translateX(${direction * 27}px)`},{opacity:1,transform:'translateX(0)'}],{duration:260,easing:'cubic-bezier(.2,.75,.25,1)'}).finished;
  } finally {
    voteStage.getAnimations().forEach(animation => animation.cancel());
    categorySweep.classList.remove('is-sweeping','is-back');
    transitionLocked = false;
  }
}

function renderReview() {
  reviewStage.hidden = false;
  receiptStage.hidden = true;
  reviewScreen.classList.remove('receipt-only');
  reviewScreen.querySelector('[data-home]').removeAttribute('tabindex');
  reviewScreen.querySelector('[data-home]').removeAttribute('aria-disabled');
  reviewGrid.replaceChildren();
  const chosen = categorySelections.filter(value => value !== null).length;
  document.getElementById('reviewSummary').textContent = `${chosen} de ${CATEGORIES.length} categorias votadas. Confira suas escolhas.`;
  CATEGORIES.forEach((category, i) => {
    const nominee = category.nominees[categorySelections[i]];
    const item = document.createElement('div');
    item.className = 'review-item';
    item.style.setProperty('--reveal-index', i);
    const card = document.createElement('div');
    card.className = 'review-card' + (nominee ? '' : ' is-empty');
    if (nominee) {
      card.dataset.voted = 'true';
      const check = document.createElement('span'); check.className = 'nominee-check'; check.textContent = '✓'; check.setAttribute('aria-hidden','true');
      const photo = document.createElement('div'); photo.className = 'nominee-photo';
      if (nominee.photo) { const img = document.createElement('img'); img.src = nominee.photo; img.alt = ''; photo.append(img); }
      else { const placeholder = document.createElement('span'); placeholder.className = 'photo-placeholder'; photo.append(placeholder); }
      card.append(check, photo);
    } else { const empty = document.createElement('span'); empty.className = 'review-empty-mark'; empty.textContent = '—'; empty.setAttribute('aria-hidden','true'); card.append(empty); }
    const name = document.createElement('span'); name.className = 'nominee-name'; name.textContent = nominee ? nominee.name : 'Sem voto'; card.append(name);
    const label = document.createElement('span'); label.className = 'review-category'; label.textContent = category.title;
    card.append(label); item.append(card); reviewGrid.append(item);
  });
  confirmVotes.disabled = chosen === 0;
  editVotes.disabled = false;
}

const reviewPremiere = document.getElementById('reviewPremiere');
const premiereParticles = document.getElementById('premiereParticles');

// Deterministic particles: lightweight transforms, no per-frame JS or external assets.
function preparePremiere() {
  premiereParticles.replaceChildren();
  const count = window.matchMedia('(max-width: 760px)').matches ? 24 : 40;
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('span');
    const angle = (i * 137.508) * Math.PI / 180;
    const radius = 22 + ((i * 19) % 42);
    particle.style.setProperty('--px', `${Math.cos(angle)*radius}vw`);
    particle.style.setProperty('--py', `${Math.sin(angle)*radius*.78}vh`);
    particle.style.setProperty('--particle-size', `${2 + i % 4}px`);
    particle.style.setProperty('--particle-delay', `${(i*79)%540}ms`);
    if (i % 7 === 0) particle.classList.add('is-star');
    premiereParticles.append(particle);
  }
}

async function premiereReview() {
  if (transitionLocked || pendingDialog.open) return;
  if (missingCategories().length) { showPendingVotes(); return; }
  saveStageDraft('ballot', true);
  transitionLocked = true;
  const animated = !reducedMotion();
  try {
    if (animated) {
      preparePremiere();
      reviewPremiere.classList.add('is-playing');
      await wait(600); // The stage is fully covered before changing screens.
    }
    renderReview();
    reviewStage.classList.remove('is-revealing', 'is-premiere-revealing');
    setScreen('review');
    if (animated) {
      // Block review controls during the entire reveal, including keyboard activation.
      reviewStage.inert = true;
      await wait(2720);
      reviewStage.classList.add('is-premiere-revealing');
      await wait(1580);
    }
  } finally {
    reviewPremiere.classList.remove('is-playing');
    reviewStage.classList.remove('is-premiere-revealing');
    reviewStage.inert = false;
    premiereParticles.replaceChildren();
    transitionLocked = false;
    document.getElementById('reviewTitle').focus({preventScroll:true});
  }
}

async function elegantTransition(target) {
  if (target === 'review') return premiereReview();
  if (transitionLocked) return;
  transitionLocked = true;
  try {
    if (!reducedMotion()) { pageTransition.classList.add('is-reviewing'); await wait(480); }
    if (target === 'review') { renderReview(); reviewStage.classList.remove('is-revealing'); }
    if (target === 'vote') { currentCategory = 0; saveStageDraft('ballot'); }
    setScreen(target);
    if (target === 'vote') renderCategory(0);
    if (target === 'review' && !reducedMotion()) { void reviewStage.offsetWidth; reviewStage.classList.add('is-revealing'); }
    if (!reducedMotion()) await wait(540);
    if (target === 'review') document.getElementById('reviewTitle').focus({preventScroll:true});
  } finally { pageTransition.classList.remove('is-reviewing'); transitionLocked = false; }
}

function persistBallot() {
  const ballot = { voter:selectedVoter, confirmedAt:new Date().toISOString(), votes:CATEGORIES.map((category,i)=>({category:category.title, nominee:category.nominees[categorySelections[i]]?.name ?? null, nomineeIndex:categorySelections[i]})) };
  try { localStorage.setItem(participationKey('ballot', selectedVoter), JSON.stringify(ballot)); }
  catch (_) { return false; }
  personalRecords.ballot = ballot; clearStageDraft('ballot', selectedVoter); return true;
}


// Smooth, deterministic scrolling, including when Safari's native smooth scroll is unavailable.
function scrollReviewTo(target, duration = 400) {
  const from = reviewScroll.scrollTop;
  const to = Math.max(0, Math.min(target, reviewScroll.scrollHeight - reviewScroll.clientHeight));
  if (Math.abs(from - to) < 2 || reducedMotion()) { reviewScroll.scrollTop = to; return Promise.resolve(); }
  return new Promise(resolve => {
    let start;
    function frame(now) {
      if (start === undefined) start = now;
      const t = Math.min(1, (now - start) / duration);
      const ease = t < .5 ? 4*t*t*t : 1-Math.pow(-2*t+2,3)/2;
      reviewScroll.scrollTop = from + (to - from)*ease;
      if (t < 1) requestAnimationFrame(frame);
      else { reviewScroll.scrollTop = to; resolve(); }
    }
    requestAnimationFrame(frame);
  });
}

async function depositBallot() {
  if (transitionLocked || confirmVotes.disabled || !selectedVoter) return;
  if (missingCategories().length) { setScreen('vote'); renderCategory(currentCategory); showPendingVotes(); return; }
  if (preventRepeatStage('ballot')) return;
  transitionLocked = true;
  confirmVotes.disabled = editVotes.disabled = true;
  const saved = persistBallot();
  if (!saved) { transitionLocked=false; confirmVotes.disabled=editVotes.disabled=false; showToast('Não foi possível confirmar os votos. Tente novamente.'); return; }
  const cards = [...reviewGrid.querySelectorAll('[data-voted]')];
  let presentedReceipt = false;
  const showReceipt = () => {
    reviewStage.classList.remove('is-revealing','is-collecting');
    reviewStage.hidden = true; receiptStage.hidden = false; reviewScroll.scrollTop = 0;
    reviewScreen.classList.add('receipt-only');
    reviewScreen.querySelector('[data-home]').setAttribute('tabindex','-1');
    reviewScreen.querySelector('[data-home]').setAttribute('aria-disabled','true');
    document.getElementById('receiptTitle').textContent = saved ? 'Votos confirmados!' : 'Votação concluída';
    document.getElementById('receiptMessage').textContent = saved ? 'Suas escolhas foram salvas neste dispositivo. Obrigado por participar!' : 'Não foi possível salvar suas escolhas neste dispositivo. A votação ainda não está conectada a um servidor.';
    presentedReceipt = true;

  };
  try {
    if (!reducedMotion()) {
      // Leave the actual review on screen; never create a separate grid or jump to the top.
      urnScene.classList.add('is-preparing');
      await scrollReviewTo(0, 780);
      reviewStage.classList.add('is-collecting');
      urnScene.classList.add('is-active');
      await wait(60);
      urn.classList.add('is-raised','is-hero-glow');
      await wait(850);

      // Group the original cards by their actual row, independent of desktop/mobile column count.
      const rows = [];
      for (const card of cards) {
        const top = card.getBoundingClientRect().top;
        const last = rows[rows.length-1];
        if (last && Math.abs(last.top-top)<4) last.cards.push(card);
        else rows.push({top,cards:[card]});
      }
      let sequence = 0;
      for (const row of rows) {
        const slot = urnSlot.getBoundingClientRect();
        const area = reviewScroll.getBoundingClientRect();
        const rect = row.cards[0].getBoundingClientRect();
        const ceiling = area.top+12;
        const floor = slot.top-24;
        const desired = Math.max(ceiling, ceiling+(floor-ceiling-rect.height)*.5);
        // Keep the entire next row above the slot whenever the viewport permits.
        if (rect.top < ceiling || rect.bottom > floor) {
          await scrollReviewTo(reviewScroll.scrollTop + rect.top - desired, 350);
        }
        // Fly from the exact on-screen position of each chosen review card.
        // A clone is only used during flight, so the original grid does not reflow.
        await Promise.all(row.cards.map(async (card, j) => {
          const i = sequence+j;
          await wait(j*115);
          const r = card.getBoundingClientRect();
          const target = urnSlot.getBoundingClientRect();
          const clone = card.cloneNode(true);
          clone.classList.add('flying-card'); clone.removeAttribute('data-voted');
          Object.assign(clone.style,{left:`${r.left}px`,top:`${r.top}px`,width:`${r.width}px`,height:`${r.height}px`,minHeight:'0',margin:'0',backdropFilter:'none',webkitBackdropFilter:'none'});
          flightLayer.append(clone); card.style.visibility = 'hidden';
          const dx = target.left+target.width/2-r.left-r.width/2;
          const dy = target.top+target.height/2-r.top-r.height/2;
          const twist = i%2 ? 12 : -12;
          const slotScale = Math.min(.3, target.width/r.width*.85);
          await clone.animate([
            {transform:'translate3d(0,0,0) scale(1)',opacity:1,offset:0},
            {transform:`translate3d(${dx*.16}px,${dy*.14-24}px,0) rotate(${twist}deg) scale(.93)`,opacity:1,offset:.24},
            {transform:`translate3d(${dx*.72}px,${dy*.76-15}px,0) rotate(${twist*.4}deg) scale(.48)`,opacity:1,offset:.70},
            {transform:`translate3d(${dx}px,${dy-4}px,0) scale(${slotScale},.12)`,opacity:1,offset:.91},
            {transform:`translate3d(${dx}px,${dy+5}px,0) scale(${slotScale*.75},.015)`,opacity:0,offset:1}
          ],{duration:380,easing:'cubic-bezier(.35,.05,.55,1)',fill:'forwards'}).finished;
          clone.remove();
          urn.classList.remove('is-pulsing'); void urnSlot.offsetWidth; urn.classList.add('is-pulsing');
        }));
        sequence += row.cards.length;
      }
      await wait(200);
      urn.classList.remove('is-pulsing'); urn.classList.add('is-leaving');
      await wait(680);
      urnScene.classList.add('is-finishing');
      showReceipt();
      await wait(420);
    }
  } finally {
    if (!presentedReceipt) showReceipt();
    urnScene.classList.remove('is-active','is-preparing','is-finishing');
    urn.classList.remove('is-raised','is-leaving','is-pulsing','is-hero-glow');
    flightLayer.replaceChildren();
    cards.forEach(card => card.style.visibility = '');
    reviewStage.classList.remove('is-collecting');
    document.getElementById('receiptTitle').focus({preventScroll:true});
    transitionLocked = false;
  }
}

previousButton.addEventListener('click', () => {
  if (transitionLocked) return;
  if (currentCategory > 0) moveCategory(currentCategory - 1);
  else transitionTo('home');
});
nextButton.addEventListener('click', () => {
  if (transitionLocked) return;
  if (currentCategory < CATEGORIES.length - 1) moveCategory(currentCategory + 1);
  else elegantTransition('review');
});
confirmVotes.addEventListener('click', depositBallot);
editVotes.addEventListener('click', () => elegantTransition('vote'));
categoriesButton.addEventListener('click', () => transitionTo('categories'));

document.querySelectorAll('[data-home]').forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    if (transitionLocked || (reviewScreen.classList.contains('is-active') && !receiptStage.hidden)) return;
    stopRunnerScene();
    if (!homeScreen.classList.contains('is-active')) transitionTo('home');
  });
});

document.addEventListener('keydown', (event) => {
  if (pendingDialog.open || document.getElementById('resumeDialog').open) return;
  if (event.key === 'Escape' && voterSelect.classList.contains('is-open')) {
    closeSelect();
    voterSelectButton.focus();
    return;
  }
  if (event.key === 'Escape' && identityModal.classList.contains('is-open')) {
    closeModal();
  }
});

syncHeroTitle();
renderVoters();
renderCategoriesList();
renderCategory(currentCategory);
// A abertura agora é controlada pelo carregamento inicial.


/* V52 — dinâmica secreta, sem exposição das associações na interface. */
const QUIZ_QUESTIONS = [
  {
    "question": "Seu sábado ideal?",
    "options": [
      {
        "text": "Treino e brunch",
        "profile": "Tiago"
      },
      {
        "text": "Um encontro romântico",
        "profile": "Osvaldo"
      },
      {
        "text": "Livro e Pink Floyd",
        "profile": "Marcelo"
      },
      {
        "text": "Resolver um quebra-cabeça",
        "profile": "Mauri"
      }
    ]
  },
  {
    "question": "O que mais te atrai?",
    "options": [
      {
        "text": "Disciplina",
        "profile": "Tiago"
      },
      {
        "text": "Inteligência",
        "profile": "Marcelo"
      },
      {
        "text": "Criatividade",
        "profile": "Mauri"
      },
      {
        "text": "Beleza feminina",
        "profile": "Osvaldo"
      }
    ]
  },
  {
    "question": "Qual seu estilo?",
    "options": [
      {
        "text": "Camiseta de rock nacional",
        "profile": "Marcelo"
      },
      {
        "text": "Look imprevisível",
        "profile": "Mauri"
      },
      {
        "text": "Chinelo, calça velha e blusa surrada",
        "profile": "Osvaldo"
      },
      {
        "text": "Coque samurai",
        "profile": "Tiago"
      }
    ]
  },
  {
    "question": "Seu passatempo favorito?",
    "options": [
      {
        "text": "Amar intensamente",
        "profile": "Osvaldo"
      },
      {
        "text": "Treinar judô",
        "profile": "Tiago"
      },
      {
        "text": "Criar vídeo na IAl",
        "profile": "Mauri"
      },
      {
        "text": "Blogueirar no instagram",
        "profile": "Marcelo"
      }
    ]
  },
  {
    "question": "Seu maior defeito?",
    "options": [
      {
        "text": "Padrões elevados demais",
        "profile": "Tiago"
      },
      {
        "text": "Analisar todo comportamento",
        "profile": "Marcelo"
      },
      {
        "text": "Amar demais",
        "profile": "Osvaldo"
      },
      {
        "text": "Começar mil projetos e não terminar",
        "profile": "Mauri"
      }
    ]
  },
  {
    "question": "O que não pode faltar pra você?",
    "options": [
      {
        "text": "Um bom livro",
        "profile": "Marcelo"
      },
      {
        "text": "Tabaco",
        "profile": "Osvaldo"
      },
      {
        "text": "ChatGPT",
        "profile": "Mauri"
      },
      {
        "text": "Um piano pra tocar",
        "profile": "Tiago"
      }
    ]
  },
  {
    "question": "Seu papel no grupo?",
    "options": [
      {
        "text": "O atleta",
        "profile": "Tiago"
      },
      {
        "text": "O psicanalista",
        "profile": "Marcelo"
      },
      {
        "text": "O articulador político",
        "profile": "Mauri"
      },
      {
        "text": "O cavalheiro",
        "profile": "Osvaldo"
      }
    ]
  },
  {
    "question": "O que mais te irrita?",
    "options": [
      {
        "text": "Falta de respeito",
        "profile": "Osvaldo"
      },
      {
        "text": "Gente superficial",
        "profile": "Marcelo"
      },
      {
        "text": "Falta de disciplina",
        "profile": "Tiago"
      },
      {
        "text": "Tecnologia que não funciona",
        "profile": "Mauri"
      }
    ]
  },
  {
    "question": "Qual objeto te representa?",
    "options": [
      {
        "text": "Um vinil raro",
        "profile": "Marcelo"
      },
      {
        "text": "Um isqueiro vintage",
        "profile": "Osvaldo"
      },
      {
        "text": "Um notebook com 30 abas abertas",
        "profile": "Mauri"
      },
      {
        "text": "Sapatênis",
        "profile": "Tiago"
      }
    ]
  },
  {
    "question": "Qual rolê você prefere?",
    "options": [
      {
        "text": "Show de rock nacional",
        "profile": "Marcelo"
      },
      {
        "text": "Feira Tech",
        "profile": "Mauri"
      },
      {
        "text": "Oficina de cerâmica",
        "profile": "Tiago"
      },
      {
        "text": "Fumódromo com os amigos",
        "profile": "Osvaldo"
      }
    ]
  },
  {
    "question": "Qual sua maior redflag?",
    "options": [
      {
        "text": "Psicanalisar todos sem ser solicitado",
        "profile": "Marcelo"
      },
      {
        "text": "Esquerdomacho twink",
        "profile": "Tiago"
      },
      {
        "text": "Residentes casadas",
        "profile": "Osvaldo"
      },
      {
        "text": "Jogar tudo (tudo mesmo) na IA",
        "profile": "Mauri"
      }
    ]
  },
  {
    "question": "Onde gastaria seu dinheiro sem culpa?",
    "options": [
      {
        "text": "Brunch gourmet",
        "profile": "Tiago"
      },
      {
        "text": "Pulseiras e braceletes",
        "profile": "Marcelo"
      },
      {
        "text": "Cloude Pro",
        "profile": "Mauri"
      },
      {
        "text": "Cerveja e cigarro",
        "profile": "Osvaldo"
      }
    ]
  },
  {
    "question": "Qual superpoder escolheria?",
    "options": [
      {
        "text": "Conhecimento infinito",
        "profile": "Mauri"
      },
      {
        "text": "Força sobre-humana",
        "profile": "Tiago"
      },
      {
        "text": "Encantar qualquer pessoa",
        "profile": "Osvaldo"
      },
      {
        "text": "Ler pensamentos",
        "profile": "Marcelo"
      }
    ]
  },
  {
    "question": "Como você é no WhatsApp?",
    "options": [
      {
        "text": "Manda textões reflexivos",
        "profile": "Marcelo"
      },
      {
        "text": "Elogia todos os stories",
        "profile": "Osvaldo"
      },
      {
        "text": "Dispara links e ideias aleatórias",
        "profile": "Mauri"
      },
      {
        "text": "Não usa telas",
        "profile": "Tiago"
      }
    ]
  },
  {
    "question": "O que você mais odeia?",
    "options": [
      {
        "text": "Cólicas",
        "profile": "Tiago"
      },
      {
        "text": "Fonoaudiologia",
        "profile": "Mauri"
      },
      {
        "text": "Homens",
        "profile": "Osvaldo"
      },
      {
        "text": "Bioenergética",
        "profile": "Marcelo"
      }
    ]
  }
];

const quizScroll = document.getElementById('quizScroll');
const quizIntro = document.getElementById('quizIntro');
const quizPlay = document.getElementById('quizPlay');
const quizDone = document.getElementById('quizDone');
const quizPanel = document.getElementById('quizPanel');
const quizOptions = document.getElementById('quizOptions');
const quizQuestion = document.getElementById('quizQuestion');
const quizNext = document.getElementById('quizNext');
const quizBack = document.getElementById('quizBack');
const quizFlash = document.getElementById('quizFlash');
let quizIndex = 0, quizBusy = false;
const quizAnswers = Array(QUIZ_QUESTIONS.length).fill(null);
containVerticalOverscroll(quizScroll);
function updateQuizControls() {
  quizNext.disabled = quizBusy || !Number.isInteger(quizAnswers[quizIndex]);
  quizBack.disabled = quizBusy || quizIndex === 0;
  document.getElementById('quizHint').textContent = Number.isInteger(quizAnswers[quizIndex]) ? 'Resposta selecionada.' : 'Escolha uma alternativa para continuar.';
  const count = quizAnswers.filter(Number.isInteger).length;
  document.getElementById('quizFill').style.width = `${count / QUIZ_QUESTIONS.length * 100}%`;
  document.getElementById('quizTrack').setAttribute('aria-valuenow', count);
}
function renderQuizQuestion() {
  const q = QUIZ_QUESTIONS[quizIndex];
  document.getElementById('quizCounter').textContent = `${String(quizIndex+1).padStart(2,'0')} / ${QUIZ_QUESTIONS.length}`;
  document.getElementById('quizKicker').textContent = `PERGUNTA ${String(quizIndex+1).padStart(2,'0')}`;
  quizQuestion.textContent = q.question;
  quizOptions.replaceChildren();
  q.options.forEach((option, index) => {
    const label = document.createElement('label'); label.className = 'quiz-option'; label.style.setProperty('--option-index',index);
    const radio = document.createElement('input'); radio.type = 'radio'; radio.name = 'quizAnswer'; radio.value = String(index); radio.checked = quizAnswers[quizIndex] === index;
    const letter = document.createElement('span'); letter.className = 'quiz-letter'; letter.textContent = 'ABCD'[index]; letter.setAttribute('aria-hidden','true');
    const text = document.createElement('span'); text.className = 'quiz-option-text'; text.textContent = option.text;
    const check = document.createElement('span'); check.className = 'quiz-check'; check.textContent = '✓'; check.setAttribute('aria-hidden','true');
    radio.addEventListener('change', () => { if (quizBusy) return; quizAnswers[quizIndex] = index; saveStageDraft('quiz'); updateQuizControls(); });
    label.append(radio,letter,text,check); quizOptions.append(label);
  });
  quizNext.querySelector('span').textContent = quizIndex === QUIZ_QUESTIONS.length-1 ? 'Concluir dinâmica' : 'Próxima';
  updateQuizControls();
}
function animateQuizIn(direction=1) {
  quizPanel.style.setProperty('--quiz-direction',direction);
  quizPanel.classList.remove('quiz-enter'); void quizPanel.offsetWidth; quizPanel.classList.add('quiz-enter');
}
async function moveQuiz(target) {
  if (quizBusy || transitionLocked || target < 0 || target >= QUIZ_QUESTIONS.length || (target > quizIndex && !Number.isInteger(quizAnswers[quizIndex]))) return;
  quizBusy = true; quizOptions.disabled = true; updateQuizControls();
  const direction = target > quizIndex ? 1 : -1;
  try {
    if (!reducedMotion()) {
      quizFlash.classList.remove('is-sweeping'); void quizFlash.offsetWidth; quizFlash.classList.add('is-sweeping');
      await quizPanel.animate([{opacity:1,transform:'translateX(0)'},{opacity:0,transform:`translateX(${-direction*22}px)`}],{duration:180,easing:'ease-in',fill:'none'}).finished;
    }
    quizIndex = target; saveStageDraft('quiz'); renderQuizQuestion(); quizScroll.scrollTop = 0; animateQuizIn(direction);
    if (!reducedMotion()) await wait(390);
  } finally { quizBusy = false; quizOptions.disabled = false; updateQuizControls(); quizQuestion.focus({preventScroll:true}); }
}
function storeQuiz() {
  const scores = {Tiago:0,Osvaldo:0,Marcelo:0,Mauri:0};
  const answers = QUIZ_QUESTIONS.map((q,i) => { const option = q.options[quizAnswers[i]]; scores[option.profile]++; return {question:i+1, option:'ABCD'[quizAnswers[i]], text:option.text}; });
  const record = {voter:selectedVoter, completedAt:new Date().toISOString(), answers, scores};
  try { localStorage.setItem(participationKey('quiz', selectedVoter),JSON.stringify(record)); } catch (_) { return false; }
  personalRecords.quiz = record; clearStageDraft('quiz', selectedVoter); return true;
}
async function finishQuiz() {
  if (quizBusy || transitionLocked || quizAnswers.some((a,i)=>!Number.isInteger(a)||!QUIZ_QUESTIONS[i].options[a])) return;
  if (preventRepeatStage('quiz')) return;
  quizBusy = true; quizOptions.disabled = true; updateQuizControls();
  const saved = storeQuiz();
  if (!saved) { quizBusy=false; quizOptions.disabled=false; updateQuizControls(); showToast('Não foi possível confirmar as respostas. Tente novamente.'); return; }
  if (!reducedMotion()) {
    quizFlash.classList.remove('is-sweeping'); void quizFlash.offsetWidth; quizFlash.classList.add('is-sweeping');
    await quizPlay.animate([{opacity:1,transform:'scale(1)'},{opacity:0,transform:'scale(.97)'}],{duration:250,easing:'ease-in'}).finished;
  }
  quizPlay.hidden = true; quizDone.hidden = false; quizScroll.scrollTop = 0;
  document.getElementById('quizDoneCopy').textContent = saved ? 'Você concluiu a dinâmica secreta. A surpresa fica para depois!' : 'Você concluiu a dinâmica, mas não foi possível salvar suas respostas neste dispositivo.';

  document.getElementById('quizDoneTitle').focus({preventScroll:true});
}
function openQuizStage() {
  if (transitionLocked || !selectedVoter) return;
  quizAnswers.fill(null); quizIndex = 0; quizBusy = false; quizOptions.disabled = false;
  quizIntro.hidden = false; quizPlay.hidden = true; quizDone.hidden = true;
  saveStageDraft('quiz', false, true);
  transitionTo('quiz');
  setTimeout(()=>document.getElementById('quizIntroTitle').focus({preventScroll:true}),reducedMotion()?0:1110);
}
document.getElementById('continueAwards').addEventListener('click', () => {
  if (!receiptStage.hidden) openQuizStage();
});
document.getElementById('beginQuiz').addEventListener('click', () => {
  if (transitionLocked || quizBusy || quizIntro.hidden) return;
  quizIntro.hidden = true; quizPlay.hidden = false; saveStageDraft('quiz'); renderQuizQuestion(); quizScroll.scrollTop = 0; animateQuizIn(); quizQuestion.focus({preventScroll:true});
});
quizBack.addEventListener('click',()=>moveQuiz(quizIndex-1));
quizNext.addEventListener('click',()=> { if (quizNext.disabled || quizBusy || transitionLocked) return; if (quizIndex === QUIZ_QUESTIONS.length-1) finishQuiz(); else moveQuiz(quizIndex+1); });


/* V53 — última dinâmica: Quem é mais provável */
const LIKELY_AVATARS = {
  'JOÃO PAULO BARBOSA SOUSA': 'assets/stage-joao.webp',
  'MARIANA ALVES DOS SANTOS': 'assets/stage-mariana.webp',
  'GEOVANA DE MELO MENDES': 'assets/stage-geovana.webp',
  'JÚLIA NOGUEIRA DE SOUZA PALMEIRA': 'assets/stage-julia.webp',
  'LUIS GUILHERME TEIXEIRA MADUREIRA DE FREITAS': 'assets/stage-luis.webp',
  'FERNANDO MELO VERISSIMO': 'assets/stage-fernando.webp',
  'IAN GABRIEL TOBIAS DE ALMEIDA': 'assets/stage-ian.webp',
  'JOÃO VICTOR MESQUITA GOMES': 'assets/stage-joaovictor.webp',
  'JULIANA GUIDASTRI AGUIAR': 'assets/stage-juliana.webp',
  'HENRIQUE LECOMTE FERREIRA': 'assets/stage-henrique.webp'
};
const LIKELY_QUESTIONS = [
  'Quem é mais provável de contaminar o campo cirúrgico',
  'Quem é mais provável de ir virado para enfermaria',
  'Quem é mais provável de colocar o ciclo clínico pra atender no lugar',
  'Quem é mais provável de discutir com residente',
  'Quem é mais provável de dar uma conduta errada com muita confiança',
  'Quem é mais provável de desmaiar no centro cirúrgico',
  'Quem é mais provável de ter uma crise existencial no meio do plantão',
  'Quem é mais provável de escolher uma especialidade diferente a cada semana',
  'Quem é mais provável de mandar mensagem reclamando do preceptor no grupo errado',
  'Quem é mais provável de fazer uma anamnese de 1 hora e esquecer a queixa principal',
  'Quem é mais provável de virar medinfluencer',
  'Quem é mais provável de ser denunciado no CRM'
];
const likelyScroll = document.getElementById('likelyScroll');
const likelyPlay = document.getElementById('likelyPlay');
const likelyDone = document.getElementById('likelyDone');
const likelyCast = document.getElementById('likelyCast');
const likelyQuestion = document.getElementById('likelyQuestion');
const likelyNext = document.getElementById('likelyNext');
const likelyAnswers = Array(LIKELY_QUESTIONS.length).fill(null);
let likelyIndex = 0, likelyBusy = false;
containVerticalOverscroll(likelyScroll);
function renderLikelyCast() {
  likelyCast.replaceChildren();
  VOTERS.forEach((name, index) => {
    const btn = document.createElement('button'); btn.type = 'button'; btn.className = 'likely-person';
    btn.setAttribute('aria-label', name); btn.setAttribute('aria-pressed','false');
    const beam = document.createElement('span'); beam.className = 'likely-beam'; beam.setAttribute('aria-hidden','true');
    const floor = document.createElement('span'); floor.className = 'likely-floor'; floor.setAttribute('aria-hidden','true');
    const image = document.createElement('img'); image.src = LIKELY_AVATARS[name]; image.alt = ''; image.draggable = false;
    const check = document.createElement('span'); check.className = 'likely-check'; check.textContent = '✓'; check.setAttribute('aria-hidden','true');
    btn.append(beam,floor,image,check); likelyCast.append(btn);
    btn.addEventListener('click', () => {
      if (likelyBusy || transitionLocked) return;
      likelyAnswers[likelyIndex] = index; saveStageDraft('likely'); updateLikely();
    });
  });
}
function updateLikely() {
  const selected = likelyAnswers[likelyIndex];
  likelyCast.classList.toggle('has-choice', Number.isInteger(selected));
  [...likelyCast.children].forEach((btn,i)=>{
    btn.classList.toggle('is-lit', i===selected); btn.setAttribute('aria-pressed',String(i===selected)); btn.disabled=likelyBusy;
  });
  likelyNext.disabled = likelyBusy || !Number.isInteger(selected);
  likelyNext.classList.toggle('is-ready', Number.isInteger(selected) && !likelyBusy);
  document.getElementById('likelyHint').textContent = Number.isInteger(selected) ? 'Escolha registrada.' : 'Escolha um personagem.';
  const answered = likelyAnswers.filter(Number.isInteger).length;
  document.getElementById('likelyFill').style.width = `${answered/LIKELY_QUESTIONS.length*100}%`;
  document.getElementById('likelyTrack').setAttribute('aria-valuemax', LIKELY_QUESTIONS.length);
  document.getElementById('likelyTrack').setAttribute('aria-valuenow', answered);
}
function showLikelyQuestion() {
  document.getElementById('likelyCounter').textContent = `${String(likelyIndex+1).padStart(2,'0')} / ${String(LIKELY_QUESTIONS.length).padStart(2,'0')}`;
  likelyQuestion.textContent = LIKELY_QUESTIONS[likelyIndex] + '?';
  likelyNext.querySelector('span').textContent = likelyIndex === LIKELY_QUESTIONS.length-1 ? 'Concluir dinâmica' : 'Próxima';
  updateLikely();
}
async function advanceLikely() {
  if (likelyBusy || transitionLocked || !Number.isInteger(likelyAnswers[likelyIndex])) return;
  likelyBusy=true; updateLikely();
  likelyCast.classList.remove('has-choice');
  [...likelyCast.children].forEach(btn=>{btn.classList.remove('is-lit');btn.setAttribute('aria-pressed','false');});
  try {
    if (likelyIndex === LIKELY_QUESTIONS.length-1) {
      if (likelyAnswers.some(a=>!Number.isInteger(a)||!VOTERS[a])) return;
      if (preventRepeatStage('likely')) return;
      const record={voter:selectedVoter, completedAt:new Date().toISOString(), answers:LIKELY_QUESTIONS.map((question,i)=>({question,person:VOTERS[likelyAnswers[i]]}))};
      let saved=true; try {localStorage.setItem(participationKey('likely', selectedVoter),JSON.stringify(record));} catch (_) {saved=false;}
      if (!saved) { showToast('Não foi possível confirmar as respostas. Tente novamente.'); return; }
      personalRecords.likely = record; clearStageDraft('likely', selectedVoter);
      if (!reducedMotion()) await likelyPlay.animate([{opacity:1},{opacity:0}],{duration:300,easing:'ease-in'}).finished;
      likelyPlay.hidden=true; likelyDone.hidden=false; likelyScroll.scrollTop=0;
      document.getElementById('likelyDoneCopy').textContent=saved?'Obrigado por participar. Até o grande momento!':'Dinâmica concluída, mas não foi possível salvar as respostas neste dispositivo.';

      document.getElementById('likelyDoneTitle').focus({preventScroll:true}); return;
    }
    if (!reducedMotion()) await likelyQuestion.animate([{opacity:1,transform:'translateY(0)',filter:'brightness(1)'},{opacity:0,transform:'translateY(-10px)',filter:'brightness(1.6)'}],{duration:180,easing:'ease-in'}).finished;
    likelyIndex++; saveStageDraft('likely'); showLikelyQuestion();
    if (likelyScroll.scrollTop > 0) likelyScroll.scrollTo({top:0,behavior:reducedMotion()?'instant':'smooth'});
    if (!reducedMotion()) await likelyQuestion.animate([{opacity:0,transform:'translateY(12px)',filter:'brightness(1.7)'},{opacity:1,transform:'translateY(0)',filter:'brightness(1)'}],{duration:330,easing:'cubic-bezier(.2,.8,.2,1)'}).finished;
  } finally { likelyBusy=false; if(!likelyPlay.hidden){updateLikely();likelyQuestion.focus({preventScroll:true});} }
}
function openLikelyStage(){
  if(transitionLocked || !selectedVoter) return;
  likelyIndex=0; likelyBusy=false; likelyAnswers.fill(null); likelyPlay.hidden=false; likelyDone.hidden=true;
  renderLikelyCast(); showLikelyQuestion(); saveStageDraft('likely'); transitionTo('likely');
  setTimeout(()=>likelyQuestion.focus({preventScroll:true}),reducedMotion()?0:1110);
}
document.getElementById('continueToLikely').addEventListener('click',()=>{
  if(!quizDone.hidden) openLikelyStage();
});
likelyNext.addEventListener('click',advanceLikely);


/* V56 — início personalizado após a última dinâmica. Somente respostas efetivamente concluídas na sessão. */
let personalRecords = {ballot:null, quiz:null, likely:null};
const personalList = document.getElementById('personalList');
const personalTabs = [...document.querySelectorAll('[data-personal-tab]')];
const personalLabels = {ballot:'Premiação',quiz:'Dinâmica secreta',likely:'Quem é mais provável'};
containVerticalOverscroll(personalList);
const PERSONAL_DISPLAY_NAMES = {
  "JOÃO PAULO BARBOSA SOUSA": "João Paulo",
  "JOÃO VICTOR MESQUITA GOMES": "João Victor",
  "IAN GABRIEL TOBIAS DE ALMEIDA": "Ian",
  "HENRIQUE LECOMTE FERREIRA": "Henrique Lecomte",
  "LUIS GUILHERME TEIXEIRA MADUREIRA DE FREITAS": "Luís Guilherme",
  "MARIANA ALVES DOS SANTOS": "Mariana",
  "JULIANA GUIDASTRI AGUIAR": "Juliana",
  "JÚLIA NOGUEIRA DE SOUZA PALMEIRA": "Júlia",
  "GEOVANA DE MELO MENDES": "Geovana",
  "FERNANDO MELO VERISSIMO": "Fernando"
};
function personalRows(kind) {
  const record = personalRecords[kind];
  if (!record || record.voter !== selectedVoter) return [];
  if (kind === 'ballot') return record.votes.map((v,i)=>({label:v.category, text:v.nominee, image:CATEGORIES[i]?.nominees[v.nomineeIndex]?.photo, mark:String(i+1).padStart(2,'0')})).filter(v=>v.text);
  if (kind === 'quiz') return record.answers.map((a,i)=>({label:QUIZ_QUESTIONS[i].question, text:a.text, mark:a.option}));
  return record.answers.map((a,i)=>({label:a.question+'?', text:PERSONAL_DISPLAY_NAMES[a.person] ?? a.person, image:LIKELY_AVATARS[a.person], avatar:true, mark:String(i+1).padStart(2,'0')}));
}
function renderPersonal(kind, animate=false) {
  const rows=personalRows(kind);
  personalTabs.forEach(btn=>btn.setAttribute('aria-pressed',String(btn.dataset.personalTab===kind)));
  document.getElementById('personalCount').textContent = `${rows.length} ${rows.length===1?'resposta':'respostas'}`;
  personalList.setAttribute('aria-label','Respostas — '+personalLabels[kind]);
  personalList.replaceChildren();
  if (!rows.length) {
    const empty=document.createElement('div'); empty.className='personal-empty'; empty.textContent='Nenhuma resposta registrada nesta dinâmica.'; personalList.append(empty);
  }
  rows.forEach((row,i)=>{
    const item=document.createElement('div'); item.className='personal-row';
    const medallion=document.createElement('div'); medallion.className='personal-medallion'+(row.avatar?' is-avatar':'');
    if(row.image){const img=document.createElement('img');img.src=row.image;img.alt='';medallion.append(img);}else{medallion.textContent=row.mark;}
    const details=document.createElement('div');details.className='personal-details';
    const name=document.createElement('p'); name.className='personal-answer';name.textContent=row.text;
    const label=document.createElement('p');label.className='personal-category';label.textContent=row.label;
    details.append(name,label);item.append(medallion,details);personalList.append(item);
    if(animate&&!reducedMotion()) item.animate([{opacity:0,transform:'translateY(9px)'},{opacity:1,transform:'none'}],{duration:320,delay:Math.min(i,5)*38,easing:'ease-out',fill:'backwards'});
  });
  personalList.scrollTop=0;
}
personalTabs.forEach(btn=>btn.addEventListener('click',()=>{if(!transitionLocked)renderPersonal(btn.dataset.personalTab,true);}));
document.getElementById('returnToPersonalHome').addEventListener('click',()=>{
  if(transitionLocked || likelyDone.hidden || !selectedVoter || !LIKELY_AVATARS[selectedVoter])return;
  preparePersonal(personalRecords); transitionTo('personal');
  setTimeout(()=>document.getElementById('personalTitle').focus({preventScroll:true}),reducedMotion()?0:1120);
});

/* V58 — local results. This client-only password is an interface gate, not server authentication. */
const resultsPasswordDialog = document.getElementById('resultsPasswordDialog');
const resultsPasswordInput = document.getElementById('resultsPassword');
const resultsPasswordError = document.getElementById('resultsPasswordError');
const resultsScroll = document.getElementById('resultsScroll');
const resultsContent = document.getElementById('resultsContent');
const resultsTabs = [...document.querySelectorAll('[data-results-tab]')];
const RESULT_PROFILES = ['Tiago','Osvaldo','Marcelo','Mauri'];
let activeResultsTab = 'ballot';
containVerticalOverscroll(resultsScroll);
const resultPercent = (n,total) => total ? n/total*100 : 0;
const formatResultPercent = value => value.toLocaleString('pt-BR',{minimumFractionDigits:1,maximumFractionDigits:1})+'%';
// V71: align saved ballots by category title, not array position.
// Existing ballots have no GymRats vote; never manufacture one or shift votes.
function normalizeBallotRecord(record) {
  if (!Array.isArray(record?.votes)) return record;
  const byCategory = new Map(record.votes.filter(entry=>entry && typeof entry.category==='string').map(entry=>[entry.category,entry]));
  return {...record, votes:CATEGORIES.map(category=>{
    const entry=byCategory.get(category.title);
    if (!entry) return {category:category.title,nominee:null,nomineeIndex:null};
    // Previous wording changes and the duplicate option remain compatible.
    if (category.title==='Melhor ambulatório' && entry.nomineeIndex===3 && entry.nominee==='Oftalmologia (Solimar)')
      return {...entry,nominee:category.nominees[3].name};
    if (category.title==='Melhor momento Luís' && entry.nomineeIndex===3 && entry.nominee==='Chego atrasado, abro a porta beeem devagar, fez mais barulho que o normal e o Joffre fica me olhando')
      return {...entry,nominee:category.nominees[3].name};
    if (category.title==='Melhor piada interna' && entry.nomineeIndex===4 && entry.nominee==='Meu nome é Joao Paulo, eu não tenho um par na vida, nao gosto desses trem de saude mental')
      return {...entry,nominee:category.nominees[4].name};
    if (category.title==='Melhor piada interna' && entry.nomineeIndex===7 && entry.nominee===category.nominees[1].name)
      return {...entry,nomineeIndex:1};
    return entry;
  })};
}

function readResultsRecord(kind,voter) {
  try {
    const record = JSON.parse(localStorage.getItem('oituawards_'+kind+':'+voter));
    return completedRecord(kind, record, voter) ? (kind==='ballot'?normalizeBallotRecord(record):record) : null;
  } catch (_) { return null; }
}
function collectResults() {
  const ballot = CATEGORIES.map(c=>c.nominees.map(n=>({...n,count:0})));
  const likely = LIKELY_QUESTIONS.map(()=>VOTERS.map(v=>({name:PERSONAL_DISPLAY_NAMES[v]??v,photo:LIKELY_AVATARS[v],avatar:true,count:0})));
  const quiz = RESULT_PROFILES.map(name=>({name,count:0}));
  const individuals=[]; const counts={ballot:0,quiz:0,likely:0};
  VOTERS.forEach(voter=>{
    const b=readResultsRecord('ballot',voter); let bCount=0;
    CATEGORIES.forEach((c,i)=>{
      const entry=Array.isArray(b?.votes)?b.votes[i]:null;
      if(entry?.category===c.title && Number.isInteger(entry.nomineeIndex) && c.nominees[entry.nomineeIndex]?.name===entry.nominee && entry.nominee!==null){ballot[i][entry.nomineeIndex].count++;bCount++;}
    });
    if(bCount)counts.ballot++;
    const q=readResultsRecord('quiz',voter); const points=RESULT_PROFILES.map(name=>({name,count:0})); let qCount=0;
    QUIZ_QUESTIONS.forEach((question,i)=>{
      const a=Array.isArray(q?.answers)?q.answers[i]:null;
      if(!a || a.question!==i+1 || typeof a.option!=='string' || !/^[ABCD]$/.test(a.option))return;
      const option=question.options['ABCD'.indexOf(a.option)];
      const index=RESULT_PROFILES.indexOf(option?.profile);
      if(index<0 || a.text!==option.text)return;
      points[index].count++;quiz[index].count++;qCount++;
    });
    if(qCount){counts.quiz++;individuals.push({name:PERSONAL_DISPLAY_NAMES[voter]??voter,photo:LIKELY_AVATARS[voter],points,total:qCount});}
    const l=readResultsRecord('likely',voter); let lCount=0;
    LIKELY_QUESTIONS.forEach((question,i)=>{
      const a=Array.isArray(l?.answers)?l.answers[i]:null;const index=VOTERS.indexOf(a?.person);
      if(a?.question===question && index>=0){likely[i][index].count++;lCount++;}
    });
    if(lCount)counts.likely++;
  });
  return {ballot,quiz,likely,individuals,counts};
}
function resultElement(tag,className,text) {
  const e=document.createElement(tag); if(className)e.className=className; if(text!==undefined)e.textContent=text; return e;
}
function resultRanking(entries,kind) {
  const total=entries.reduce((sum,e)=>sum+e.count,0);
  const list=resultElement('ol','result-ranking');
  // Equal counts retain the original order; no arbitrary winner is declared.
  const ordered=[...entries].sort((a,b)=>b.count-a.count);
  ordered.forEach((entry,i)=>{
    const li=resultElement('li','result-row');
    const rank=ordered.findIndex(e=>e.count===entry.count)+1;
    li.append(resultElement('span','result-rank',total?String(rank).padStart(2,'0'):'—'));
    if(entry.photo){const photo=resultElement('img','result-photo'+(entry.avatar?' is-avatar':''));photo.src=entry.photo;photo.alt='';photo.loading='lazy';li.append(photo);}
    const main=resultElement('div','result-row-main');main.append(resultElement('span','result-name',entry.name));
    const track=resultElement('div','result-track');track.setAttribute('aria-hidden','true');const fill=resultElement('span','result-fill');fill.style.width=resultPercent(entry.count,total)+'%';track.append(fill);main.append(track);li.append(main);
    const numbers=resultElement('div','result-numbers');numbers.append(resultElement('strong','',String(entry.count)),resultElement('span','',formatResultPercent(resultPercent(entry.count,total))));li.append(numbers);list.append(li);
  });
  return list;
}
function resultGroup(title,entries,kind,index) {
  const total=entries.reduce((sum,e)=>sum+e.count,0);
  const group=resultElement('article','result-group');
  const head=resultElement('div','result-group-heading');const text=resultElement('div','');
  if(index!==undefined)text.append(resultElement('p','category-kicker','CATEGORIA '+String(index+1).padStart(2,'0')));
  text.append(resultElement('h2','',title));head.append(text,resultElement('span','result-total',total+' '+(kind==='quiz'?'respostas':total===1?'voto':'votos')));group.append(head,resultRanking(entries,kind));return group;
}
function renderResults(kind,animate=true) {
  if(!resultsUnlocked)return;
  activeResultsTab=kind;
  const data=collectResults();const stats=document.getElementById('resultsStats');stats.replaceChildren();
  const labels={ballot:'Premiação',quiz:'Dinâmica secreta',likely:'Quem é mais provável'};
  Object.keys(labels).forEach(key=>{const stat=resultElement('div','result-stat');stat.append(resultElement('span','',labels[key]),resultElement('strong','',String(data.counts[key])),resultElement('small','','de '+VOTERS.length+' participantes'));stats.append(stat);});
  resultsTabs.forEach(btn=>btn.setAttribute('aria-pressed',String(btn.dataset.resultsTab===kind)));
  resultsContent.replaceChildren();
  const note=document.getElementById('resultsNote');
  note.textContent=kind==='quiz'?'Percentual sobre todas as respostas válidas da dinâmica. Abaixo, a pontuação individual de cada participante.':'Percentual calculado sobre os votos válidos de cada categoria, em ordem decrescente.';
  if(!data.counts[kind]){resultsContent.append(resultElement('p','results-empty','Ainda não há respostas registradas nesta dinâmica neste navegador.'));}
  if(kind==='ballot')CATEGORIES.forEach((c,i)=>resultsContent.append(resultGroup(c.title,data.ballot[i],kind,i)));
  if(kind==='likely')LIKELY_QUESTIONS.forEach((q,i)=>resultsContent.append(resultGroup(q+'?',data.likely[i],kind,i)));
  if(kind==='quiz'){
    resultsContent.append(resultGroup('Classificação geral dos perfis',data.quiz,kind));
    if(data.individuals.length){const heading=resultElement('h2','results-individual-heading','Perfis por participante');resultsContent.append(heading);data.individuals.forEach(person=>{const detail=resultElement('details','result-group result-individual');const summary=resultElement('summary','result-person-summary');const img=resultElement('img','result-photo is-avatar');img.src=person.photo;img.alt='';summary.append(img,resultElement('span','',person.name),resultElement('small','',person.total+' respostas'));detail.append(summary,resultRanking(person.points,'quiz'));resultsContent.append(detail);});}
  }
  if(animate&&!reducedMotion())resultsContent.animate([{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'none'}],{duration:340,easing:'ease-out'});
}
document.getElementById('openResults').addEventListener('click',()=>{
  if(transitionLocked||!categoriesScreen.classList.contains('is-active'))return;
  resultsPasswordInput.value='';resultsPasswordError.textContent='';resultsPasswordInput.removeAttribute('aria-invalid');resultsPasswordDialog.showModal();resultsPasswordInput.focus();
});
resultsPasswordInput.addEventListener('input',()=>{resultsPasswordError.textContent='';resultsPasswordInput.removeAttribute('aria-invalid');});
document.getElementById('cancelResultsPassword').addEventListener('click',()=>resultsPasswordDialog.close());
resultsPasswordDialog.addEventListener('close',()=>{resultsPasswordInput.value='';resultsPasswordError.textContent='';});
document.getElementById('resultsPasswordForm').addEventListener('submit',event=>{
  event.preventDefault();
  if(!resultsPasswordDialog.open || transitionLocked || !categoriesScreen.classList.contains('is-active'))return;
  if(resultsPasswordInput.value!=='oituawardsdosdivos@'){
    resultsPasswordError.textContent='Senha incorreta. Tente novamente.';resultsPasswordInput.setAttribute('aria-invalid','true');resultsPasswordInput.select();return;
  }
  resultsPasswordDialog.close();resultsUnlocked=true;renderResults('ballot',false);transitionTo('results');
  setTimeout(()=>document.getElementById('resultsTitle').focus({preventScroll:true}),reducedMotion()?0:1120);
});
document.getElementById('closeResults').addEventListener('click',()=>{if(!transitionLocked&&resultsUnlocked)transitionTo('categories');});
resultsTabs.forEach(btn=>btn.addEventListener('click',()=>{if(!transitionLocked&&resultsUnlocked)renderResults(btn.dataset.resultsTab);}));
document.getElementById('refreshResults').addEventListener('click',()=>{if(!transitionLocked&&resultsUnlocked)renderResults(activeResultsTab);});
window.addEventListener('storage',event=>{if(resultsUnlocked&&document.getElementById('resultsScreen').classList.contains('is-active')&&(!event.key||event.key.startsWith('oituawards_')))renderResults(activeResultsTab,false);});


/* V59 — participação única por nome, no armazenamento local. */
const participationKinds = ['ballot','quiz','likely'];
const participationKey = (kind,voter) => 'oituawards_'+kind+':'+voter;

/* Resumable participation: drafts are separate from confirmed results. */
const draftKey = (kind,voter) => 'oituawards_draft_'+kind+':'+voter;
const stageLength = kind => kind==='ballot' ? CATEGORIES.length : kind==='quiz' ? QUIZ_QUESTIONS.length : LIKELY_QUESTIONS.length;
const stageSelections = kind => kind==='ballot' ? categorySelections : kind==='quiz' ? quizAnswers : likelyAnswers;
function validSelection(kind,i,value) {
  return Number.isInteger(value) && value>=0 && value<(kind==='ballot'?CATEGORIES[i].nominees.length:kind==='quiz'?QUIZ_QUESTIONS[i].options.length:VOTERS.length);
}
function ballotChoices(record) {
  const normalized = normalizeBallotRecord(record);
  return CATEGORIES.map((c,i)=>{
    const entry=normalized?.votes?.[i];
    if(!entry || entry.category!==c.title || typeof entry.nominee!=='string') return null;
    if(validSelection('ballot',i,entry.nomineeIndex) && c.nominees[entry.nomineeIndex].name===entry.nominee) return entry.nomineeIndex;
    const index=c.nominees.findIndex(n=>n.name===entry.nominee);
    return index<0?null:index;
  });
}
function recordChoices(kind,record) {
  if(kind==='ballot') return ballotChoices(record);
  if(kind==='quiz') return QUIZ_QUESTIONS.map((q,i)=>{
    const a=record?.answers?.[i]; const index=typeof a?.option==='string' && /^[ABCD]$/.test(a.option)?'ABCD'.indexOf(a.option):-1;
    return a?.question===i+1 && q.options[index]?.text===a.text ? index : null;
  });
  return LIKELY_QUESTIONS.map((q,i)=>{
    const a=record?.answers?.[i]; const index=VOTERS.indexOf(a?.person);
    return a?.question===q && index>=0?index:null;
  });
}
function completedRecord(kind,record,voter) {
  if(!record || record.voter!==voter) return false;
  const choices=recordChoices(kind,record);
  if(kind!=='ballot') return !!record.completedAt && Array.isArray(record.answers) && record.answers.length===stageLength(kind) && choices.every(Number.isInteger);
  if(!record.confirmedAt || !Array.isArray(record.votes)) return false;
  const titles=new Set(record.votes.map(v=>v?.category));
  if(titles.size!==record.votes.length || record.votes.some(v=>!v || typeof v.nominee!=='string' || !v.nominee || !CATEGORIES.some(c=>c.title===v.category))) return false;
  // Preserve previously confirmed ballots from before the GymRats category was introduced.
  return (record.votes.length===CATEGORIES.length && choices.every(Number.isInteger)) ||
    (record.votes.length===CATEGORIES.length-1 && !titles.has('Melhor foto do GymRats') &&
     CATEGORIES.every((c,i)=>c.title==='Melhor foto do GymRats' || Number.isInteger(choices[i])));
}
function readStageDraft(kind,voter) {
  const raw=localStorage.getItem(draftKey(kind,voter));
  let draft=null;
  try { draft=JSON.parse(raw); } catch (_) {}
  if(draft?.voter===voter && draft.kind===kind && Array.isArray(draft.selections)) {
    const selections=kind==='ballot' && Array.isArray(draft.votes) ? ballotChoices(draft) :
      Array.from({length:stageLength(kind)},(_,i)=>validSelection(kind,i,draft.selections[i])?draft.selections[i]:null);
    if(!selections.some(Number.isInteger)) return null;
    const mappedIndex=kind==='ballot' && draft.category ? CATEGORIES.findIndex(c=>c.title===draft.category) : draft.index;
    const index=Number.isInteger(mappedIndex)&&mappedIndex>=0&&mappedIndex<stageLength(kind)?mappedIndex:0;
    const firstMissing=selections.findIndex(v=>v===null);
    return {...draft,selections,index:kind!=='ballot'&&firstMissing>=0?Math.min(index,firstMissing):index,review:kind==='ballot'&&draft.review&&firstMissing<0};
  }
  // Recover old partial records without counting them as confirmed or erasing them.
  let old=null;
  try { old=JSON.parse(localStorage.getItem(participationKey(kind,voter))); } catch (_) {}
  if(old?.voter===voter && !completedRecord(kind,old,voter)) {
    const selections=recordChoices(kind,old);
    if(selections.some(Number.isInteger)) {
      const missing=selections.findIndex(v=>v===null);
      return {voter,kind,selections,index:missing<0?stageLength(kind)-1:missing,review:kind==='ballot'&&missing<0};
    }
  }
  return null;
}
function clearStageDraft(kind,voter) {
  try { localStorage.removeItem(draftKey(kind,voter)); } catch (_) {}
}
function saveStageDraft(kind,review=false,intro=false) {
  if(!VOTERS.includes(selectedVoter)) return;
  const selections=[...stageSelections(kind)];
  const index=kind==='ballot'?currentCategory:kind==='quiz'?quizIndex:likelyIndex;
  const draft={voter:selectedVoter,kind,selections,index,review,intro,updatedAt:new Date().toISOString()};
  if(kind==='ballot') {
    draft.category=CATEGORIES[index].title; draft.reviewAttempted=reviewAttempted;
    draft.votes=CATEGORIES.map((c,i)=>({category:c.title,nominee:c.nominees[selections[i]]?.name??null,nomineeIndex:selections[i]}));
  }
  try {
    let existing=null;
    try { existing=JSON.parse(localStorage.getItem(participationKey(kind,selectedVoter))); } catch (_) {}
    if(completedRecord(kind,existing,selectedVoter)) return;
    // Browsing without choosing anything is not a started participation.
    if(!selections.some((value,i)=>validSelection(kind,i,value))) {
      localStorage.removeItem(draftKey(kind,selectedVoter));
      // A recovered, subsequently cleared legacy partial record must not reappear.
      if(existing?.voter===selectedVoter) localStorage.removeItem(participationKey(kind,selectedVoter));
      return;
    }
    localStorage.setItem(draftKey(kind,selectedVoter),JSON.stringify(draft));
  } catch (_) { showToast('Não foi possível salvar o progresso neste dispositivo.'); }
}
const resumeDialog=document.getElementById('resumeDialog');
let resumeChoice=null;
function beginParticipation(participation,kind,draft) {
  resetParticipation();
  personalRecords=participation.records;
  if(draft) stageSelections(kind).splice(0,stageLength(kind),...draft.selections);
  let destination='vote';
  if(kind==='ballot') {
    currentCategory=draft?.index??0; reviewAttempted=!!draft?.reviewAttempted;
    renderCategory(currentCategory);
    if(draft?.review && !missingCategories().length) {renderReview(); destination='review';}
    saveStageDraft(kind,destination==='review');
  } else if(kind==='quiz') {
    destination='quiz'; quizIndex=draft?.index??0; quizBusy=false; quizOptions.disabled=false;
    quizIntro.hidden=!!draft&&!draft.intro; quizPlay.hidden=!quizIntro.hidden; quizDone.hidden=true;
    if(quizIntro.hidden) renderQuizQuestion();
    saveStageDraft(kind,false,!quizIntro.hidden);
  } else {
    destination='likely'; likelyIndex=draft?.index??0; likelyBusy=false; likelyPlay.hidden=false; likelyDone.hidden=true;
    renderLikelyCast(); showLikelyQuestion(); saveStageDraft(kind);
  }
  enterParticipation(destination);
}
function chooseResume(restart) {
  if(!resumeDialog.open || !resumeChoice || transitionLocked || resumeChoice.voter!==selectedVoter) return;
  try {
    const participation=readParticipation(selectedVoter);
    const kind=participationKinds.find(k=>!participation.records[k]);
    if(!kind || kind!==resumeChoice.kind) {resumeDialog.close();showToast('As respostas foram atualizadas. Selecione o participante novamente.');return;}
    const draft=readStageDraft(kind,selectedVoter);
    if(restart) {
      // Only remove the current unfinished stage; confirmed stages stay protected.
      localStorage.removeItem(draftKey(kind,selectedVoter));
      const key=participationKey(kind,selectedVoter);
      const raw=localStorage.getItem(key);
      if(raw!==null) localStorage.removeItem(key);
    }
    resumeDialog.close();
    beginParticipation(participation,kind,restart?null:draft);
  } catch (_) {showToast('Não foi possível acessar o progresso salvo. Tente novamente.');}
}
document.getElementById('resumeContinue').addEventListener('click',()=>chooseResume(false));
document.getElementById('resumeStartOver').addEventListener('click',()=>chooseResume(true));
document.getElementById('resumeRestartAll').addEventListener('click',()=>{
  if(!resumeDialog.open||!resumeChoice||resumeChoice.voter!==selectedVoter||transitionLocked) return;
  openFullReset('resume');
});
document.getElementById('resumeCancel').addEventListener('click',()=>resumeDialog.close());
resumeDialog.addEventListener('close',()=>{resumeChoice=null; if(!confirmIdentity.disabled && identityModal.classList.contains('is-open')) confirmIdentity.focus({preventScroll:true});});

function readParticipation(voter) {
  const records={ballot:null,quiz:null,likely:null}; let exists=false;
  for (const kind of participationKinds) {
    const raw=localStorage.getItem(participationKey(kind,voter));
    if(raw===null) continue;
    try { const r=JSON.parse(raw); if(completedRecord(kind,r,voter)) { exists=true; records[kind]=kind==='ballot'?normalizeBallotRecord(r):r; } } catch (_) {}
  }
  return {records,exists};
}
function resetParticipation() {
  personalRecords={ballot:null,quiz:null,likely:null};
  categorySelections.fill(null); quizAnswers.fill(null); likelyAnswers.fill(null);
  quizIndex=0; likelyIndex=0; quizBusy=false; likelyBusy=false;
  reviewAttempted=false; currentCategory=0; selectedNominee=null;
  reviewStage.hidden=false; receiptStage.hidden=true; reviewScreen.classList.remove('receipt-only');
  reviewScreen.querySelector('[data-home]').removeAttribute('tabindex');
  reviewScreen.querySelector('[data-home]').removeAttribute('aria-disabled');
  confirmVotes.disabled=false; editVotes.disabled=false;
  renderCategory(0);
}
function preparePersonal(records) {
  personalRecords=records;
  const avatar=document.getElementById('personalAvatar'); avatar.src=LIKELY_AVATARS[selectedVoter]; avatar.alt='Seu personagem';
  let exists=false; try {exists=readParticipation(selectedVoter).exists;} catch (_) {}
  document.getElementById('deleteParticipation').hidden=!exists;
  renderPersonal('ballot');
}
function preventRepeatStage(kind) {
  try {
    const participation = readParticipation(selectedVoter);
    if(!participation.records[kind]) return false;
    preparePersonal(participation.records); transitionTo('personal');
    showToast('Esta dinâmica já possui respostas registradas.'); return true;
  } catch (_) {showToast('Não foi possível verificar as respostas salvas. Tente novamente.');return true;}
}
const deleteDialog=document.getElementById('deleteParticipationDialog');
const deletePassword=document.getElementById('deleteParticipationPassword');
const deleteError=document.getElementById('deleteParticipationError');
let deletionVoter=null, deletionOrigin='personal', deletionRequiresPassword=true;
function openFullReset(origin) {
  if(transitionLocked||!VOTERS.includes(selectedVoter)||deleteDialog.open) return;
  try {
    const participation=readParticipation(selectedVoter);
    deletionVoter=selectedVoter; deletionOrigin=origin;
    deletionRequiresPassword=origin==='personal'||participation.exists;
    deletePassword.value='';deleteError.textContent='';deletePassword.removeAttribute('aria-invalid');
    document.getElementById('deleteParticipationTitle').textContent=origin==='resume'?'Começar tudo do zero?':'Excluir respostas?';
    document.getElementById('deleteParticipationCopy').textContent=origin==='resume'
      ? (participation.exists?'Todas as respostas deste participante, inclusive as etapas já confirmadas, serão excluídas da apuração. Você voltará à primeira categoria da premiação. Para proteger os votos confirmados, informe a senha de exclusão.':'Seu progresso nas três etapas será apagado. Você voltará à primeira categoria da premiação.')
      : 'Todas as respostas deste participante nas três dinâmicas serão excluídas da apuração. Só então será possível votar novamente. Esta ação não pode ser desfeita.';
    document.getElementById('deleteParticipationPasswordLabel').hidden=!deletionRequiresPassword;
    deletePassword.hidden=!deletionRequiresPassword; deletePassword.required=deletionRequiresPassword;
    document.getElementById('confirmDeleteParticipation').textContent=origin==='resume'?'Recomeçar toda a votação →':'Excluir e votar novamente →';
    document.getElementById('deleteParticipationName').textContent=PERSONAL_DISPLAY_NAMES[deletionVoter]??deletionVoter;
    deleteDialog.showModal();
    (deletionRequiresPassword?deletePassword:document.getElementById('cancelDeleteParticipation')).focus();
  } catch (_) {showToast('Não foi possível consultar as respostas salvas.');}
}
document.getElementById('personalHome').addEventListener('click',()=>{
  if(transitionLocked||deleteDialog.open)return;
  selectedVoter=''; personalRecords={ballot:null,quiz:null,likely:null};
  voterSelectText.textContent='Selecione uma opção'; confirmIdentity.disabled=true;
  [...voterOptions.children].forEach(item=>{item.classList.remove('is-selected');item.setAttribute('aria-selected','false');});
  try{sessionStorage.removeItem('oituawards_voter');}catch(_){}
  transitionTo('home');
});
document.getElementById('deleteParticipation').addEventListener('click',()=>{
  if(transitionLocked||!VOTERS.includes(selectedVoter)||!document.getElementById('personalScreen').classList.contains('is-active'))return;
  openFullReset('personal');
});
document.getElementById('cancelDeleteParticipation').addEventListener('click',()=>deleteDialog.close());
deletePassword.addEventListener('input',()=>{deleteError.textContent='';deletePassword.removeAttribute('aria-invalid');});
deleteDialog.addEventListener('close',()=>{deletePassword.value='';deleteError.textContent='';deletePassword.removeAttribute('aria-invalid');deletionVoter=null;});
document.getElementById('deleteParticipationForm').addEventListener('submit',event=>{
  event.preventDefault();
  if(!deleteDialog.open||transitionLocked||!deletionVoter||deletionVoter!==selectedVoter)return;
  const fromResume=deletionOrigin==='resume';
  if(fromResume ? (!resumeDialog.open||resumeChoice?.voter!==deletionVoter) : !document.getElementById('personalScreen').classList.contains('is-active')) return;
  try { if(readParticipation(deletionVoter).exists && !deletionRequiresPassword) {
    deletionRequiresPassword=true;
    document.getElementById('deleteParticipationPasswordLabel').hidden=false;
    deletePassword.hidden=false; deletePassword.required=true;
    document.getElementById('deleteParticipationCopy').textContent='Há respostas confirmadas neste dispositivo. Para excluir toda a participação, informe a senha de exclusão.';
    deleteError.textContent='Os registros foram atualizados. Confirme com a senha.';deletePassword.focus();return;
  } } catch (_) {deleteError.textContent='Não foi possível verificar as respostas. Nenhum registro foi excluído.';return;}
  if(deletionRequiresPassword && deletePassword.value!=='excluirrespostas@'){deleteError.textContent='Senha incorreta. Nenhuma resposta foi excluída.';deletePassword.setAttribute('aria-invalid','true');deletePassword.select();return;}
  const keys=participationKinds.flatMap(kind=>[participationKey(kind,deletionVoter),draftKey(kind,deletionVoter)]);
  try {
    // The same keys are read by the results panel; no independent tally can retain old votes.
    for(const key of keys)localStorage.removeItem(key);
    if(keys.some(key=>localStorage.getItem(key)!==null))throw new Error('Exclusão não confirmada');
  } catch (_) {deleteError.textContent='Não foi possível confirmar a exclusão de todos os registros. A nova votação continua bloqueada.';return;}
  resetParticipation(); deleteDialog.close();
  if(fromResume) {resumeDialog.close();enterParticipation('vote');}
  else transitionTo('vote');
  setTimeout(()=>showToast('Você pode começar novamente pela primeira categoria.'),reducedMotion()?500:1120);
});


/* V74 — preparação de todos os recursos antes da entrada. */
const BOOT_ASSETS = ["assets/categories-stage-bg.webp", "assets/home-mobile.webp", "assets/home.webp", "assets/personal-red-carpet.webp", "assets/review-stage-bg.webp", "assets/votacao-mobile.webp", "assets/votacao.webp", "assets/runner-fernando-run.webp", "assets/runner-fernando-stand.webp", "assets/runner-geovana-run.webp", "assets/runner-geovana-stand.webp", "assets/runner-henrique-run.webp", "assets/runner-henrique-stand.webp", "assets/runner-ian-run.webp", "assets/runner-ian-stand.webp", "assets/runner-joao-run.webp", "assets/runner-joao-stand.webp", "assets/runner-joaovictor-run.webp", "assets/runner-joaovictor-stand.webp", "assets/runner-julia-run.webp", "assets/runner-julia-stand.webp", "assets/runner-juliana-run.webp", "assets/runner-juliana-stand.webp", "assets/runner-luis-run.webp", "assets/runner-luis-stand.webp", "assets/runner-mariana-run.webp", "assets/runner-mariana-stand.webp", "assets/amb-endocrino.webp", "assets/amb-oftalmologia.webp", "assets/amb-psiquiatria.webp", "assets/amb-reumatologia.webp", "assets/ambw-adolescente.webp", "assets/ambw-cremic.webp", "assets/ambw-infectologia.webp", "assets/ambw-neurologia.webp", "assets/gymrats-01.webp", "assets/gymrats-02.webp", "assets/gymrats-03.webp", "assets/gymrats-04.webp", "assets/gymrats-05.webp", "assets/gymrats-06.webp", "assets/gymrats-07.webp", "assets/gymrats-08.webp", "assets/gymrats-09.webp", "assets/joke-forest.webp", "assets/joke-gemin.webp", "assets/joke-hdmi.webp", "assets/joke-interno.webp", "assets/joke-joaopaulo-paar.webp", "assets/joke-partiu-leve.webp", "assets/joke-reflexao.webp", "assets/moment-mochila-chao.webp", "assets/moment-penis-cm.webp", "assets/moment-porta.webp", "assets/moment-vai-ter-aula.webp", "assets/prof-frederico-barra.webp", "assets/prof-guilherme-holanda.webp", "assets/prof-henrique-de-paula.webp", "assets/prof-jose-miguel.webp", "assets/prof-renata-machado.webp", "assets/ratinho-cirurgia.webp", "assets/ratinho-covardes.webp", "assets/ratinho-frio.webp", "assets/ratinho-instrumentou.webp", "assets/ratinho-professor.webp", "assets/res-debora.webp", "assets/res-kassem.webp", "assets/res-mercielle.webp", "assets/res-nivea.webp", "assets/rot-endocrino.webp", "assets/rot-obstetricia.webp", "assets/rot-psiquiatria.webp", "assets/rot-uro-nefro.webp", "assets/rotp-cremic.webp", "assets/rotp-dip-dermato.webp", "assets/rotp-megazord.webp", "assets/rotp-neuro.webp", "assets/rotp-saude-mental.webp", "assets/stage-fernando.webp", "assets/stage-geovana.webp", "assets/stage-henrique.webp", "assets/stage-ian.webp", "assets/stage-joao.webp", "assets/stage-joaovictor.webp", "assets/stage-julia.webp", "assets/stage-juliana.webp", "assets/stage-luis.webp", "assets/stage-mariana.webp"];
function prepareImage(src) {
  if (preparedImages.has(src)) return Promise.resolve(preparedImages.get(src));
  return new Promise((resolve,reject) => {
    const img = new Image(); img.decoding = 'async';
    let settled = false;
    const finish = (error) => {
      if (settled) return; settled = true; clearTimeout(timer); img.onload = img.onerror = null;
      if (error) reject(error); else { preparedImages.set(src,img); resolve(img); }
    };
    const timer = setTimeout(() => finish(new Error('Tempo de carregamento excedido')), 45000);
    img.onerror = () => finish(new Error('Imagem indisponível'));
    img.onload = async () => {
      try { if (img.decode) await img.decode(); if (!img.naturalWidth) throw new Error('Imagem inválida'); finish(); }
      catch (error) { finish(error); }
    };
    img.src = src;
  });
}
const bootLoader = document.getElementById('bootLoader');
const bootRetry = document.getElementById('bootRetry');
const bootStatus = document.getElementById('bootStatus');
const bootProgress = document.getElementById('bootProgress');
let bootRunning = false;
function updateBootProgress() {
  const count = preparedImages.size, total = BOOT_ASSETS.length;
  const pct = Math.floor(count / total * 100);
  document.getElementById('bootBar').style.transform = `scaleX(${count / total})`;
  document.getElementById('bootPercent').textContent = `${pct}%`;
  bootProgress.setAttribute('aria-valuenow',String(pct));
  bootStatus.textContent = `${count} de ${total} imagens prontas`;
}
async function bootSite() {
  if (bootRunning) return; bootRunning = true;
  bootRetry.hidden = true; updateBootProgress();
  const pending = BOOT_ASSETS.filter(src => !preparedImages.has(src));
  let cursor = 0; const failures = [];
  async function worker() {
    while (cursor < pending.length) {
      const src = pending[cursor++];
      try { await prepareImage(src); }
      catch (_) { failures.push(src); }
      updateBootProgress();
    }
  }
  await Promise.all(Array.from({length:Math.min(6,pending.length)},worker));
  if (failures.length) {
    bootStatus.textContent = `${failures.length} imagens não carregaram. Confira sua conexão e tente novamente.`;
    bootRetry.hidden = false; bootRunning = false; return;
  }
  bootStatus.textContent = 'Tudo pronto. Bem-vindo ao OituAwards!';
  // A tipografia externa também recebe uma oportunidade de carregar; se a
  // rede bloquear o serviço de fontes, as fontes locais de reserva funcionam.
  if (document.fonts) await Promise.race([Promise.allSettled([document.fonts.load('600 48px "Cormorant Garamond"'),document.fonts.load('500 16px Montserrat')]),wait(3500)]);
  await wait(reducedMotion()?0:250);
  document.documentElement.classList.remove('is-loading');
  document.querySelector('.app-shell').inert = false;
  startHomeIntro();
  bootLoader.classList.add('is-revealing');
  await wait(reducedMotion()?0:570);
  bootLoader.hidden = true;
}
bootRetry.addEventListener('click',bootSite);
bootSite();
