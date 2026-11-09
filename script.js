/* Datos de los libros */

const N='Novela',F='Fantasía y ciencia ficción',H='Historia y ensayo',I='Infantil y juvenil',P='Poesía y teatro',D='Desarrollo personal';
const ROWS=[
['9789580000011','Cien años de soledad','Gabriel García Márquez',N,'Realismo mágico','Sudamericana',1967,62000,1,4.9,'La saga de los Buendía en el pueblo de Macondo.','B',0],
['9789580000028','El amor en los tiempos del cólera','Gabriel García Márquez',N,'Romance','Debolsillo',1985,54000,1,4.7,'Un amor que espera más de cincuenta años.','',10],
['9789580000035','Crónica de una muerte anunciada','Gabriel García Márquez',N,'Drama','Debolsillo',1981,38000,1,4.6,'Todos sabían del crimen, nadie lo evitó.','B',0],
['9789580000042','La vorágine','José Eustasio Rivera',N,'Clásico','Planeta',1924,36000,1,4.2,'Un viaje trágico por la selva colombiana.','',0],
['9789580000059','Pedro Páramo','Juan Rulfo',N,'Realismo mágico','Anagrama',1955,34000,1,4.6,'Un hijo llega a Comala, pueblo de muertos.','',15],
['9789580000066','Rayuela','Julio Cortázar',N,'Experimental','Alfaguara',1963,69000,0,4.5,'Una novela que se puede leer en dos órdenes.','',0],
['9789580000073','La ciudad y los perros','Mario Vargas Llosa',N,'Drama','Alfaguara',1963,52000,1,4.4,'Cadetes y violencia en un colegio militar.','',0],
['9789580000080','El coronel no tiene quien le escriba','Gabriel García Márquez',N,'Clásico','Debolsillo',1961,29000,1,4.5,'Un veterano espera una carta que no llega.','',0],
['9789580000097','Los detectives salvajes','Roberto Bolaño',N,'Contemporánea','Anagrama',1998,89000,1,4.6,'Poetas en busca de una escritora desaparecida.','N',0],
['9789580000103','Ficciones','Jorge Luis Borges',N,'Cuentos','Debolsillo',1944,41000,1,4.8,'Laberintos, espejos y bibliotecas infinitas.','',0],
['9789580000110','Dune','Frank Herbert',F,'Ciencia ficción','Debolsillo',1965,79000,0,4.7,'Guerra por la especia en el planeta Arrakis.','B',0],
['9789580000127','Fundación','Isaac Asimov',F,'Ciencia ficción','Debolsillo',1951,58000,1,4.5,'La caída de un imperio galáctico.','',0],
['9789580000134','El hobbit','J. R. R. Tolkien',F,'Fantasía','Minotauro',1937,49000,1,4.8,'Bilbo viaja con enanos a recuperar un tesoro.','B',20],
['9789580000141','1984','George Orwell',F,'Distopía','Debolsillo',1949,39000,1,4.7,'El Gran Hermano lo vigila todo.','',0],
['9789580000158','Fahrenheit 451','Ray Bradbury',F,'Distopía','Debolsillo',1953,37000,1,4.4,'Bomberos que queman libros.','N',0],
['9789580000165','Sapiens','Yuval Noah Harari',H,'Historia','Debate',2011,72000,1,4.6,'De animales a dueños del planeta.','NB',0],
['9789580000172','Breve historia del tiempo','Stephen Hawking',H,'Ciencia','Crítica',1988,55000,1,4.5,'El universo explicado sin fórmulas.','',10],
['9789580000189','Las venas abiertas de América Latina','Eduardo Galeano',H,'Ensayo','Siglo XXI',1971,48000,1,4.5,'Cinco siglos de saqueo del continente.','',0],
['9789580000196','Pensar rápido, pensar despacio','Daniel Kahneman',H,'Psicología','Debate',2011,76000,1,4.4,'Cómo decidimos y por qué nos equivocamos.','',0],
['9789580000202','El olvido que seremos','Héctor Abad Faciolince',H,'Memorias','Planeta',2006,46000,1,4.8,'Un hijo recuerda a su padre médico.','N',0],
['9789580000219','Los cuatro acuerdos','Miguel Ruiz',D,'Espiritualidad','Urano',1997,32000,1,4.3,'Cuatro principios para vivir con libertad.','',0],
['9789580000226','Hábitos atómicos','James Clear',D,'Productividad','Diana',2018,68000,1,4.8,'Cambios pequeños que dan grandes resultados.','NB',0],
['9789580000233','El poder del ahora','Eckhart Tolle',D,'Espiritualidad','Gaia',1997,44000,1,4.2,'Una guía para vivir el presente.','',25],
['9789580000240','El principito','Antoine de Saint-Exupéry',I,'Fábula','Salamandra',1943,35000,1,4.9,'Un niño de otro planeta visita la Tierra.','B',0],
['9789580000257','Harry Potter y la piedra filosofal','J. K. Rowling',I,'Fantasía juvenil','Salamandra',1997,65000,1,4.8,'Un niño descubre que es mago.','B',0],
['9789580000264','Matilda','Roald Dahl',I,'Aventura','Alfaguara Infantil',1988,42000,1,4.6,'Una niña con poderes contra una directora cruel.','N',0],
['9789580000271','Veinte poemas de amor y una canción desesperada','Pablo Neruda',P,'Poesía','Debolsillo',1924,28000,1,4.7,'Poemas de amor y pérdida.','',0],
['9789580000288','Rimas y leyendas','Gustavo Adolfo Bécquer',P,'Poesía','Cátedra',1871,33000,1,4.3,'Poesía romántica y relatos fantásticos.','',0],
['9789580000295','La casa de Bernarda Alba','Federico García Lorca',P,'Teatro','Cátedra',1945,27000,0,4.4,'Cinco hijas encerradas por una madre tirana.','',0],
['9789580000301','Delirio','Laura Restrepo',N,'Contemporánea','Alfaguara',2004,51000,1,4.5,'Una mujer pierde la razón y su esposo busca por qué.','N',0]
];
const BOOKS=ROWS.map(r=>({isbn:r[0],title:r[1],author:r[2],category:r[3],genre:r[4],publisher:r[5],year:r[6],price:r[7],inStock:!!r[8],rating:r[9],synopsis:r[10],isNew:r[11].includes('N'),isBest:r[11].includes('B'),discount:r[12]||0,img:r[13]||''}));
const CATS=[N,F,H,I,P,D];


