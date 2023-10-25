const { zokou } = require("../framework/zokou")
//const { getGroupe } = require("../bdd/groupe")
const { ajouterGroupe ,getGroupe,ajouterAction,getAntibot,ajouterAntibot} = require("../bdd")
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');
const fs = require("fs-extra")



zokou({nomCom:"antibot",categorie:"Groupe"},async(dest,zk,commandeOptions)=>{

  let {repondre,arg,ms,prefixe,dev,superUser,verifAdmin,verifZokouAdmin,verifGroupe}=commandeOptions;

  if(!verifGroupe)
  {repondre("Pour les groupes uniquement .");return;}
  const args = arg.join(" ");

  const demandeAntibot =async(f)=>
    {
      /*var txt ="https://replit.com/join/epezjbvype-murnoire"
      await zk.sendMessage(zk.user.id,{text:txt+"\n c' est l invite de zokou2.0"});*/
      var resultat;
      var donnees = await getAntibot(f);
           for(var a=0;a<donnees.length;a++)
             {    
              // console.log("Les donnees "+JSON.stringify(donnees));
                if(donnees[a].groupejid===f){resultat=donnees[a].etat;}
                
             }
      return resultat;
    }

  var req=await demandeAntibot(dest);

              try{

                   if (!arg || arg == "") {
      repondre(`*Exemple : * ${prefix}antibot yes (to activate the antibot) or ${prefix}antibot no (to deactivate the antibot)`);return;
    }
                if(args==="yes")
                {
                  if(!dev){
                       if(!verifAdmin)
                   {
                         repondre("Sorry you cannot activate the antibot because you are not an administrator of the group.");return;
                   }else{

                           if(!dev){
                                        if(verifZokouAdmin)
                                        {
                                          if(req=="yes")
                                          {repondre("Antibot is already enabled for this group. "); return;}else{await ajouterAntibot(dest,args);repondre("Antibot successfully activated!")}
                                        }else{repondre("Sorry I can't activate the antibot because I am not an administrator of the group.")}
                           }else{

                                        if(req=="yes")
                                          {repondre("Antibot is already enabled for this group. "); return;}else{await ajouterAntibot(dest,args);repondre("Antibot successfully activated !")}
                           }
                   }}else{if(req=="yes")
                                          {repondre("Antibot is already enabled for this group. "); return;}else{await ajouterAntibot(dest,args);repondre("Antibot successfully activated!")}}
                }else if(args=="no")
                {
                     if(!dev)
                     {
                                       if(!verifAdmin)
                   {
                         repondre("Sorry you cannot disable antibot because you are not an administrator of the group .");return;
                   }else{

                           if(!dev){
                                        if(verifZokouAdmin)
                                        {
                                          if(req=="no")
                                          {repondre("Antibot is already enabled for this group.. "); return;}else{await ajouterAntibot(dest,args);repondre("Antibot successfully activated! !")}
                                        }else{repondre("Sorry I can't disable antibot because I'm not a group administrator .")}
                           }else{

                                        if(req=="no")
                                          {repondre("Antibot is already enabled for this group. "); return;}else{await ajouterAntibot(dest,args);repondre("Antibot successfully disabled !")}
                           }
                   }}else{if(req=="no")
                                          {repondre("Antibot is already enabled for this group.. "); return;}else{await ajouterAntibot(dest,args);repondre("Antibot successfully activated!!")}}
                }else if(args="état"||args=="etat")
                {
                      /*  req=="oui"?${repondre("*Etat anti-bot :* \n L'anti-bot est activé pour ce groupe");return;}: req=="non"?${repondre("*Etat anti-bot :* \n L'anti-bot est désactivé pour ce groupe");return;}:"";*/
                }
              //////////////////     
                
              }catch(e){}
  
})
