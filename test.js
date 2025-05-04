//   let htmlprog=document.getElementsByClassName("html-prog")[0]
//   let cssprog=document.getElementsByClassName("css-prog")[0]
//   let jsprog=document.getElementsByClassName("js-prog")[0]
//   let nodeprog=document.getElementsByClassName("node-prog")[0]
//   let reactprog=document.getElementsByClassName("react-prog")[0]

//   let htmlvalue=document.getElementsByClassName("html-value")[0]
//   let cssvalue=document.getElementsByClassName("css-value")[0]
//   let jsvalue=document.getElementsByClassName("js-value")[0]
//   let nodevalue=document.getElementsByClassName("node-value")[0]
//   let reactvalue=document.getElementsByClassName("react-value")[0]
//   let h=0;
//   let c=0;
//   let j=0;
//   let p=0;
//   let py=0;
//   //used to repeatedly execute a function or code snippet with a fixed time delay between each call
//   let html=setInterval(()=>{
//     h++;
//     htmlvalue.innerHTML=`${h}%` //back slash ie ` `is required otherwise throws and error 
//     htmlprog.style.background=`conic-gradient(rgb(13, 134, 13) ${3.6*h}deg, rgb(14, 11, 11)0deg)`
//     if(h==70)
//         {
//             clearInterval(html)
//         }

//   },25
// )
// let css=setInterval(()=>{
//     c++;
//     cssvalue.innerHTML=`${c}%` //back slash ie ` `is required otherwise throws and error 
//     cssprog.style.background=`conic-gradient(rgb(13, 134, 13) ${3.6*c}deg, rgb(14, 11, 11)0deg)`
//     if(c==65)
//         {
//             clearInterval(css)
//         }

//   },25
// )
// let js=setInterval(()=>{
//     j++;
//     jsvalue.innerHTML=`${j}%` //back slash ie ` `is required otherwise throws and error 
//     jsprog.style.background=`conic-gradient(rgb(13, 134, 13) ${3.6*j}deg, rgb(14, 11, 11)0deg)`
//     if(j==50)
//         {
//             clearInterval(js)
//         }

//   },25
// )
// let node=setInterval(()=>{
//     p++;
//     nodevalue.innerHTML=`${p}%` //back slash ie ` `is required otherwise throws and error 
//     nodeprog.style.background=`conic-gradient(rgb(13, 134, 13) ${3.6*p}deg, rgb(14, 11, 11)0deg)`
//     if(p==60)
//         {
//             clearInterval(node)
//         }

//   },25
// )
// let react=setInterval(()=>{
//     py++;
//     reactvalue.innerHTML=`${py}%` //back slash ie ` `is required otherwise throws and error 
//     reactprog.style.background=`conic-gradient(rgb(13, 134, 13) ${3.6*py}deg, rgb(14, 11, 11)0deg)`
//     if(py==30)
//         {
//             clearInterval(react)
//         }

//   },25
// )

// let githubprog = document.getElementsByClassName("inner-github-prog")[0];
// let sqlprog = document.getElementsByClassName("inner-mysql-prog")[0];
// let dsaprog = document.getElementsByClassName("inner-dsa-prog")[0];
// let gitvalue = document.getElementsByClassName("git-value")[0];
// let sqlvalue = document.getElementsByClassName("sql-value")[0];
// let dsavalue = document.getElementsByClassName("dsa-value")[0];
// let g=0
// let s=0
// let d=0
// let github=setInterval(() => {
//     g++
//     gitvalue.innerHTML=`${g}%`
//     githubprog.style.width=`${g}%`
//     if(g==40)
//         {
//             clearInterval(github)
//         }
    
// },25)
// let sql=setInterval(() => {
//     s++
//     sqlvalue.innerHTML=`${s}%`
//    sqlprog.style.width=`${s}%`

//     if(s==50){
//         clearInterval(sql)
//     }
    
// }, 25);
// let dsa=setInterval(() => {
//     d++
//     dsavalue.innerHTML=`${d}%`
//     dsaprog.style.width=`${d}%`

//     if(d==25){
//         clearInterval(dsa)
//     }
    
// }, 25);
// let t1=gsap.timeline();
// t1.from(".nav",{
//         x:-200,
//         opacity:0,
//         duration:1
//     })
// t1.from(".left-nav",{
//     y:-200,
//     opacity:0,
//     duration:1
// })
// t1.from(".icon",{
//     y:-200,
//     opacity:0,
//     duration:1
// })
// t1.from(".list-items",{
//     y:-200,
//     opacity:0,
//     duration:1,
//     stagger:1
// })

// // let t9=gsap.timeline();

// // t9.from(".list-items",{
// //     y:-200,
// //     opacity:0,
// //     duration:1,
// //     stagger:1
// // })

// let t2=gsap.timeline();
// t2.from(".line",{
//     x:-80,
//     opacity:0,
//     duration:1,
//     stagger:1
// })
// t2.from("#btn",{
//     x:-60,
//     opacity:0,
//     duration:1,
//     stagger:1
// })
// // let t3=gsap.timeline();
// gsap.from(".logo",{
//     x:500,
//     opacity:0,
//     duration:1,
//     // stagger:1
// })
// let t4=gsap.timeline();
// t4.from(".heading",{
//     x:-200,
//     opacity:0,
//     duration:1,
//     // stagger:1
//     scrollTrigger:{
//         trigger:".heading",
//         scroller:"body",
//         // markers:true,
//         start:"top 80%",
//         end:"top 60%",
//         scrub:2

//     }
// })
// // let t5=gsap.timeline();
// t4.from(".bio",{
//     x:300,
//     opacity:0,
//     duration:1,
//     // stagger:1
//     scrollTrigger:{
//         trigger:".bio",
//         scroller:"body",
//         // markers:true,
//         start:"top 70%",
//         end:"top 50%",
//         scrub:2

//     }
// })
// // let t6=gsap.timeline();
// // t4.from("#value",{
// //     x:300,
// //     opacity:0,
// //     duration:1,
// //     // stagger:1
// //     scrollTrigger:{
// //         trigger:"#value",
// //         scroller:"body",
// //         // markers:true,
// //         start:"top 70%",
// //         end:"top 50%",
// //         scrub:2

// //     }
// // })
// let t5=gsap.timeline();
// t5.from(".heading-skill",{
//     x:-200,
//     opacity:0,
//     duration:1,
//     // stagger:1
//     scrollTrigger:{
//         trigger:".heading-skill",
//         scroller:"body",
//         // markers:true,
//         start:"top 70%",
//         end:"top 50%",
//         scrub:2
//     }
// })
// t5.from(".prog",{
//     x:200,
//     opacity:0,
//     rotate:360,
//     duration:1,
//     // stagger:1
//     scrollTrigger:{
//         trigger:".prog",
//         scroller:"body",
//         // markers:true,
//         start:"top 70%",
//         end:"top 50%",
//         scrub:2
//     }
// })