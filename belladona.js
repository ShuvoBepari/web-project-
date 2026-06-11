
 
 
 const overlay = document.querySelector(".overlay");
 const prflslide = document.getElementById("pstslde");
// const prfl =document.querySelector(".prfl");
 const main =document.querySelector(".main");
//const postbox=document.querySelector(".postbox");

//const pro=document.querySelector(".profile");
//const massage =document.getElementById("message");
 //const profilebtn = document.getElementById("pro");
//const profilenav = document.querySelector(".prnv");
//const profileslider =document.querySelector(".profile-slider");

 
const navigation = document.querySelector(".nv");
const mnu =navigation.querySelector(".mnu1");
 const views = {
    profile: ".profile",
    massage: ".msngrl",
    feed: ".pstbox"
   
};
const profileviews ={
    home:".prflfedisplay",
    about:".userdta"
};
const pages ={
    profile(){},
    massage(){
    },
    feed(){},

}
console.log(views["home"]);

navigation.addEventListener("click", async (e)=>{

   const dtaview=e.target.dataset.view;

    if(!dtaview){return;}
   if(dtaview==="btn-menu"){
          mnu.classList.toggle("open");
      overlay.classList.toggle("show");         
   }
   if(dtaview==="mainentry"){ 
      const prfle= await fetch("/main");
      const prof = await prfle.text();
      main.innerHTML=prof;
      main.querySelector(".profile").classList.add("active");
        
   } 
   if(views[dtaview]){

    Object.values(views).forEach(selector => {
        main.querySelector(selector)?.classList.remove("active");
    });
    main.querySelector(views[dtaview])?.classList.add("active");
 
   if(dtaview=="massage"){
       
for(let i=0;i<20;i++){
 
  chatidvalue();
} } 
}
    
});

main.addEventListener("click", (e)=> {
      const btn = e.target.closest("[data-view]");
      const dta=e.target.dataset.view;
   
   
    if(!btn) return;

 const datav= btn.dataset.view;
         if(datav=="home"||datav=="about"){
            console.log("ds");
            Object.values(profileviews).forEach(selector => {
                main.querySelector(selector)?.classList.remove("active");
            });   
        main.querySelector(profileviews[datav])?.classList.add("active");
            if(datav=="about"&&main.querySelector(".userdta > .user-dta")===null){
               
              const userdata =  main.querySelector("#userdata").content.cloneNode(true);
                main.querySelector(".userdta").appendChild(userdata);
                console.log(main.querySelector(".userdta"));
               }   
      }
       if(datav==="msngr-user"){
         console.log( main.querySelector(".msngrl >.msngr "));
      main.querySelector(".msngrl >.msngr ").style.display ="none";
     fillmsgbox();
        
    }

      
});


overlay.addEventListener("click",()=> {
         
mnu.classList.remove("open");
overlay.classList.remove("show");
 });
 let resize=true;
  window.addEventListener("resize", () => {
    if(resize && window.innerWidth >= 600){   
        main.classList.remove("closed");
        resize= false; }
});
//entry logic 


function chatidvalue(){
 // for msng userview data
 const chatlist=document.getElementById("msngr-userview");
    const temphead = main.querySelector(".temphead");
    const chatid=document.createElement("button");
     
    const tampclone = temphead.content.cloneNode(true);
     const userimg = tampclone.querySelector(".user-temp  div:nth-of-type(1) > img");
     userimg.src = "ahs";
     tampclone.querySelector(".user-temp div:nth-of-type(2) > h4").textContent="fairytale";
     tampclone.querySelector(".user-temp div:nth-of-type(2) > p").textContent="test001";
     chatid.setAttribute('data-view','msngr-user');
     chatid.type="button";
      chatid.appendChild(tampclone);
     chatlist.appendChild(chatid);
 
}
 function fillmsgbox(){
            const msgbox = main.querySelector("#temp-msgbox");
              
            const clonemsg =msgbox.content.cloneNode(true);
           
            const rembox = clonemsg.querySelector(".msgbox");
           const btnback =clonemsg.querySelector("#btnback");
           
         
            main.querySelector(".msngrl").appendChild(rembox);
               for(let h = 0; h<20; h++){
         fillinbox(h);
       }
    btnback.addEventListener("click",()=>{
               rembox.remove();
           main.querySelector(".msngr").style.display="flex";
           });
    }
    
    

function fillinbox (aa){
          const inbox =document.querySelector(".inbox");
    
         const masges = main.querySelector("#msges").content.cloneNode(true);

         
     if(aa%2==0){    masges.querySelector("div").style.alignItems= 'flex-end';}
     else{   masges.querySelector("div").style.alignItems= 'flex-start';}
         masges.querySelector("div :nth-child(1)").textContent= "320010"+aa;
          masges.querySelector("div :nth-child(2)").textContent= aa;
          inbox.appendChild(masges);

       }
//entry logic end 
/*
//msngr logic  start  
const msngrl=document.querySelector(".msngrl");
const msngr =document.querySelector(".msngr");
function chatidvalue(){
 // for msng userview data
    
    const chatid=document.createElement("button");
    const tampclone = tamphead.content.cloneNode(true);
     const userimg = tampclone.querySelector(".user-temp  div:nth-of-type(1) > img");
     userimg.src = "ahs";
     tampclone.querySelector(".user-temp div:nth-of-type(2) > h4").textContent="fairytale";
     tampclone.querySelector(".user-temp div:nth-of-type(2) > p").textContent="test001";
     chatid.setAttribute('data-view','msngr-user');
      chatid.appendChild(tampclone);
     chatlist.appendChild(chatid);
 
}
const chatlist=document.getElementById("msngr-userview");
 
const tamphead = document.querySelector("#head");
for(let i=0;i<20;i++){
 
  chatidvalue();
}
chatlist.addEventListener("click",(e)=>{
   const  dviw = e.target.dataset.view;
      msngr.style.display="none";
         fillmsgbox();
     

});
 const msgbuttons=[];
 
    // inbox logic start 
   
      
    
      
       
     //inbox logic ends 


//msngr logic end
*/
 
/*let resize=false;
 prflslide.addEventListener("click",()=> {
         main.classList.toggle("closed");
             resize=true;
 });

 
function showPanel(panel){

    pro.classList.remove("active");
    msngrl.classList.remove("active");

    panel.classList.add("active");
}

profilebtn.addEventListener("click", ()=> showPanel(pro));
massage.addEventListener("click", ()=> showPanel(msngrl));
profilenav.addEventListener("click",(e)=>{

       
 const view = e.target.dataset.view;

    if(!view) return;
homnav(view);
 });
 function homnav (val){
     
 if(val=="home"){
      profileslider.style.gridTemplateColumns= "1fr 0";
 }
 if(val=="about"){
    profileslider.style.gridTemplateColumns= "0 1fr";
 }
 }
 let av="home";
 homnav(av);
 */