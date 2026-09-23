const aliens = [
    // --- SÉRIE CLÁSSICA (Originais) ---
    { id: "001", name: "Chama", species: "Pyronita", planet: "Pyros", description: "Baseado em magma, a temperatura do corpo é altíssima. Dispara fogo e voa com propulsão térmica.", image: "img/chama.webp" },
    { id: "002", name: "Besta", species: "Vulpimancer", planet: "Vulpin", description: "Não possui olhos, mas tem radar térmico, olfato e audição potentes, além de uma força animalesca.", image: "img/besta.webp" },
    { id: "003", name: "Diamante", species: "Petrosapien", planet: "Petropia", description: "Corpo feito de cristais orgânicos duros. Pode moldar seus membros em escudos e disparar projéteis.", image: "img/diamante.webp" },
    { id: "004", name: "XLR8", species: "Kinecelerano", planet: "Kinet", description: "Possui rodas nos pés que o fazem alcançar 800 km/h. Pode correr sobre a água e criar tornados.", image: "img/xlr8.webp" },
    { id: "005", name: "Massa Cinzenta", species: "Galvaniano", planet: "Galvan Prime", description: "Inteligência formidável. Capaz de entrar em máquinas para consertá-las ou sabotá-las com facilidade.", image: "img/massacinzenta.webp" },
    { id: "006", name: "Quatro Braços", species: "Tetramando", planet: "Khoros", description: "Um gigante vermelho de quatro braços com força bruta e resistência quase impenetrável.", image: "img/quatrobracos.webp" },
    { id: "007", name: "Insectóide", species: "Lepidopterano", planet: "Lepidopterra", description: "Pode voar, cuspir uma gosma fedorenta para prender inimigos e atacar com seu ferrão afiado.", image: "img/insectoide.png" },
    { id: "008", name: "Aquático", species: "Pisccis Volann", planet: "Pisccis", description: "Respira debaixo d'água e nada rápido. Suas mandíbulas podem triturar metal puro.", image: "img/aquatico.png" },
    { id: "009", name: "Ultra T", species: "Mecamorfo Galvânico", planet: "Galvan B", description: "Feito de metal líquido. Pode se infiltrar, modificar e melhorar qualquer tecnologia.", image: "img/ultrat.png" },
    { id: "010", name: "Fantasmático", species: "Ectonurita", planet: "Anur Phaetos", description: "Fica invisível e intangível. Pode possuir inimigos e revelar garras afiadas sob sua capa.", image: "img/fantasmatico.png" },
    
    // --- SÉRIE CLÁSSICA (Adicionais) ---
    { id: "011", name: "Bala de Canhão", species: "Pelarota Arburiano", planet: "Arburia", description: "Pode se enrolar em uma bola blindada quase indestrutível, rolando em altas velocidades para esmagar inimigos.", image: "img/baladecanhao.png" },
    { id: "012", name: "Vinha Selvagem", species: "Florauna", planet: "Flors Verdance", description: "Alienígena planta que pode esticar seus membros, cavar no subsolo rapidamente e lançar sementes explosivas.", image: "img/vinhaselvagem.png" },
    { id: "013", name: "Lobisben", species: "Loboan", planet: "Luna Lobo", description: "Possui força, agilidade e sentidos aprimorados. Seu principal ataque é um uivo sônico devastador.", image: "img/lobisben.png" },
    { id: "014", name: "Snare-oh", species: "Thep Khufan", planet: "Anur Khufos", description: "Corpo feito de faixas que podem se esticar e regenerar. Extremamente leve e imune a muitos danos físicos.", image: "img/snareoh.png" },
    { id: "015", name: "Frankenstrike", species: "Transyliano", planet: "Anur Transyl", description: "Possui inteligência avançada, super força e capacidade de gerar e manipular energia eletromagnética.", image: "img/frankenstrike.png" },
    { id: "016", name: "Glutão", species: "Gourmand", planet: "Peptos XI", description: "Pode comer praticamente qualquer material (exceto comida da Terra) e cuspi-lo como energia explosiva.", image: "img/glutao.png" },
    { id: "017", name: "Idem", species: "Splixson", planet: "Hathor", description: "Pode se clonar infinitamente. Seus clones agem de forma independente, mas compartilham a dor.", image: "img/idem.png" },
    { id: "018", name: "Mega Olhos", species: "Opticoid", planet: "Sightra", description: "Coberto de olhos. Pode disparar raios de energia, congelantes ou de fogo a partir deles, especialmente do peito.", image: "img/megaolhos.png" },
    { id: "019", name: "Gigante", species: "To'kustar", planet: "Tempestades Cósmicas", description: "Tem tamanho colossal. Possui força incomensurável e pode disparar um raio cósmico cruzando os braços.", image: "img/gigante.png" },

    // --- FORÇA ALIENÍGENA ---
    { id: "020", name: "Fogo Fátuo", species: "Methanosiano", planet: "Methanos", description: "Combina fogo e plantas. Pode disparar fogo, controlar vida vegetal e regenerar membros amputados.", image: "img/fogofatuo.png" },
    { id: "021", name: "Eco Eco", species: "Sonorosiano", planet: "Sonorosia", description: "Feito de silicone. Dispara ondas sonoras ensurdecedoras e pode se clonar para ataques em grupo.", image: "img/ecoeco.png" },
    { id: "022", name: "Enormossauro", species: "Vaxasauriano", planet: "Terradino", description: "Diferente dos dinossauros da Terra, tem super força e pode aumentar seu tamanho, criando placas de armadura.", image: "img/enormossauro.png" },
    { id: "023", name: "Arraia-à-Jato", species: "Aerophibiano", planet: "Aeropela", description: "Pode voar e nadar mais rápido que a velocidade do som. Dispara raios de neurochoque pelos olhos e cauda.", image: "img/arraiajato.png" },
    { id: "024", name: "Calafrio", species: "Necrofriggiano", planet: "Kylmyys", description: "Alien fantasmagórico com asas de mariposa. Fica intangível e congela tudo o que atravessa.", image: "img/calafrio.png" },
    { id: "025", name: "Cromático", species: "Cristalsapien", planet: "Petropia", description: "Condutor de energia vivo. Pode absorver raios, lasers e magia para dispará-los de volta como luz ultravioleta.", image: "img/cromatico.png" },
    { id: "026", name: "Artrópode", species: "Cerebrocrustaceano", planet: "Encephalonus IV", description: "Altamente inteligente. Usa seu cérebro exposto para gerar campos de força e tempestades elétricas.", image: "img/artropode.png" },
    { id: "027", name: "Macaco-Aranha", species: "Arachnichimp", planet: "Aranhascimmia", description: "Agilidade impressionante. Possui quatro braços e atira teias extremamente fortes a partir de sua cauda.", image: "img/macacoaranha.png" },
    { id: "028", name: "Gosma", species: "Polymorph", planet: "Viscosia", description: "Massa viscosa e ácida controlada por um disco antigravidade. É indestrutível e passa por qualquer fresta.", image: "img/gosma.png" },
    { id: "029", name: "Alien X", species: "Celestialsapien", planet: "Zvezda", description: "Onipotente. Pode alterar a realidade, o tempo e o espaço, mas suas três personalidades precisam concordar.", image: "img/alienx.png" },
    { id: "030", name: "Estrela Polar", species: "Biosovortiano", planet: "Magnetos", description: "Mestre do magnetismo. Sua cabeça flutua e ele pode atrair, repelir e destruir objetos metálicos com facilidade.", image: "img/estrelapolar.png" },
    { id: "031", name: "Rath", species: "Appoplexiano", planet: "Appoplexia", description: "Extremamente agressivo e forte. Possui garras retráteis e resolve a maioria dos seus problemas com luta livre.", image: "img/rath.png" },
    { id: "032", name: "Nanomech", species: "Nanochip/Humano", planet: "Terra", description: "Tamanho microscópico. Pode voar, disparar bioeletricidade e se adaptar à tecnologia alienígena.", image: "img/nanomech.png" },

    // --- SUPREMACIA ALIENÍGENA ---
    { id: "033", name: "Ameaça Aquática", species: "Orishan", planet: "Kiusana", description: "Tem um exoesqueleto blindado e pode atirar jatos de água de alta pressão de suas mãos.", image: "img/ameacaaquatica.png" },
    { id: "034", name: "Anfíbio", species: "Amperi", planet: "Tesslos", description: "Alienígena aquático que domina a eletricidade, podendo ler mentes através de pulsos elétricos.", image: "img/anfibio.png" },
    { id: "035", name: "Armatu", species: "Talpaedano", planet: "Terraexcava", description: "Tem brocas nas mãos. Cria terremotos intensos e escava em qualquer superfície em segundos.", image: "img/armatu.png" },
    { id: "036", name: "Tartagira", species: "Geochelone Aerio", planet: "Aldabra", description: "Tartaruga mágica imune a mana. Gira seus membros como um ventilador para voar ou criar tornados.", image: "img/tartagira.png" },
    { id: "037", name: "NRG", species: "Prypiatosian-B", planet: "Prypiatos", description: "Um ser de pura energia radioativa dentro de uma armadura de contenção indestrutível que irradia calor.", image: "img/nrg.png" },
    { id: "038", name: "Acelerado", species: "Citrakayah", planet: "Chalybeas", description: "Velocista felino. Atinge velocidades incríveis rapidamente sem a fricção afetar o seu corpo.", image: "img/acelerado.png" },
    { id: "039", name: "Camaleão", species: "Merlinisapien", planet: "Sauria", description: "Sua pele o torna totalmente invisível (camuflagem óptica) e ele é extremamente escorregadio e ágil.", image: "img/camaleao.png" },
    { id: "040", name: "Diabrete", species: "Planchaküle", planet: "Aul-Terrewen", description: "Impulsionado pela necessidade de destruir e consertar máquinas. Transforma sucata em armas letais.", image: "img/diabrete.png" },
    { id: "041", name: "Besouro", species: "Oryctini", planet: "Insetópio", description: "Possui uma casca incrivelmente dura. Ataca rolando e com o chifre reforçado em sua cabeça.", image: "img/besouro.png" },
    { id: "042", name: "Enormossauro Supremo", species: "Vaxasauriano Supremo", planet: "Terradino", description: "Evolução bélica. Suas mãos se transformam em lançadores de mísseis orgânicos e ele é muito mais forte.", image: "img/enormossaurosupremo.png" },
    { id: "043", name: "Fogo Fátuo Supremo", species: "Methanosiano Supremo", planet: "Methanos", description: "Sua aparência lembra uma árvore petrificada. Ao invés de fogo comum, atira chamas azuis muito mais potentes.", image: "img/fogofatuosupremo.png" },
    { id: "044", name: "Eco Eco Supremo", species: "Sonorosiano Supremo", planet: "Sonorosia", description: "Não se clona, mas lança discos sônicos independentes que cercam o inimigo em uma câmara de som fatal.", image: "img/ecoecosupremo.png" },
    { id: "045", name: "Calafrio Supremo", species: "Necrofriggiano Supremo", planet: "Kylmyys", description: "Suas chamas gélidas sugam o calor do ambiente ao redor ao invés de apenas congelar, criando gelo de fogo.", image: "img/calafriosupremo.png" }
];

