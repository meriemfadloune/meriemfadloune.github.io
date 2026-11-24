'use strict';
// Existing five-project dialog system, extended with verified project content.
const projectDialog = document.querySelector('#project-dialog');
const projects = [
  {name:'Étoile Saphira',category:'LEATHER ACCESSORY / 2025',description:'A leather wristlet that pairs grained burgundy leather with a smooth blue-grey central panel. An embroidered star and visible cross-stitching give a simple silhouette its character.',image:'saphira-front.webp',alt:'Front visualisation of Étoile Saphira, with its blue-grey panel and embroidered star',sections:[['Creative intention','Explore the contrast between colour, texture and a clean, functional silhouette. The star becomes a focal point and a graphic signature.'],['Technical development','The supplied technical dossier documents cutting, embroidery, hand stitching, panel assembly, lining and zip installation, followed by the wrist strap and edge finishing.'],['Materials & details','Grained burgundy leather, smooth blue-grey leather and gold-tone hardware. The technical design specifies an off-white velvet lining and a detachable wrist strap.']],gallery:[['saphira-embroidery.webp','Star embroidery and visible cross-stitching','EMBROIDERY / PROJECT VISUALISATION'],['saphira-sketch.webp','Original pencil sketch from the technical dossier','ORIGINAL DESIGN SKETCH']],board:true,note:'DESIGN BY MERIEM FADLOUNE / IMAGERY: SUPPLIED PROJECT VISUALISATIONS AND ORIGINAL SKETCH'},
  ...[2,3,4,5].map(n=>({name:`Project 0${n}`,category:'RESERVED PROJECT',description:'This chapter is reserved for a forthcoming project presentation.',sections:[['Project context','Title, discipline and context to be supplied.'],['Development','Research, sketches and construction studies to be added.'],['Outcome','Final imagery and project details to follow.']],note:'IMAGE AND PROJECT CONTENT AWAITING CONFIRMATION.'}))
];
// Project chapters are data-driven: append more supplied process images here.
projects[0].chapters=[
  {number:'01',title:'Conception & colour',intro:'From the first pencil studies to colour exploration: defining the silhouette, the central panel and the embroidered star.',images:[
    {src:'saphira-concept-sketch.webp',alt:'Original pencil studies showing the front, side and wrist strap of Étoile Saphira',caption:'INITIAL CONCEPT / FORM, MOTIF & WRIST STRAP',width:446,height:635},
    {src:'saphira-colour-study.webp',alt:'Hand-coloured design study exploring burgundy and blue-grey leather',caption:'COLOUR STUDY / BURGUNDY & BLUE-GREY',width:443,height:631}
  ]},
  {number:'02',title:'Technical development',intro:'Developing the design through proportion studies, construction drawings and individual pattern pieces.',images:[
    {src:'saphira-technical-study.webp',alt:'Dimensioned development drawing of the pouch and wrist strap',caption:'TECHNICAL DRAWING / DEVELOPMENT STUDY',width:549,height:636},
    {src:'saphira-pattern-study.webp',alt:'Pattern studies for the leather panels, attachment pieces and strap',caption:'PATTERN STUDY / PANELS & COMPONENTS',width:498,height:612}
  ]},
  {number:'03',title:'Inside the workshop',intro:'Working at the bench: preparing the leather, developing the star embroidery and joining the contrasting panels with visible cross-stitching.',images:[
    {src:'saphira-workshop.webp',alt:'Four supplied workshop views of Meriem working with burgundy and blue-grey leather at the cutting bench',caption:'AT THE WORKBENCH / LEATHER PREPARATION',width:695,height:696,wide:true},
    {src:'saphira-workbench-panel.webp',alt:'Embroidered blue-grey leather panel joined to burgundy leather, with thread, needle, paper star study and tool on the workbench',caption:'PANEL DEVELOPMENT / EMBROIDERY & HAND STITCHING',width:960,height:1280},
    {src:'saphira-workbench-strap.webp',alt:'Burgundy leather strap strip and a leatherworking tool on the workbench',caption:'COMPONENT PREPARATION / BURGUNDY LEATHER STRAP',width:960,height:1280}
  ]}
];
projects[0].chapters.push({number:'04',title:'Worn in context',intro:'The finished wristlet in use: a view of its scale, contrasting leather panels, embroidered star and wrist strap.',images:[{src:'saphira-worn-photo.webp',alt:'Étoile Saphira held against a white dress, showing the burgundy leather, blue-grey embroidered panel, visible stitching and wrist strap',caption:'ÉTOILE SAPHIRA / FINISHED PIECE IN USE',width:1280,height:696,wide:true}]});
projects[0].gallery=[['saphira-embroidery.webp','Star embroidery and visible cross-stitching','FINISHING DETAIL / PROJECT VISUALISATION'],['saphira-hardware.webp','Gold-tone hardware and wrist strap attachment','HARDWARE DETAIL / PROJECT VISUALISATION']];
projects[0].note='DESIGN BY MERIEM FADLOUNE / CONCEPTION, TECHNICAL STUDIES & WORKSHOP IMAGERY SUPPLIED BY THE DESIGNER. PRODUCT VIEWS INCLUDE PROJECT VISUALISATIONS AND A PHOTOGRAPH OF THE FINISHED PIECE IN USE.';
projects[1]={
  name:'The art of tea dressed in denim',category:'TEXTILE & OBJECT DESIGN / OCTOBER 2026',
  description:'A tea-service design study that brings the ritual of tea into dialogue with the language of denim. Patchwork, woven surfaces, metal fastenings and frayed edges reinterpret familiar serving objects through colour, texture and material reuse.',
  image:'denim-v2-overview.webp',alt:'Supplied project board presenting a denim-covered teapot, woven tray, glass sleeves and conical serving pieces',imageWidth:1800,imageHeight:1274,
  sections:[
    ['Creative intention','Reinterpret the tea ritual through a contemporary textile approach. Indigo shades, visible seams and fringed finishes connect domestic objects with the visual language of jeans.'],
    ['Material exploration','The dossier specifies varied denim offcuts. Patchwork and woven strips explore how smaller textile pieces can form new surfaces, while orange stitching and metal press studs add contrasting details.'],
    ['Design development','The study develops a tea service around a teapot, tray, covered glasses and conical serving pieces. Sketches, annotated component studies and a materials record document the proposal.']
  ],
  chapters:[
    {number:'01',title:'Inspiration & indigo',intro:'Tea-service references meet denim textures, contrasting indigo tones, orange thread and metal details. The moodboard establishes the project’s material and cultural dialogue.',images:[{src:'denim-v2-moodboard.webp',alt:'Original Denim moodboard combining tea-service references, denim shades, metal fastenings and orange thread',caption:'SOURCE MOODBOARD / TEA RITUAL, TEXTURE & INDIGO',width:1800,height:1274,wide:true}]},
    {number:'02',title:'Form & surface exploration',intro:'Sketches explore the relationship between the tea-service forms and their textile coverings, from a woven circular tray to fringed glasses and conical silhouettes.',images:[{src:'denim-v2-sketches.webp',alt:'Original sketch board exploring tray weaving, glasses, teapot and conical serving pieces',caption:'SOURCE SKETCH BOARD / SILHOUETTES & SURFACE STUDIES',width:1800,height:1274,wide:true}]},
    {number:'03',title:'Details & construction studies',intro:'The annotated studies define the teapot’s patchwork, metal buttons and textured denim top detail, alongside the woven tray, glass coverings and orange stitching.',images:[{src:'denim-v2-teapot-study.webp',alt:'Annotated teapot design study showing denim patchwork, metal buttons and textured top detail',caption:'TEAPOT / PATCHWORK, METAL & FRINGE',width:1800,height:1274,wide:true},{src:'denim-v2-tray-glass-study.webp',alt:'Annotated woven tray and denim glass-sleeve studies with orange stitching and fringed finishes',caption:'TRAY & GLASSES / WEAVING, STITCHING & TEXTURE',width:1800,height:1274,wide:true}]},
    {number:'04',title:'Materials record',intro:'The original technical sheet records denim offcuts, metal press studs, orange thread and adhesive. It accompanies the design studies as part of the development dossier.',images:[{src:'denim-v2-materials.webp',alt:'Original materials table listing denim offcuts, metal press studs, orange polyamide thread and adhesive',caption:'SOURCE TECHNICAL SHEET / MATERIALS & COMPONENTS',width:1800,height:1274,wide:true}]}
  ],
  gallery:[['denim-glass.webp','Denim glass covering with layered patchwork and fringed detailing','GLASS COVERING / SOURCE PROJECT VISUAL'],['denim-conical-piece.webp','Conical serving-piece design with contrasting denim strips','CONICAL PIECE / SOURCE PROJECT VISUAL']],
  board:true,boardHref:'denim-project-dossier-v2.pdf',boardLabel:'OPEN DENIM PROJECT DOSSIER (PDF)',
  note:'MERIEM FADLOUNE / AAT / OCTOBER 2026. IMAGERY AND ENGLISH PROJECT BOARDS FROM THE REVISED DENIM DOSSIER.'
};
projects[2]={
  name:'Handcrafted Leather Sleeve',category:'LEATHER ACCESSORY / DESIGN & CRAFT',
  description:'A leather sleeve defined by a flowing, wave-shaped panel and a contrast between lavender and deep burgundy. Visible cross-stitching follows the curved join and the outer edges, connecting the graphic design of the surface with the construction of the object.',
  image:'sleeve-hero.webp',alt:'Lavender and burgundy leather sleeve with a curved panel and contrasting cross-stitching, shown beside a laptop',imageWidth:939,imageHeight:627,
  sections:[
    ['Creative intention','Give a simple rectangular sleeve its character through a single flowing line. The curved panel divides the surface into two contrasting colours, while the light stitching makes the join a visible part of the design.'],
    ['Materials & colour','The conception sketch specifies grained lavender leather and smooth leather. The material palette pairs Lavender-Blue (#B5A9D3) with Deep Burgundy (#5C1A38), explored through leather samples and close-up views.'],
    ['Technical development','The main technical view specifies a 35 × 25 cm format. Separate pattern studies identify leather, lining and Salpa reinforcement components, linking the silhouette to its layered construction.']
  ],
  chapters:[
    {number:'01',title:'Conception & colour',intro:'Front and perspective sketches establish the rectangular proportions and the wave-shaped join. Lavender and deep burgundy become two connected fields of colour, outlined by contrasting stitching.',images:[
      {src:'sleeve-front-sketch.webp',alt:'Original front sketch of the sleeve with its curved panel and dimension annotations',caption:'CONCEPTION / FRONT VIEW & PROPORTIONS',width:504,height:370},
      {src:'sleeve-perspective.webp',alt:'Original perspective sketch showing the sleeve and its curved contrasting panel',caption:'FORM STUDY / CURVED PANEL IN PERSPECTIVE',width:498,height:310}
    ]},
    {number:'02',title:'Materials & assembly',intro:'Leather samples establish the colour pairing. An exploded study separates the leather layers, while a stitch sketch explores the repeated crossing that gives the curved join its rhythm.',images:[
      {src:'sleeve-materials.webp',alt:'Burgundy and lavender leather samples from the supplied project dossier',caption:'MATERIAL PALETTE / DEEP BURGUNDY & LAVENDER',width:838,height:502},
      {src:'sleeve-layer-study.webp',alt:'Exploded sketch with English labels for grained lavender leather and smooth leather',caption:'LAYER STUDY / GRAINED & SMOOTH LEATHER',width:648,height:268},
      {src:'sleeve-stitch-study.webp',alt:'Pencil study of repeated cross-stitching along the leather join',caption:'STITCH STUDY / THE JOIN AS A DESIGN DETAIL',width:384,height:280}
    ]},
    {number:'03',title:'Technical development',intro:'The dimensioned views describe the sleeve at 35 × 25 cm. The component drawings record the curved leather panel, the rectangular body and the extended pattern, with the leather, lining and Salpa quantities kept from the original study.',images:[
      {src:'sleeve-technical-view.webp',alt:'Dimensioned front and edge views of the sleeve, showing a 35 by 25 centimetre format',caption:'TECHNICAL VIEW / 35 × 25 CM FORMAT',width:660,height:508},
      {src:'sleeve-patterns.webp',alt:'Three original component patterns with English leather, lining and Salpa labels and source dimensions',caption:'PATTERN DEVELOPMENT / LEATHER, LINING & REINFORCEMENT',width:604,height:880}
    ]},
    {number:'04',title:'Prototype & finishing details',intro:'The supplied views show the sleeve open and in close-up. Light cross-stitching traces the lavender edge and the burgundy panel, bringing the curved line from the first sketches into the finished surface.',images:[
      {src:'sleeve-open.webp',alt:'Open lavender leather sleeve showing its curved flap and slim profile',caption:'OPEN VIEW / PROFILE & CURVED EDGE',width:459,height:485},
      {src:'sleeve-edge.webp',alt:'Close-up of contrasting cross-stitches joining the lavender and burgundy panels',caption:'PANEL JOIN / CONTRASTING CROSS-STITCHING',width:324,height:435}
    ]}
  ],
  gallery:[['sleeve-stitching.webp','Close-up of light cross-stitching along the lavender and burgundy leather join','FINISHING DETAIL / STITCHING & SURFACE']],
  board:true,boardHref:'leather-sleeve-english-dossier.pdf',boardLabel:'OPEN LEATHER SLEEVE DOSSIER (PDF)',
  note:'DESIGN BY MERIEM FADLOUNE / SKETCHES, MATERIAL SAMPLES, TECHNICAL STUDIES & PRODUCT VIEWS FROM THE SUPPLIED DOSSIER. ANNOTATIONS TRANSLATED INTO ENGLISH.'
};
projects[3] = {
  "name": "Brutalist Desk Collection",
  "category": "LEATHER GOODS & OBJECT DESIGN / 2025–2026",
  "credit": "Collaborative project — Meriem Fadloune & Nouhaila Elkessami",
  "description": "A collection of five desk accessories inspired by Brutalist architecture: a desk mat, pen and business-card holder, document stand, table lamp and candle. Geometric forms meet textured leather, concrete and wood, bringing an architectural presence to everyday objects.",
  "image": "brutalist-hero.webp",
  "alt": "Collection view showing the leather desk mat, pen holder, document stand, lamp and candle together on a wooden desk",
  "imageWidth": 920,
  "imageHeight": 691,
  "sections": [
    [
      "Creative intention",
      "Translate the strength of Brutalist structures into functional desk accessories, balancing solid volumes with the organic folds and warmth of leather."
    ],
    [
      "Materials & colour",
      "Hand-dyed, vegetable-tanned sheepskin is combined with concrete and wood. Earthy browns and mineral greys create a coherent palette, while leather folds and wood pyrography introduce depth and texture."
    ],
    [
      "Technical development",
      "Sketches, physical models, Illustrator drawings and 3D studies support the development of each object. Technical sheets, cutting patterns and assembly sequences connect the design process to workshop production."
    ]
  ],
  "chapters": [
    {
      "number": "01",
      "title": "Inspiration & form",
      "intro": "Architectural references, tree roots and material moodboards guide the collection’s geometric shapes and sculptural surfaces.",
      "images": [
        {
          "src": "brutalist-forms.webp",
          "alt": "Moodboard of Brutalist architecture, geometric volumes and tree-root textures",
          "caption": "FORM RESEARCH / ARCHITECTURE & ORGANIC LINES",
          "width": 1360,
          "height": 1600
        },
        {
          "src": "brutalist-colours.webp",
          "alt": "Colour and material moodboard combining brown leather, grey concrete and earthy surfaces",
          "caption": "COLOUR RESEARCH / EARTHY BROWNS & MINERAL GREYS",
          "width": 1290,
          "height": 1600
        }
      ]
    },
    {
      "number": "02",
      "title": "Material exploration",
      "intro": "Experiments with leather dyeing, layered folds, concrete casting and wood pyrography establish a shared material language.",
      "images": [
        {
          "src": "brutalist-dyeing.webp",
          "alt": "Four workshop views documenting hand dyeing of vegetable-tanned sheepskin",
          "caption": "IN THE WORKSHOP / HAND-DYED SHEEPSKIN",
          "width": 1160,
          "height": 1445
        },
        {
          "src": "brutalist-pleating.webp",
          "alt": "Hands shaping folds in brown leather at the workbench",
          "caption": "LEATHER EXPERIMENTATION / HAND-FORMED FOLDS",
          "width": 346,
          "height": 460
        },
        {
          "src": "brutalist-pyrography.webp",
          "alt": "Workshop view of wood pyrography beside a panel of folded brown leather",
          "caption": "SURFACE EXPLORATION / PYROGRAPHY & LEATHER",
          "width": 718,
          "height": 590
        }
      ]
    },
    {
      "number": "03",
      "title": "Design & construction",
      "intro": "Proportions, component drawings and assembly studies develop the five pieces as a coordinated collection.",
      "images": [
        {
          "src": "brutalist-models.webp",
          "alt": "Two views of a physical card model for the pen holder",
          "caption": "PHYSICAL MODELS / VOLUME & CONSTRUCTION STUDY",
          "width": 1028,
          "height": 625,
          "wide": true
        },
        {
          "src": "brutalist-technical-desk.webp",
          "alt": "Dimensioned drawing of the desk mat showing a 600 by 400 millimetre format",
          "caption": "TECHNICAL DEVELOPMENT / DESK MAT",
          "width": 1113,
          "height": 988
        },
        {
          "src": "brutalist-technical-stand.webp",
          "alt": "Dimensioned front, side and plan views of the layered document stand",
          "caption": "TECHNICAL DEVELOPMENT / DOCUMENT STAND",
          "width": 1176,
          "height": 1200
        }
      ]
    },
    {
      "number": "04",
      "title": "Final collection",
      "intro": "The accessories combine practical desk functions with tactile surfaces, visible craftsmanship and a consistent architectural identity.",
      "images": [
        {
          "src": "brutalist-desk-mat.webp",
          "alt": "Brown leather desk mat with sculptural folds along its edges",
          "caption": "DESK MAT / TEXTURED LEATHER SURFACE",
          "width": 819,
          "height": 500
        },
        {
          "src": "brutalist-pen-holder.webp",
          "alt": "Leather pen and card holder set in a textured concrete base",
          "caption": "PEN & CARD HOLDER / LEATHER MEETS CONCRETE",
          "width": 806,
          "height": 605
        },
        {
          "src": "brutalist-stand.webp",
          "alt": "Document stand combining layered brown leather and pyrographed wood",
          "caption": "DOCUMENT STAND / LAYERS & PYROGRAPHY",
          "width": 1160,
          "height": 871
        },
        {
          "src": "brutalist-lamp.webp",
          "alt": "Table lamp with an exposed bulb and concrete body wrapped in folded leather",
          "caption": "TABLE LAMP / MINERAL & ORGANIC TEXTURES",
          "width": 951,
          "height": 713
        },
        {
          "src": "brutalist-candle.webp",
          "alt": "Candle surrounded by sculptural brown leather folds",
          "caption": "CANDLE / SCULPTURAL LEATHER FOLDS",
          "width": 476,
          "height": 633
        }
      ]
    }
  ],
  "gallery": [
    [
      "brutalist-collection-scene.webp",
      "Supplied visualisation of the coordinated desk collection in a workspace",
      "COLLECTION VISUALISATION / A SHARED MATERIAL LANGUAGE"
    ]
  ],
  "board": true,
  "boardHref": "brutalist-desk-collection-summary.pdf",
  "boardLabel": "OPEN PROJECT SUMMARY (PDF)",
  "note": "MERIEM FADLOUNE & NOUHAILA ELKESSAMI / AAT / 2025–2026. WORKSHOP PHOTOGRAPHS, TECHNICAL DRAWINGS, REFERENCE MOODBOARDS & PRODUCT VISUALISATIONS FROM THE SUPPLIED DESIGN REPORT."
};
projects[4] = {
  "name": "Éclipse",
  "category": "LEATHER GOODS DESIGN / JUNE 2026",
  "description": "A modular leather tote concept inspired by the geometry of Moroccan zellige. An openwork outer bag reveals a separate inner tote, exploring colour, transparency and the relationship between decorative structure and everyday function.",
  "image": "eclipse-hero.webp",
  "alt": "Éclipse concept visualisation showing a multicoloured geometric outer tote beside its separate brown leather inner bag",
  "imageWidth": 470,
  "imageHeight": 372,
  "sections": [
    [
      "Creative intention",
      "Translate the visual language of zellige into an assembly of coloured leather pieces. The project connects Moroccan craft heritage with a contemporary tote silhouette."
    ],
    [
      "Modularity & use",
      "The inner and outer bags are designed to be carried together or independently. The layered construction offers changing combinations of colour and transparency. The updated technical drawing records a 32 × 25 × 12 cm body."
    ],
    [
      "Materials & development",
      "The original dossier specifies brown cowhide, burgundy faux-suede lining, Salpa reinforcement and metal hardware. Updated Illustrator drawings define the bag views, handle strips and geometric leather modules."
    ]
  ],
  "chapters": [
    {
      "number": "01",
      "title": "Inspiration & colour",
      "intro": "Zellige patterns, interlocking shapes and architectural light guide the research. Colour studies explore earthy leather shades alongside brighter contrasts.",
      "images": [
        {
          "src": "eclipse-inspiration.webp",
          "alt": "Reference moodboard combining Moroccan geometric patterns, openwork leather, puzzle pieces and architectural screens",
          "caption": "SOURCE MOODBOARD / GEOMETRY, OPENWORK & LIGHT",
          "width": 1706,
          "height": 978
        },
        {
          "src": "eclipse-colour.webp",
          "alt": "Colour research combining leather browns, forest greens, burgundy and pastel fabrics",
          "caption": "COLOUR RESEARCH / MATERIAL & CONTRAST",
          "width": 1606,
          "height": 1012
        },
        {
          "src": "eclipse-form.webp",
          "alt": "Reference studies of leather assemblies, geometric cut-outs, layering and zellige",
          "caption": "FORM RESEARCH / DUALITY, LAYERING & TRANSPARENCY",
          "width": 1122,
          "height": 822,
          "wide": true
        }
      ]
    },
    {
      "number": "02",
      "title": "Sketches & pattern exploration",
      "intro": "Pencil studies develop the tote silhouette and geometric modules. Early workbench experiments test individual shapes before their assembly into a larger surface.",
      "images": [
        {
          "src": "eclipse-sketches.webp",
          "alt": "Original sketches exploring geometric leather modules, tote bags, handles and smaller accessories",
          "caption": "ORIGINAL SKETCHES / SILHOUETTE & SURFACE",
          "width": 1800,
          "height": 899,
          "wide": true
        },
        {
          "src": "eclipse-pattern-workbench.webp",
          "alt": "Workbench photograph showing geometric paper and leather pieces with drawing and cutting tools",
          "caption": "PATTERN EXPERIMENT / FROM DRAWING TO LEATHER",
          "width": 612,
          "height": 772
        }
      ]
    },
    {
      "number": "03",
      "title": "Modularity & use",
      "intro": "Wearing studies explain how the inner and outer bags can each function independently. The updated proportions are documented in the Illustrator drawings below.",
      "images": [
        {
          "src": "eclipse-modularity.webp",
          "alt": "Original wearing studies with translated English labels showing the inner bag and outer bag carried separately",
          "caption": "USE STUDY / TWO BAGS, TOGETHER OR APART",
          "width": 560,
          "height": 914
        }
      ]
    },
    {
      "number": "04",
      "title": "Illustrator technical drawings",
      "intro": "Front, side and base views define a 320 × 250 × 120 mm body. A separate component drawing specifies two 360 mm leather strips and 160 geometric modules measuring 4 × 4 cm.",
      "images": [
        {
          "src": "eclipse-illustrator-views.png",
          "alt": "Illustrator technical drawing of Éclipse showing dimensioned front, side and base views with handles and geometric leather pattern",
          "caption": "ILLUSTRATOR / FRONT, SIDE & BASE VIEWS",
          "width": 380,
          "height": 479
        },
        {
          "src": "eclipse-illustrator-components.png",
          "alt": "Illustrator component drawing showing two 360 millimetre leather strips and 160 leather modules measuring 4 by 4 centimetres",
          "caption": "ILLUSTRATOR / HANDLE STRIPS & GEOMETRIC MODULES",
          "width": 334,
          "height": 281
        }
      ]
    }
  ],
  "board": true,
  "boardHref": "eclipse-english-presentation-revised.pdf",
  "boardLabel": "OPEN ÉCLIPSE PRESENTATION (PDF)",
  "note": "DESIGN BY MERIEM FADLOUNE / AAT / JUNE 2026. ORIGINAL MOODBOARDS, SKETCHES, PATTERN EXPERIMENTS & CONCEPT VISUALISATION FROM THE SUPPLIED PRESENTATION. UPDATED ILLUSTRATOR TECHNICAL DRAWINGS SUPPLIED BY THE DESIGNER."
};
let activeProject = 0;
function element(tag, text, className) { const node=document.createElement(tag); if(text)node.textContent=text; if(className)node.className=className; return node; }
function renderProject(index) {
  activeProject=(index+projects.length)%projects.length;
  const p=projects[activeProject];
  projectDialog.dataset.project=String(activeProject);
  document.querySelector('#dialog-title').textContent=p.name;
  document.querySelector('#dialog-count').textContent=`0${activeProject+1} / 05 — ${p.category}`;
  document.querySelector('.dialog-description').textContent=p.description;
  const credit=document.querySelector('#dialog-credit');credit.textContent=p.credit||'';credit.hidden=!p.credit;
  const image=document.querySelector('#dialog-image'); image.replaceChildren();
  if(p.image){const img=element('img');img.src=p.image;img.alt=p.alt;img.width=p.imageWidth||866;img.height=p.imageHeight||513;image.append(img);}
  else image.append(element('span','PROJECT IMAGE TO FOLLOW','mono'));
  const details=document.querySelector('#dialog-details');details.replaceChildren();
  for(const [title,copy] of p.sections){const group=element('div');group.append(element('h3',title),element('p',copy));details.append(group);}
  const story=document.querySelector('#dialog-story');story.replaceChildren();story.hidden=!p.chapters;
  for(const chapter of p.chapters||[]){
    const section=element('section',null,'project-chapter');
    const header=element('div',null,'chapter-heading');
    const heading=element('h3',chapter.title);heading.id=`project-${activeProject}-chapter-${chapter.number}`;section.setAttribute('aria-labelledby',heading.id);
    header.append(element('span',`PROCESS / ${chapter.number}`,'eyebrow'),heading,element('p',chapter.intro));
    const images=element('div',null,'chapter-images');
    for(const photo of chapter.images){const figure=element('figure',null,photo.wide?'chapter-image chapter-image-wide':'chapter-image');const img=element('img');img.src=photo.src;img.alt=photo.alt;img.width=photo.width;img.height=photo.height;img.loading='lazy';img.decoding='async';figure.append(img,element('figcaption',photo.caption));images.append(figure);}
    section.append(header,images);story.append(section);
  }
  const gallery=document.querySelector('#dialog-gallery');gallery.replaceChildren();gallery.hidden=!p.gallery;
  for(const [src,alt,caption] of p.gallery||[]){const figure=element('figure');const img=element('img');img.src=src;img.alt=alt;img.loading='lazy';figure.append(img,element('figcaption',caption));gallery.append(figure);}
  const board=document.querySelector('#project-board');board.hidden=!p.board;
  board.href=p.boardHref||'etoile-saphira-project-board.pdf';
  board.replaceChildren(element('span',p.boardLabel||'OPEN PROJECT BOARD (PDF)'),element('span','↗'));
  document.querySelector('#dialog-note').textContent=p.note;
  projectDialog.scrollTop=0;
}
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{renderProject(Number(button.dataset.project));if(!projectDialog.open)projectDialog.showModal();}));
document.querySelector('#next').addEventListener('click',()=>renderProject(activeProject+1));
document.querySelector('#previous').addEventListener('click',()=>renderProject(activeProject-1));
projectDialog.querySelector('.close').addEventListener('click',()=>projectDialog.close());
projectDialog.addEventListener('click',event=>{if(event.target!==projectDialog)return;const r=projectDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)projectDialog.close();});
const menu=document.querySelector('#menu');const navigation=document.querySelector('#main-navigation');
function closeMenu(){menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');navigation.classList.remove('open');menu.innerHTML='Menu <span aria-hidden="true">+</span>';}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';if(open){closeMenu();return;}menu.setAttribute('aria-expanded','true');menu.setAttribute('aria-label','Close navigation');navigation.classList.add('open');menu.innerHTML='Close <span aria-hidden="true">−</span>';});
navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&navigation.classList.contains('open')){closeMenu();menu.focus();}});
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
if(!reducedMotion.matches) document.documentElement.classList.add('motion-ready');
// Progressive enhancement: content stays visible when observers or animation are unavailable.
if('IntersectionObserver' in window){
  const activeObserver=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){navigation.querySelectorAll('a').forEach(link=>{const active=link.hash===`#${entry.target.id}`;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}}},{rootMargin:'-15% 0px -55% 0px',threshold:0});
  document.querySelectorAll('main section[id]').forEach(section=>activeObserver.observe(section));
  if(!reducedMotion.matches){const reveals=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');reveals.unobserve(entry.target);}});},{threshold:.08});document.querySelectorAll('.section-heading,.featured-project,.craft-copy,.about-heading').forEach(node=>{node.classList.add('reveal-ready');reveals.observe(node);});}
}
// A single rAF-scheduled transform for gentle hero movement; no layout writes on scroll.
const heroImage=document.querySelector('#hero-image');let framePending=false;
let heroShiftLimit=Math.min((heroImage.clientHeight||300)*.018,10);
window.addEventListener('resize',()=>{heroShiftLimit=Math.min((heroImage.clientHeight||300)*.018,10);},{passive:true});
function updateHero(){framePending=false;if(reducedMotion.matches){heroImage.style.transform='';return;}const y=Math.min(window.scrollY,900);heroImage.style.transform=`translateY(${Math.min(y*.018,heroShiftLimit)}px) scale(1.045)`;}
window.addEventListener('scroll',()=>{if(!framePending&&!reducedMotion.matches&&window.scrollY<1000){framePending=true;window.requestAnimationFrame(updateHero);}},{passive:true});
reducedMotion.addEventListener('change',()=>{document.documentElement.classList.toggle('motion-ready',!reducedMotion.matches);if(reducedMotion.matches){heroImage.style.transform='';document.querySelectorAll('.reveal-ready').forEach(node=>node.classList.add('visible'));}});
