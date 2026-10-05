import React, { useMemo, useState } from "react";
import { BookOpen, Brain, CheckCircle2, ChevronDown, ChevronUp, Leaf, Lightbulb, Quote, RotateCcw, Sparkles, TreePine } from "lucide-react";

const cards = [
  { icon: TreePine, title: "La forêt", text: "La forêt est au cœur du recueil. Elle n’est pas seulement un décor : elle devient un espace intérieur, une présence vivante et une manière d’interroger notre rapport au monde." },
  { icon: Brain, title: "L’intime", text: "La nature fait écho aux émotions et à la mémoire. Le paysage extérieur permet à la voix poétique d’explorer ce qui se passe en elle." },
  { icon: Leaf, title: "Nature & humanité", text: "Le recueil rapproche l’être humain du monde naturel. Il invite à réfléchir à notre fragilité et à celle du vivant." },
  { icon: Sparkles, title: "Écriture poétique", text: "Vers libres, images, répétitions, rythme et sensations donnent au recueil une écriture très évocatrice." }
];
const quiz=[
 {q:"Quel est le parcours associé à Mes forêts ?",options:["Nature et progrès","La poésie, la nature, l’intime","Écrire pour dénoncer"],answer:1},
 {q:"Dans le recueil, la forêt est surtout…",options:["Un simple décor","Un lieu uniquement réaliste","Un espace naturel et intérieur"],answer:2},
 {q:"Quel procédé est important dans l’écriture poétique du recueil ?",options:["Les répétitions et les images","Uniquement les dialogues","Les didascalies"],answer:0},
 {q:"À quel genre appartient Mes forêts ?",options:["Théâtre","Poésie","Roman"],answer:1}
];
export default function App(){
 const[open,setOpen]=useState(0),[answers,setAnswers]=useState({}),[show,setShow]=useState(false);
 const score=useMemo(()=>quiz.reduce((s,x,i)=>s+(answers[i]===x.answer?1:0),0),[answers]);
 return <main className="page"><div className="wrap">
  <header className="hero"><TreePine className="heroTree" size={220}/><span className="pill"><BookOpen size={15}/> BAC DE FRANÇAIS · PREMIÈRE</span><h1>Mes <em>forêts</em></h1><p className="author">Hélène Dorion</p><div className="tags"><span>📚 Poésie</span><span>🌿 Nature</span><span>💭 Intime</span></div></header>
  <section className="intro"><article className="remember"><b><Lightbulb size={16}/> À RETENIR EN 20 SECONDES</b><p>Dans <i>Mes forêts</i>, la nature et l’intériorité se répondent. La forêt permet d’explorer les émotions, le temps, la mémoire et la place de l’être humain dans le vivant.</p></article><article className="panel"><h2><Quote/> Parcours associé</h2><strong>« La poésie, la nature, l’intime »</strong><p>Une formule à connaître précisément pour replacer l’œuvre dans le programme.</p></article></section>
  <Title n="01" t="Comprendre l’œuvre"/><h2 className="big">Les 4 idées essentielles</h2><section className="cards">{cards.map(({icon:Icon,title,text})=><article className="card" key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</section>
  <section className="twocol"><article className="panel"><Title n="02" t="Analyse"/><h2>Mots-clés à placer</h2><div className="chips">{["forêt","intime","mémoire","temps","vivant","fragilité","sensations","monde","nature","voix poétique"].map(x=><span key={x}>{x}</span>)}</div></article><article className="panel"><Title n="03" t="Méthode"/><h2>Pour une dissertation</h2><ol><li>Réponds précisément au sujet.</li><li>Appuie chaque idée sur un passage étudié.</li><li>Analyse la forme autant que le thème.</li><li>Relie tes arguments au parcours.</li></ol></article></section>
  <Title n="04" t="Révisions"/><h2 className="big">Questions flash</h2><section>{[["Pourquoi le titre Mes forêts est-il important ?","Le possessif « mes » associe la forêt à une expérience personnelle. Le titre invite à penser ensemble le monde naturel et l’intériorité."],["Comment nature et intime sont-ils liés ?","Les éléments naturels font écho aux émotions, aux souvenirs et aux questionnements de la voix poétique."],["Que faut-il analyser dans un poème ?","Le sens et la forme : images, répétitions, rythme, sonorités, disposition des vers et effets produits."]].map((x,i)=><article className="faq" key={i}><button onClick={()=>setOpen(open===i?-1:i)}>{x[0]}{open===i?<ChevronUp/>:<ChevronDown/>}</button>{open===i&&<p>{x[1]}</p>}</article>)}</section>
  <section className="quiz"><Title n="05" t="Entraînement"/><h2 className="big"><Brain/> Mini quiz</h2><div className="quizgrid">{quiz.map((x,qi)=><article className="q" key={qi}><b><em>{qi+1}.</em> {x.q}</b>{x.options.map((o,oi)=><button key={o} disabled={show} onClick={()=>setAnswers({...answers,[qi]:oi})} className={(answers[qi]===oi?'selected ':'')+(show&&answers[qi]===oi?(oi===x.answer?'correct':'wrong'):'')}>{o}</button>)}{show&&<small>✓ Réponse : {x.options[x.answer]}</small>}</article>)}</div>{!show?<button className="primary" disabled={Object.keys(answers).length!==quiz.length} onClick={()=>setShow(true)}>Voir mon score</button>:<div className="result"><CheckCircle2/> {score} / {quiz.length} <button onClick={()=>{setAnswers({});setShow(false)}}><RotateCcw/> Recommencer</button></div>}</section>
  <footer>Fiche de révision · Mes forêts · Hélène Dorion</footer>
 </div></main>
}
function Title({n,t}){return <p className="sectionTitle">{n} · {t}</p>}