const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const norm=s=>String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase(); // sin tildes ni mayúsculas
const cop=n=>new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0}).format(n);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const byId=id=>BOOKS.find(b=>b.isbn===id);
const price=b=>b.discount?Math.round(b.price*(1-b.discount/100)/100)*100:b.price;
const stars=n=>'★'.repeat(Math.round(n))+'☆'.repeat(5-Math.round(n));
const go=s=>$(s).scrollIntoView({behavior:'smooth'});
let tt;const toast=m=>{const t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('on'),2200)};

/* Usuarios y publicaciones desde JSONPlaceholder */
const usersStatus=$('#usersStatus'),usersError=$('#usersError'),usersList=$('#usersList');
const postsStatus=$('#postsStatus'),postsError=$('#postsError'),postsList=$('#postsList');
const retryPosts=$('#retryPosts'),retryUsers=$('#retryUsers'),selectedUser=$('#selectedUser');
let usersData=[],activeUserId=null,postsRequest=0;

function renderUsers(){
 usersList.innerHTML=usersData.map(u=>`<article class="user-card" ${u.id===activeUserId?'data-selected="true"':''}>
  <h3>${esc(u.name)}</h3><p><b>Correo:</b> <a href="mailto:${esc(u.email)}">${esc(u.email)}</a></p>
  <p><b>Empresa:</b> ${esc(u.company.name)}</p>
  <button class="btn${u.id===activeUserId?'':' ghost'}" type="button" data-user-id="${u.id}" aria-pressed="${u.id===activeUserId}">Ver publicaciones</button>
 </article>`).join('');
}