const gridContainer = document.getElementById('alien-grid');
const searchBar = document.getElementById('search-bar');
const modal = document.getElementById('alien-modal');
const modalContent = document.getElementById('modal-content');
const noResults = document.getElementById('no-results');
const closeModalBtn = document.getElementById('close-modal-btn');

function renderGrid(data) {
    gridContainer.innerHTML = '';
    if (data.length === 0) {
        noResults.classList.remove('hidden');
        return;
    } else {
        noResults.classList.add('hidden');
    }

    data.forEach((alien, index) => {
        const card = document.createElement('div');
        card.className = "glass-panel border border-green-900 hover:border-green-400 rounded-xl p-4 flex flex-col items-center justify-between cursor-pointer transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] card-anim h-full relative overflow-hidden group";
        
        card.style.animationDelay = `${Math.min(index * 0.03, 1)}s`; 
        
        card.innerHTML = `
            <div class="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span class="self-start text-green-600 font-mono font-bold text-xs mb-2 z-10 border border-green-900 bg-black px-2 py-0.5 rounded">#${alien.id}</span>
            
            <div class="w-24 h-24 sm:w-32 sm:h-32 mb-4 z-10 flex items-center justify-center relative">
                <div class="absolute inset-0 rounded-full bg-green-500/5 group-hover:bg-green-500/20 blur-md transition-all"></div>
                <img src="${alien.image}" alt="${alien.name}" class="alien-img max-w-full max-h-full relative z-10" onerror="this.src='https://placehold.co/250x250/000000/ef4444?text=FOTO'">
            </div>
            
            <h3 class="font-ben10 text-white tracking-widest text-center text-2xl z-10 group-hover:text-green-400 transition-colors drop-shadow-md">${alien.name}</h3>
        `;
        card.onclick = () => openModal(alien);
        gridContainer.appendChild(card);
    });
}

searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredAliens = aliens.filter(alien => 
        alien.name.toLowerCase().includes(searchTerm) || 
        alien.species.toLowerCase().includes(searchTerm) ||
        alien.id.includes(searchTerm)
    );
    renderGrid(filteredAliens);
});

function openModal(alien) {
    modalContent.innerHTML = `
        <div class="relative w-32 h-32 sm:w-40 sm:h-40 mb-6 flex items-center justify-center">
            <!-- Anéis giratórios do Omnitrix -->
            <div class="absolute inset-0 border-4 border-t-green-500 border-r-green-500 border-b-transparent border-l-transparent rounded-full animate-spin opacity-80"></div>
            <div class="absolute inset-2 border-4 border-l-green-600 border-b-green-600 border-t-transparent border-r-transparent rounded-full animate-[spin_3s_linear_infinite_reverse] opacity-60"></div>
            
            <!-- IMAGEM CORRIGIDA: Agora ela se mantém inteira e proporcional ao centro -->
            <img src="${alien.image}" alt="${alien.name}" class="alien-img max-w-[75%] max-h-[75%] relative z-10" onerror="this.src='https://placehold.co/250x250/000000/ef4444?text=FOTO'">
        </div>
        
        <div class="bg-black border border-green-800 text-green-500 px-3 py-1 rounded font-mono font-bold text-sm mb-2 shadow-[0_0_10px_rgba(34,197,94,0.3)]">ID: #${alien.id}</div>
        <h2 class="text-6xl font-ben10 neon-text uppercase mb-6 tracking-widest">${alien.name}</h2>
        
        <div class="w-full flex flex-col gap-3">
            <div class="bg-black/60 p-3 rounded border border-green-900/50 flex justify-between items-center font-mono text-sm">
                <strong class="text-green-600">ESPÉCIE:</strong>
                <span class="text-gray-300 uppercase text-right">${alien.species}</span>
            </div>
            <div class="bg-black/60 p-3 rounded border border-green-900/50 flex justify-between items-center font-mono text-sm">
                <strong class="text-green-600">PLANETA:</strong>
                <span class="text-gray-300 uppercase text-right">${alien.planet}</span>
            </div>
            
            <div class="bg-black/80 p-4 rounded-lg border-l-4 border-l-green-500 mt-2">
                <strong class="text-green-600 uppercase text-xs block mb-2 font-mono">DADOS GENÉTICOS:</strong>
                <p class="text-gray-300 leading-relaxed text-sm md:text-base font-sans text-left">
                    ${alien.description}
                </p>
            </div>
        </div>
    `;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; 
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

closeModalBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Inicializa a grade com todos os aliens
renderGrid(aliens);

// --- SISTEMA DE ÁUDIO DO OMNITRIX ---

// Agora a playlist guarda o arquivo de áudio e o nome oficial da faixa
const playlist = [
    { file: "audio/musica1.mp3", title: "CLASSIC" },
    { file: "audio/musica2.mp3", title: "ALIEN FORCE" },
    { file: "audio/musica3.mp3", title: "ULTIMATE ALIEN" }
];

let currentTrack = 0;
const audioPlayer = new Audio(playlist[currentTrack].file);
audioPlayer.volume = 0.4; // Volume em 40%

const playBtn = document.getElementById('play-btn');
const nextBtn = document.getElementById('next-btn');
const trackNameDisplay = document.getElementById('track-name');

// Atualiza o visor no cabeçalho com o nome correto da série
function updateTrackName() {
    if(trackNameDisplay) {
        trackNameDisplay.innerText = playlist[currentTrack].title;
    }
}

// Botão de Play / Pause
playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.innerText = "⏸"; 
    } else {
        audioPlayer.pause();
        playBtn.innerText = "▶"; 
    }
});

// Botão de Avançar (Next)
function nextTrack() {
    currentTrack = (currentTrack + 1) % playlist.length;
    audioPlayer.src = playlist[currentTrack].file;
    updateTrackName();
    
    audioPlayer.play();
    playBtn.innerText = "⏸";
}

nextBtn.addEventListener('click', nextTrack);

// Quando a música acabar, pula para a próxima sozinha
audioPlayer.addEventListener('ended', nextTrack);

// Inicia mostrando o texto da primeira faixa
updateTrackName();