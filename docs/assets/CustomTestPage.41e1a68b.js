import{_ as b,d,P as x,A as r,c,a as e,F as m,e as p,t as i,w as f,u as w,o as l,f as S,v as T,p as q,g as y}from"./index.d1565be8.js";const Q={data(){const t=w();return{answer:{},currentQuestion:0,showScore:!1,score:0,percentage:"",questions:d(()=>r.customTest),testName:d(()=>r.testNames),goHome(){t.push({name:"Home"})},customTestName:d(()=>r.customTestName)}},methods:{submit(t){console.log(t);let n=this.currentQuestion+1;if(t!="true"&&t!=""){x.toast("Please Select an Answer");return}if(t=="true"&&(this.score=this.score+1,console.log("correct!"),console.log(t)),n<this.questions.length)this.answer={},this.currentQuestion=n,console.log(this.currentQuestion);else{let _=r.customTest.length,h=this.score/_*100;this.percentage=h.toFixed(0),this.showScore=!0}}}},u=t=>(q("data-v-170b6c38"),t=t(),y(),t),k={class:""},H={class:"row gx-0"},C={class:"col-md-6"},N={class:"col-md-6 text-center"},P={class:"quiz-info"},I={class:"questions-left"},R={key:0,class:"scoreboard text-center elevation-4 col-md-4 mx-auto"},A=u(()=>e("div",null,[e("h3",null,"Test Completed!")],-1)),B=u(()=>e("div",{class:"text-muted"},"You scored:",-1)),F={class:"percentage mt-3"},D={class:"score"},M={class:"home-btn"},V={key:1,class:"row gx-0"},j={class:"test-card rounded col-md-8 mx-auto elevation-5"},z={class:"question-name"},E=u(()=>e("div",{class:"d-flex"},null,-1)),L=["value"],O=["id","value"],U=u(()=>e("div",{class:"col-md-8 mx-auto text-end mt-5 mb-5"},[e("button",{title:"Submit",class:"btn bg-danger submit-btn"}," submit ")],-1));function Y(t,n,_,h,s,v){return l(),c(m,null,[e("nav",k,[e("div",H,[e("div",C,[(l(!0),c(m,null,p(s.customTestName[0],(o,a)=>(l(),c("h1",{key:a,class:"test-name"},i(o),1))),128))]),e("div",N,[e("div",P,[e("span",{onClick:n[0]||(n[0]=(...o)=>s.goHome&&s.goHome(...o)),type:"button",class:"home btn"},"Return Home"),e("span",I,i(s.currentQuestion+1)+" / "+i(s.questions.length),1)])])])]),e("div",null,[s.showScore?(l(),c("div",R,[A,B,e("div",F,[e("p",D,i(s.percentage)+"%",1)]),e("div",M,[e("button",{onClick:n[1]||(n[1]=(...o)=>s.goHome&&s.goHome(...o)),class:"btn text-danger"},"Return Home")])])):(l(),c("div",V,[e("form",{id:"form",action:"",onSubmit:n[3]||(n[3]=f(o=>v.submit(s.answer),["prevent"]))},[e("div",j,[e("div",z,[e("span",null,i(s.currentQuestion+1)+". ",1),e("span",null,i(s.questions[s.currentQuestion].questionText),1)]),E,(l(!0),c(m,null,p(s.questions[s.currentQuestion].answerOptions,(o,a)=>(l(),c("div",{class:"d-flex justify-content-between questions",key:a},[e("label",{value:o.answerText},i(o.letter)+". "+i(o.answerText),9,L),S(e("input",{id:o.answerText,value:o.isCorrect,type:"radio","onUpdate:modelValue":n[2]||(n[2]=g=>s.answer=g),name:"testing"},null,8,O),[[T,s.answer]])]))),128))]),U],32)]))])],64)}const J=b(Q,[["render",Y],["__scopeId","data-v-170b6c38"]]);export{J as default};