async function loadPosts(userId){
 const user=usersData.find(u=>u.id===userId);
 if(!user)return;
 activeUserId=userId;
 const request=++postsRequest;
 renderUsers();
 selectedUser.textContent=`Publicaciones de ${user.name}`;
 postsStatus.textContent='Cargando publicaciones…';
 postsError.hidden=true;
 retryPosts.hidden=true;
 postsList.innerHTML='';
 postsList.setAttribute('aria-busy','true');
 try{
  const response=await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${encodeURIComponent(userId)}`);
  if(!response.ok)throw new Error(`Error del servidor (${response.status}).`);
  const posts=await response.json();
  if(request!==postsRequest)return;
  postsStatus.textContent=posts.length?`${posts.length} publicaciones encontradas.`:'Este usuario no tiene publicaciones.';
  postsList.innerHTML=posts.map(post=>`<article class="post-card"><h4>${esc(post.title)}</h4><p>${esc(post.body)}</p></article>`).join('');
 }catch(error){
  if(request!==postsRequest)return;
  postsStatus.textContent='No se pudieron cargar las publicaciones.';
  postsError.textContent=`Revisa tu conexión e inténtalo de nuevo. ${error.message}`;
  postsError.hidden=false;
  retryPosts.hidden=false;
 }finally{
  if(request===postsRequest)postsList.setAttribute('aria-busy','false');
 }
}

async function loadUsers(){
 usersStatus.textContent='Cargando usuarios…';
 usersError.hidden=true;
 usersList.setAttribute('aria-busy','true');
 try{
  const response=await fetch('https://jsonplaceholder.typicode.com/users');
  if(!response.ok)throw new Error(`Error del servidor (${response.status}).`);
  usersData=await response.json();
  if(!Array.isArray(usersData))throw new Error('La respuesta recibida no tiene el formato esperado.');
  renderUsers();
  usersStatus.textContent=`${usersData.length} usuarios encontrados.`;
    retryUsers.hidden=true;
  usersList.setAttribute('aria-busy','false');
  if(usersData.length)loadPosts(usersData[0].id);
 }catch(error){
  usersStatus.textContent='No se pudieron cargar los usuarios.';
  usersError.textContent=`Revisa tu conexión e inténtalo de nuevo. ${error.message}`;
  usersError.hidden=false;
    retryUsers.hidden=false;
  usersList.setAttribute('aria-busy','false');
 }
}


const D0={q:'',cat:'',genre:'',author:'',pub:'',year:'',pmin:'',pmax:'',avail:'',rating:'',letter:'',tab:'all',sort:'rel',fav:false};
const S={...D0,page:1,view:'grid'};
const cart=new Map(),favs=new Set();
const PAGE=12;


const cover=b=>`<div class="cover c${CATS.indexOf(b.category)}">${b.img?`<img src="${esc(b.img)}" alt="Portada de ${esc(b.title)}">`:`<span>${esc(b.title)}</span><small>${esc(b.author)}</small>`}</div>`;
function card(b){
 const p=price(b);
 return `<article class="card">
 ${b.inStock?(b.discount?`<span class="badge">-${b.discount}%</span>`:b.isNew?'<span class="badge">Nuevo</span>':''):'<span class="badge out">Agotado</span>'}
 <button class="cvbtn" data-act="view" data-id="${b.isbn}" aria-label="Ver detalle de ${esc(b.title)}">${cover(b)}</button>
 <div class="info"><h3>${esc(b.title)}</h3><p class="au">${esc(b.author)}</p>
 <p class="stars" aria-label="Calificación ${b.rating} de 5">${stars(b.rating)} <small>${b.rating}</small></p>
 <p class="price">${cop(p)}${b.discount?`<s>${cop(b.price)}</s>`:''}</p>
 <p class="syn">${esc(b.synopsis)}</p>
 <div class="acts"><button class="btn" data-act="add" data-id="${b.isbn}" ${b.inStock?'':'disabled'}>${b.inStock?'Agregar':'Agotado'}</button>
 <button class="btn ghost" data-act="fav" data-id="${b.isbn}" aria-pressed="${favs.has(b.isbn)}" aria-label="${favs.has(b.isbn)?'Quitar de':'Agregar a'} favoritos: ${esc(b.title)}">${favs.has(b.isbn)?'♥':'♡'}</button>
 <button class="btn ghost" data-act="view" data-id="${b.isbn}">Detalle</button></div></div></article>`;
}


function filtered(){
 const q=norm(S.q.trim()),qd=q.replace(/[-\s]/g,'');
 let r=BOOKS.filter(b=>{
  if(q){const hay=norm([b.title,b.author,b.isbn,b.category,b.genre,b.publisher].join(' '));
   if(!hay.includes(q)&&!(qd.length>3&&b.isbn.includes(qd)))return false}
  if(S.letter&&norm(b.title.replace(/^[^A-Za-zÀ-ÿ]+/,''))[0]!==S.letter.toLowerCase())return false;
  if(S.cat&&b.category!==S.cat)return false;
  if(S.genre&&b.genre!==S.genre)return false;
  if(S.author&&b.author!==S.author)return false;
  if(S.pub&&b.publisher!==S.pub)return false;
  if(S.year&&b.year!==+S.year)return false;
  const p=price(b);
  if(S.pmin!==''&&p<+S.pmin)return false;
  if(S.pmax!==''&&p>+S.pmax)return false;
  if(S.avail==='in'&&!b.inStock)return false;
  if(S.avail==='out'&&b.inStock)return false;
  if(S.rating&&b.rating<+S.rating)return false;
  if(S.tab==='new'&&!b.isNew)return false;
  if(S.tab==='best'&&!b.isBest)return false;
  if(S.tab==='offer'&&!b.discount)return false;
  if(S.fav&&!favs.has(b.isbn))return false;
  return true});
 const cmp={pa:(a,b)=>price(a)-price(b),pd:(a,b)=>price(b)-price(a),t:(a,b)=>a.title.localeCompare(b.title,'es'),ya:(a,b)=>a.year-b.year,yd:(a,b)=>b.year-a.year,r:(a,b)=>b.rating-a.rating}[S.sort];
 return cmp?r.sort(cmp):r;
}


const TABN={new:'Novedades',best:'Más vendidos',offer:'Ofertas'};
function chipList(){
 const c=[];
 if(S.q)c.push(['q','Búsqueda: '+S.q]);
 if(S.letter)c.push(['letter','Letra '+S.letter]);
 if(S.cat)c.push(['cat','Categoría: '+S.cat]);
 if(S.genre)c.push(['genre','Género: '+S.genre]);
 if(S.author)c.push(['author','Autor: '+S.author]);
 if(S.pub)c.push(['pub','Editorial: '+S.pub]);
 if(S.year)c.push(['year','Año: '+S.year]);
 if(S.pmin!=='')c.push(['pmin','Desde '+cop(S.pmin)]);
 if(S.pmax!=='')c.push(['pmax','Hasta '+cop(S.pmax)]);
 if(S.avail)c.push(['avail',S.avail==='in'?'Disponibles':'Agotados']);
 if(S.rating)c.push(['rating',S.rating+'+ ★']);
 if(S.tab!=='all')c.push(['tab','Lista: '+TABN[S.tab]]);
 if(S.fav)c.push(['fav','Solo favoritos']);
 return c;
}
function render(){
 const r=filtered(),shown=r.slice(0,S.page*PAGE);
 $('#count').textContent=`${r.length} ${r.length===1?'libro encontrado':'libros encontrados'}`;
 $('#grid').className='grid '+S.view;
 $('#grid').innerHTML=shown.map(card).join('');
 $('#empty').hidden=r.length>0;
 $('#more').hidden=shown.length>=r.length;
 $('#more').textContent=`Cargar más (${r.length-shown.length} restantes)`;
 const ch=chipList();
 $('#chips').innerHTML=ch.map(([k,l])=>`<button class="chip" data-clr="${k}" aria-label="Quitar filtro ${esc(l)}">${esc(l)} ✕</button>`).join('')+(ch.length?'<button class="chip" data-act="reset">Limpiar todo</button>':'');
 $$('[data-f]').forEach(e=>{if(e.value!==String(S[e.dataset.f]))e.value=S[e.dataset.f]});
 $$('#tabs button').forEach(b=>b.setAttribute('aria-selected',b.dataset.tab===S.tab));
 $$('#az button').forEach(b=>b.setAttribute('aria-pressed',(b.dataset.l||'')===S.letter));
 $$('[data-act=grid]').forEach(b=>b.setAttribute('aria-pressed',S.view==='grid'));
 $$('[data-act=list]').forEach(b=>b.setAttribute('aria-pressed',S.view==='list'));
 $('#favBtn').setAttribute('aria-pressed',S.fav);
 $('#favN').textContent=favs.size;
 $('#car').innerHTML=BOOKS.filter(b=>b.isNew).map(card).join('');
}


function fav(id){favs.has(id)?favs.delete(id):favs.add(id);toast(favs.has(id)?'Agregado a favoritos':'Quitado de favoritos');render();if(cur===id)detail(id,1)}
function add(id){const b=byId(id);if(!b.inStock)return toast('Este libro está agotado');cart.set(id,Math.min((cart.get(id)||0)+1,20));cartUI();toast(`«${b.title}» agregado al carrito`)}
function chg(id,d){const q=(cart.get(id)||0)+d;q<=0?cart.delete(id):cart.set(id,Math.min(q,20));cartUI()}
function totals(){let sub=0,n=0;cart.forEach((q,id)=>{sub+=price(byId(id))*q;n+=q});const ship=sub===0||sub>=150000?0:12000;return{sub,n,ship,total:sub+ship}}
function cartUI(){
 const t=totals();$('#cartN').textContent=t.n;
 $('#cartItems').innerHTML=cart.size?[...cart].map(([id,q])=>{const b=byId(id);return `<div class="li"><div><b>${esc(b.title)}</b><br><small>${esc(b.author)} · ${cop(price(b))}</small></div>
 <b>${cop(price(b)*q)}</b><div class="q"><button data-act="dec" data-id="${id}" aria-label="Disminuir cantidad">−</button><span aria-label="Cantidad">${q}</span><button data-act="inc" data-id="${id}" aria-label="Aumentar cantidad">+</button></div>
 <button class="btn ghost" data-act="del" data-id="${id}" aria-label="Eliminar ${esc(b.title)}">Eliminar</button></div>`}).join(''):'<p>Tu carrito está vacío. Agrega un libro desde el catálogo.</p>';
 $('#tot').innerHTML=`<p><span>Subtotal</span><span>${cop(t.sub)}</span></p><p><span>Envío ${t.sub>=150000?'(gratis desde $150.000)':''}</span><span>${cop(t.ship)}</span></p><p class="g"><span>Total</span><span>${cop(t.total)}</span></p>`;
 $('#coBtn').disabled=!cart.size;
}


let cur=null;
function detail(id,keep){
 const b=byId(id);cur=id;
 $('#det').innerHTML=`<div class="det">${cover(b)}<div><h2>${esc(b.title)}</h2><p class="stars" aria-label="Calificación ${b.rating} de 5">${stars(b.rating)} ${b.rating}</p>
 <dl><dt>Autor</dt><dd>${esc(b.author)}</dd><dt>ISBN</dt><dd>${b.isbn}</dd><dt>Categoría</dt><dd>${esc(b.category)}</dd><dt>Género</dt><dd>${esc(b.genre)}</dd><dt>Editorial</dt><dd>${esc(b.publisher)}</dd><dt>Año</dt><dd>${b.year}</dd><dt>Estado</dt><dd>${b.inStock?'Disponible':'Agotado'}</dd></dl>
 <p>${esc(b.synopsis)}</p><p class="price" style="font-size:1.3rem">${cop(price(b))}${b.discount?`<s>${cop(b.price)}</s>`:''}</p>
 <div class="acts"><button class="btn" data-act="add" data-id="${id}" ${b.inStock?'':'disabled'}>${b.inStock?'Agregar al carrito':'Agotado'}</button>
 <button class="btn ghost" data-act="fav" data-id="${id}" aria-pressed="${favs.has(id)}">${favs.has(id)?'♥ En favoritos':'♡ Favorito'}</button></div></div></div>`;
 if(!keep)$('#detD').showModal();
}


const R={
 req:v=>v.trim()?'':'Este campo es obligatorio.',
 email:v=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)?'':'Escribe un correo válido, por ejemplo nombre@correo.com.',
 phone:v=>/^[\d\s+()-]{7,15}$/.test(v)?'':'Escribe un teléfono válido (7 a 15 dígitos).',
 msg:v=>v.trim().length>=10?'':'Escribe al menos 10 caracteres.',
 age:v=>Number.isInteger(+v)&&+v>=1&&+v<=120?'':'Escribe una edad válida entre 1 y 120.'
};
function validate(f){
 let ok=true;
 $$('#'+f.id+' [data-v]').forEach(i=>{
  let m='';for(const k of i.dataset.v.split(',')){m=R[k](i.value);if(m)break}
  i.parentElement.querySelector('.err').textContent=m;i.setAttribute('aria-invalid',!!m);
  if(m&&ok){i.focus();ok=false}
 });
 return ok;
}


const uniq=k=>[...new Set(BOOKS.map(b=>b[k]))];
const fill=(id,vals)=>vals.forEach(v=>$(id).insertAdjacentHTML('beforeend',`<option value="${esc(v)}">${esc(v)}</option>`));
fill('#fCat',CATS);fill('#fGenre',uniq('genre').sort((a,b)=>a.localeCompare(b,'es')));fill('#fAuthor',uniq('author').sort((a,b)=>a.localeCompare(b,'es')));
fill('#fPub',uniq('publisher').sort((a,b)=>a.localeCompare(b,'es')));fill('#fYear',uniq('year').sort((a,b)=>b-a));
$('#az').innerHTML='<button data-l="">Todas</button>'+[...'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'].map(l=>`<button data-l="${l}">${l}</button>`).join('');
$('#cats').innerHTML=CATS.map((c,i)=>`<button class="cat c${i}" data-cat="${esc(c)}"><b>${esc(c)}</b>${BOOKS.filter(b=>b.category===c).length} libros</button>`).join('');
$('#trio').innerHTML=BOOKS.filter(b=>b.isBest).slice(0,3).map(cover).join('');
$('#yr').textContent=new Date().getFullYear();
if(matchMedia('(prefers-color-scheme:dark)').matches)document.documentElement.dataset.theme='dark';

/* Filtros: cualquier control con data-f actualiza el estado */
$$('[data-f]').forEach(e=>e.addEventListener('input',()=>{S[e.dataset.f]=e.value;S.page=1;render()}));
$('#navq').addEventListener('keydown',e=>{if(e.key==='Enter')go('#catalogo')});

/* Clics: delegación de eventos */
document.addEventListener('click',e=>{
 const t=e.target;
 if(t.tagName==='DIALOG'){t.close();return}
 let m;
 if(m=t.closest('[data-act]')){
  const id=m.dataset.id;
  const A={view:()=>detail(id),add:()=>add(id),fav:()=>fav(id),inc:()=>chg(id,1),dec:()=>chg(id,-1),del:()=>{cart.delete(id);cartUI()},
  clear:()=>{cart.clear();cartUI();toast('Carrito vaciado')},cart:()=>$('#cartD').showModal(),close:()=>m.closest('dialog').close(),
  more:()=>{S.page++;render()},top:()=>scrollTo({top:0,behavior:'smooth'}),theme:()=>{const h=document.documentElement;h.dataset.theme=h.dataset.theme==='dark'?'light':'dark'},
  grid:()=>{S.view='grid';render()},list:()=>{S.view='list';render()},prev:()=>$('#car').scrollBy({left:-460,behavior:'smooth'}),next:()=>$('#car').scrollBy({left:460,behavior:'smooth'}),
  reset:()=>{Object.assign(S,D0,{page:1});render()},favs:()=>{S.fav=!S.fav;S.page=1;render();go('#catalogo')},
  checkout:()=>{if(!cart.size)return;const s=totals();$('#cartD').close();
   $('#sum').innerHTML=`<p>${s.n} libro(s) · Subtotal ${cop(s.sub)} · Envío ${cop(s.ship)}<br><b>Total a pagar: ${cop(s.total)}</b></p>`;
   $('#coD').showModal()}};
  A[m.dataset.act]?.();return;
 }
 if(m=t.closest('[data-clr]')){S[m.dataset.clr]=D0[m.dataset.clr];S.page=1;render();return}
 if(m=t.closest('[data-l]')){S.letter=m.dataset.l;S.page=1;render();return}
 if(m=t.closest('[data-cat]')){Object.assign(S,D0,{cat:m.dataset.cat,page:1});render();go('#catalogo');return}
 if(m=t.closest('[data-tab]')){S.tab=m.dataset.tab;S.page=1;render();if(m.tagName==='A')$('#menu').classList.remove('open');return}
 if(t.closest('#menu a'))$('#menu').classList.remove('open');
});
$('#menuBtn').addEventListener('click',e=>{const o=$('#menu').classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',o)});
usersList.addEventListener('click',e=>{const button=e.target.closest('[data-user-id]');if(button)loadPosts(Number(button.dataset.userId))});
retryPosts.addEventListener('click',()=>{if(activeUserId!==null)loadPosts(activeUserId)});
retryUsers.addEventListener('click',loadUsers);
addEventListener('scroll',()=>{$('#top').style.display=scrollY>500?'block':'none'});

/* Formularios */
$('#fContact').addEventListener('submit',e=>{e.preventDefault();if(validate(e.target)){e.target.reset();toast('Mensaje enviado. ¡Gracias por escribirnos!')}});
$('#fNews').addEventListener('submit',e=>{e.preventDefault();if(validate(e.target)){e.target.reset();toast('¡Listo! Ya estás suscrito al boletín.')}});

/* Registro de lector: imprime nombre, correo y edad en la consola */
$('#fReader').addEventListener('submit',e=>{
 e.preventDefault();
 if(validate(e.target)){
  const f=e.target;
  const datos={nombre:f.nombre.value.trim(),correo:f.correo.value.trim(),edad:Number(f.edad.value)};
  console.log(datos); // { nombre: "Ana", correo: "ana@mail.com", edad: 25 }
  f.reset();
  toast('¡Gracias! Tus datos fueron registrados.');
 }
});

function orderSubmit(e){
 e.preventDefault();if(!validate(e.target))return;
 const s=totals(),no='MARC-'+Date.now().toString().slice(-6),nm=e.target.n.value;
 const lines=[...cart].map(([id,q])=>`<li>${q} × ${esc(byId(id).title)} — ${cop(price(byId(id))*q)}</li>`).join('');
 $('#coBody').innerHTML=`<h2>¡Pedido confirmado!</h2><p>Gracias, ${esc(nm)}. Tu número de pedido es <b>${no}</b> (simulado: no se realizó ningún cobro).</p><ul>${lines}</ul><p><b>Total: ${cop(s.total)}</b></p><button class="btn" data-act="close">Cerrar</button>`;
 cart.clear();cartUI();
}
$('#fOrder').addEventListener('submit',orderSubmit);
const coHTML=$('#coBody').innerHTML; // copia del formulario original
$('#coD').addEventListener('close',()=>{ // tras confirmar un pedido, restaura el formulario
 if(!$('#fOrder')){$('#coBody').innerHTML=coHTML;$('#fOrder').addEventListener('submit',orderSubmit)}
});

render();cartUI();loadUsers();