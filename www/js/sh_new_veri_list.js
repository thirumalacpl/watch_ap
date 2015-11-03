$(document).on('pageshow', '#sh_new_veri_list', function(){  
//alert("sh_new_veri_list one");
$('#lis_sh').empty();
//alert("supervisor_list_view");

 $(document).off('click', '#dashcooi').on('click', '#dashcooi', function() {

  $.mobile.changePage($('#dashboard_sh'), { transition: "none", changeHash: true, reverse: false });
return false;
});

/*  $(document).off('click', '#newsh').on('click', '#newsh', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_new_veri_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});*/

 $(document).off('click', '#inprogresscooi').on('click', '#inprogresscooi', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

  $(document).off('click', '#waiting').on('click', '#waiting', function() {
  //sessionStorage.getItem.clear;
 
  $.mobile.changePage($('#sh_waiting_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});
   
 $(document).off('click', '#shapproved').on('click', '#shapproved', function() {
  //sessionStorage.getItem.clear;
 
  $.mobile.changePage($('#sh_tobe_approved_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

      $(document).off('click', '#completedsh').on('click', '#completedsh', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_completed_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});
                  $(document).off('click', '#shnotveri').on('click', '#shnotveri', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});

            $(document).off('click', '#rejectiei').on('click', '#rejectiei', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_reject_listio'), { transition: "none", changeHash: true, reverse: false });
return false;
});

                        $(document).off('click', '#verifal').on('click', '#verifal', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_Verified_false'), { transition: "none", changeHash: true, reverse: false });
return false;
});

    $(document).off('click', '#signoutcooi').on('click', '#signoutcooi', function() {
  sessionStorage.clear(); 
   
  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
return false;
});


  
   sh_new_veri_list =  JSON.parse(sessionStorage.getItem("sh_new_veri_list"));

   //employment_records_array =  JSON.parse(sessionStorage.getItem("employment_records_array"));
    sh_addressid_records_array =  JSON.parse(sessionStorage.getItem("sh_addressid_records_array"));
    sh_educational_records_array =  JSON.parse(sessionStorage.getItem("sh_educational_records_array"));
     sh_basic_profile_records_array =  JSON.parse(sessionStorage.getItem("sh_basic_profile_records_array"));

     sh_employment_records_array =  JSON.parse(sessionStorage.getItem("sh_employment_records_array"));

     insertassign_employment_array =  JSON.parse(sessionStorage.getItem("insertassign_employment_array"));
insertassign_education_array =  JSON.parse(sessionStorage.getItem("insertassign_education_array"));
insertassign_address_array =  JSON.parse(sessionStorage.getItem("insertassign_address_array"));

assests_verification_array =  JSON.parse(sessionStorage.getItem("assests_verification_array"));

bankguarantee_verification_array =  JSON.parse(sessionStorage.getItem("bankguarantee_verification_array"));

//alert(sh_employment_records_array);


var superempty=sh_new_veri_list;

if(superempty == ""){
  alert('No record Found');
  $.mobile.changePage($('#dashboard_sh'), { transition: "none", changeHash: true, reverse: false });
}

for(a=0;a<sh_new_veri_list.length;a++){
  super_obj = sh_new_veri_list[a];
 //alert(super_obj.verification_user_id+'superArray'+super_obj.qualification_id);

qualification_id=super_obj.edutype;
//alert(super_obj.qualification_id +'for');

var sup=super_obj.First_Name;
var date_new=super_obj.start_date;
//alert(date_new);
var s = date_new;
var bits = s.split(/\D/);
var date = new Date(bits[0], --bits[1], bits[2], bits[3], bits[4]);



//alert(date.getDate()+'/'+parseInt(date.getMonth() + 1)+'/'+date.getFullYear());

var date=date.getDate()+'/'+parseInt(date.getMonth() + 1)+'/'+date.getFullYear();


if( typeof sup !== 'undefined'){

if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpnew('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/education-icon.png" class="li_imgs"><h2 class="li_h2">'+super_obj.name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.taskname+'</p><p class="li_p">'+date+'</p><span class="li_span">'+super_obj.qualification_name+'</span><b class="li_b">'+super_obj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/company-icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'
$('#lis_sh').append(lis);

}
if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpnew('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/employment-new.png" class="li_imgs"><h2 class="li_h2">'+super_obj.name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><span class="li_span">'+super_obj.qualification_name+'</span><b class="li_b">'+super_obj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/employment-new.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);
}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpnew('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/id-icon.png" class="li_imgs"><h2 class="li_h2">'+super_obj.name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><span class="li_span">'+super_obj.qualification_name+'</span><b class="li_b">'+super_obj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/id-icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);
}

/*bank*/
if(qualification_id == '27' || qualification_id == '28'){
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/id-icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);

}

/*assest*/
if(qualification_id == '16' || qualification_id == '17' || qualification_id == '18' || qualification_id == '19' || qualification_id == '20' || qualification_id == '21' ||qualification_id == '22' || qualification_id == '23' || qualification_id == '24' || qualification_id == '25' || qualification_id == '26'){
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shnewlist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/id-icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.First_Name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.Verification_Category+'</p><p class="li_p">'+super_obj.task_name+'</p><p class="li_p">'+super_obj.qname+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.Verification_Master_Id+'</b></a></li>'

$('#lis_sh').append(lis);
}

}



}


});



function shnewlist(index){



  super_obj = sh_new_veri_list[index];
  qualification_id =super_obj.edutype;
  user_ida=super_obj.Verification_Master_Id;



if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//alert('function address id 12 to 15');
for(a=0;a<sh_addressid_records_array.length;a++){
  address_obj = sh_addressid_records_array[a];

  super_obj = sh_new_veri_list[index];
  h =address_obj.user_id;
  hadd=address_obj.proof_type_id;

  g =super_obj.Verification_Master_Id;

  if( h == g && hadd == qualification_id){
    address_objag = sh_addressid_records_array[a];
//alert(address_objag.user_id+'addressid_records_array');
}

}

for(a=0;a<insertassign_address_array.length;a++){

  inser_a = insertassign_address_array[a];

  super_obj = sh_new_veri_list[index];
  huu =inser_a.Verification_Master_Id;
  huemployy=inser_a.id;
  guu =super_obj.Verification_Master_Id;
//alert(g+'gg');

if( huu == guu && huemployy == qualification_id ){
//alert(huu+'iiiiiiiiiiin'+guu);
//alert(huemployy+'iihu qualiiin'+qualification_id);
insert_add = insertassign_address_array[a];
//alert('employ');
//alert(insert_add.Verification_Master_Id+"emp----o"+insert_add.id)
//alert(employment_obja.user_id+'employment_records_array'+g);
}
}

}


if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
//alert('function eduction id 1 to 5');
for(a=0;a<sh_educational_records_array.length;a++){
  eductional_obj = sh_educational_records_array[a];

  super_obj = sh_new_veri_list[index];
  h =eductional_obj.user_id;
  hedu=eductional_obj.education_type;
//alert(hedu+'hdeducompare'+qualification_id); 
g =super_obj.Verification_Master_Id;
//alert(g+'gg');

if( h == g && hedu == qualification_id){

  eductional_objaa = sh_educational_records_array[a];
  //alert(eductional_objaa+'edutype');

}

}

for(a=0;a<insertassign_education_array.length;a++){

  inser_e = insertassign_education_array[a];

  super_obj = sh_new_veri_list[index];
  huu =inser_e.Verification_Master_Id;
  huemployy=inser_e.edutype;
  guu =super_obj.Verification_Master_Id;
//alert(g+'gg');

if( huu == guu && huemployy == qualification_id ){
//alert(huu+'iiiiiiiiiiin'+guu);
//alert(huemployy+'iihu qualiiin'+qualification_id);
insert_edu = insertassign_education_array[a];
//alert('employ');
//alert(insert_edu.Verification_Master_Id+"emp----o"+insert_edu.edu_type)
//alert(employment_obja.user_id+'employment_records_array'+g);
}
}

}


if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('function employmen id 7 to 11');
for(a=0;a<sh_employment_records_array.length;a++){
  employment_obj = sh_employment_records_array[a];

  super_obj = sh_new_veri_list[index];
  hu =employment_obj.user_id;
  huemploy=employment_obj.employment_type;
  gu =super_obj.Verification_Master_Id;
//alert(g+'gg');
if( hu == gu && huemploy == qualification_id ){
//alert(hu+'iiiiiiiiiiin');
employment_objad = sh_employment_records_array[a];
//alert('employ');
//alert(employment_objad.user_id+"emp----o"+employment_objad.employment_type)
//alert(employment_obja.user_id+'employment_records_array'+g);
}
}

for(a=0;a<insertassign_employment_array.length;a++){

  inser_o = insertassign_employment_array[a];

  super_obj = sh_new_veri_list[index];
  huu =inser_o.Verification_Master_Id;
  huemployy=inser_o.edutype;
  guu =super_obj.Verification_Master_Id;
//alert(g+'gg');

if( huu == guu && huemployy == qualification_id ){
//alert(huu+'iiiiiiiiiiin'+guu);
//alert(huemployy+'iihu qualiiin'+qualification_id);
insert_emp = insertassign_employment_array[a];
//alert('employ');
//alert(insert_emp.Verification_Master_Id+"emp----o"+insert_emp.edu_type)
//alert(employment_obja.user_id+'employment_records_array'+g);
}
}
}

if(qualification_id == '27' || qualification_id == '28'){
//alert('function employmen id 27 to 28');
for(a=0;a<bankguarantee_verification_array.length;a++){
  bank_guar = bankguarantee_verification_array[a];

  super_inpro_obj = sh_new_veri_list[index];
  hj =bank_guar.user_id;
  huemploy=bank_guar.acc_mode;
//alert(h+'hh');
gj =super_obj.Verification_Master_Id;
//alert(g+'gg');
if( hj == gj && huemploy == qualification_id){
  bank_inpro = bankguarantee_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '16' || qualification_id == '17' || qualification_id == '18' || qualification_id == '19' || qualification_id == '20' || qualification_id == '21' ||qualification_id == '22' || qualification_id == '23' || qualification_id == '24' || qualification_id == '25' || qualification_id == '26'){
//alert('function employmen id 16 to 26');

for(a=0;a<assests_verification_array.length;a++){
  assest_ver = assests_verification_array[a];

  super_inpro_obj = sh_new_veri_list[index];
  hj =assest_ver.user_id;
  huemploy=assest_ver.propert_type;
//alert(h+'hh');
gj =super_obj.Verification_Master_Id;
//alert(hj+'gg'+gj+''+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  assest_inpro = assests_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

var bank_inpro=bank_inpro;
var assest_inpro=assest_inpro;

var insert_emp=insert_emp;
var insert_edu=insert_edu;
var insert_add=insert_add;


var eductional_objaa=eductional_objaa;
var employment_objad=employment_objad;
var address_objag=address_objag;



if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
//alert('currentob education succes'); 

sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
sessionStorage.setItem("currentobj_educational_records",JSON.stringify(eductional_objaa));
sessionStorage.setItem("insert_edu",JSON.stringify(insert_edu));
$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//alert('currentob address succes');
//sessionStorage.setItem("insert_address",JSON.stringify(insert_address));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
sessionStorage.setItem("insert_add",JSON.stringify(insert_add));
sessionStorage.setItem("currentobja_addressid",JSON.stringify(address_objag ));
$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}

if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('currentob employment succes');

sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
sessionStorage.setItem("currentobj_employment_records",JSON.stringify(employment_objad));
sessionStorage.setItem("insert_emp",JSON.stringify(insert_emp));

$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });

return false;
}


if(qualification_id == '27' || qualification_id == '28'){
//alert('currentob address succes');
sessionStorage.setItem("bank_inpro",JSON.stringify(bank_inpro));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}

if(qualification_id == '16' || qualification_id == '17' || qualification_id == '18' || qualification_id == '19' || qualification_id == '20' || qualification_id == '21' ||qualification_id == '22' || qualification_id == '23' || qualification_id == '24' || qualification_id == '25' || qualification_id == '26'){
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));


sessionStorage.setItem("assest_inpro",JSON.stringify(assest_inpro));

$.mobile.changePage($('#sh_new_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}

if(log_inpro_objg !== undefined ){
//alert('log current');
//sessionStorage.setItem("looog",JSON.stringify(image_obj_logd));
sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(log_inpro_objg)); 
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}


}