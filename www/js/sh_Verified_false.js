$(document).on('pageshow', '#sh_Verified_false', function(){  
//alert("sh_Verified_false one");
$('#lis_shsollrfalse').empty();


 $(document).off('click', '#dashcooiuuf').on('click', '#dashcooiuuf', function() {

  $.mobile.changePage($('#dashboard_sh'), { transition: "none", changeHash: true, reverse: false });
return false;
});

   
 $(document).off('click', '#inprogresscooiuf').on('click', '#inprogresscooiuf', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

      $(document).off('click', '#finalcooiuf').on('click', '#finalcooiuf', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});

            $(document).off('click', '#reportcooif').on('click', '#reportcooif', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});

    $(document).off('click', '#signoutcooiuuf').on('click', '#signoutcooiuuf', function() {
  sessionStorage.clear(); 
   
  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
return false;
});


  
   completed_sh =  JSON.parse(sessionStorage.getItem("sh_verified_false"));

   //employment_records_array =  JSON.parse(sessionStorage.getItem("employment_records_array"));
    sh_addressid_records_array =  JSON.parse(sessionStorage.getItem("sh_addressid_records_array"));
    sh_educational_records_array =  JSON.parse(sessionStorage.getItem("sh_educational_records_array"));
     sh_basic_profile_records_array =  JSON.parse(sessionStorage.getItem("sh_basic_profile_records_array"));

     sh_employment_records_array =  JSON.parse(sessionStorage.getItem("sh_employment_records_array"));

     supervisor_final_command_array =  JSON.parse(sessionStorage.getItem("supervisor_final_command_array"));

coordinator_final_comment_array =  JSON.parse(sessionStorage.getItem("coordinator_final_comment_array"));

//alert(completed_sh);


var superempty=completed_sh;

if(superempty == ""){
  alert(superempty+'No record Found');
  $.mobile.changePage($('#co_dashboard'), { transition: "none", changeHash: true, reverse: false });
}

for(a=0;a<completed_sh.length;a++){
  super_obj = completed_sh[a];
 //alert(super_obj.verification_user_id+'superArray'+super_obj.qualification_id);

qualification_id=super_obj.type;
//alert(super_obj.qualification_id +'for');

var sup=super_obj.name;
var date_new=super_obj.notverified_on ;
//alert(date_new);
var s = date_new;
var bits = s.split(/\D/);
var date = new Date(bits[0], --bits[1], bits[2], bits[3], bits[4]);



//alert(date.getDate()+'/'+parseInt(date.getMonth() + 1)+'/'+date.getFullYear());

var date=date.getDate()+'/'+parseInt(date.getMonth() + 1)+'/'+date.getFullYear();


if( typeof sup !== 'undefined'){

if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
//alert('1');
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpnew('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/education-icon.png" class="li_imgs"><h2 class="li_h2">'+super_obj.name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.taskname+'</p><p class="li_p">'+date+'</p><span class="li_span">'+super_obj.qualification_name+'</span><b class="li_b">'+super_obj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shfalselist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/company-icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.sremarks+'</p><p class="li_p">'+super_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.verification_user_id+'</b></a></li>'
$('#lis_shsollrfalse').append(lis);

}
if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpnew('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/employment-new.png" class="li_imgs"><h2 class="li_h2">'+super_obj.name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><span class="li_span">'+super_obj.qualification_name+'</span><b class="li_b">'+super_obj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shfalselist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/employment-new.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.sremarks+'</p><p class="li_p">'+super_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.verification_user_id+'</b></a></li>'

$('#lis_shsollrfalse').append(lis);
}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextpnew('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/id-icon.png" class="li_imgs"><h2 class="li_h2">'+super_obj.name+''+super_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><span class="li_span">'+super_obj.qualification_name+'</span><b class="li_b">'+super_obj.verification_user_id+'</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="shfalselist('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/id-icon.png" class="li_imgs_1"><h2 class="li_h2">'+super_obj.name+'</h2 class="li_h2"><p class="li_p">'+super_obj.verification_for+'</p><p class="li_p">'+super_obj.sremarks+'</p><p class="li_p">'+super_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+super_obj.verification_user_id+'</b></a></li>'

$('#lis_shsollrfalse').append(lis);
}

}



}


});



function shfalselist(index){



  super_obj = completed_sh[index];
  qualification_id =super_obj.type;
  user_ida=super_obj.verification_user_id;

/*$.ajax({url: "http://staging.eimpressive.com/slim-cor/commentsboth.php?user_ida="+user_ida+"&qualification_id="+qualification_id,
  data:$('#update_to_inprogresss').serialize(),
  type: 'post',                   
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  beforeSend: function() {
  },
  complete: function() {
  },
  success: function (result) {
    console.log('searchlpa' +result);
    if(result[0]){
      $("#popupsearchmade").popup("open");
    
      sessionStorage.setItem("supervisor_final_command_array",JSON.stringify(result[0]));
      sessionStorage.setItem("coordinator_final_comment_array",JSON.stringify(result[1]));
     
      $.mobile.loading().hide();
          
    //  $.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });

}else {
  alert('No Data Found for the search record'); 
}

return false;
},
error: function (request,error) {    
  console.log(request);
  console.log(error);  
  $("#Network").popup("open");         
  alert('Network error has occurred please try again!');
}
});*/

//alert(qualification_id +'qualification_id');
//alert(user_ida +'user');

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//alert('function address id 12 to 15');
for(a=0;a<sh_addressid_records_array.length;a++){
  address_obj = sh_addressid_records_array[a];

  super_obj = completed_sh[index];
  h =address_obj.user_id;
  hadd=address_obj.proof_type_id;

  g =super_obj.verification_user_id;

  if( h == g && hadd == qualification_id){
    address_objag = sh_addressid_records_array[a];
//alert(address_objag.user_id+'addressid_records_array');
}

}
}
if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
//alert('function eduction id 1 to 5');
for(a=0;a<sh_educational_records_array.length;a++){
  eductional_obj = sh_educational_records_array[a];

  super_obj = completed_sh[index];
  h =eductional_obj.user_id;
  hedu=eductional_obj.education_type;
//alert(hedu+'hdeducompare'+qualification_id); 
g =super_obj.verification_user_id;
//alert(g+'gg');

if( h == g && hedu == qualification_id){

  eductional_objaa = sh_educational_records_array[a];
  //alert(eductional_objaa+'edutype');

}

}
}


if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('function employmen id 7 to 11');
for(a=0;a<sh_employment_records_array.length;a++){
  employment_obj = sh_employment_records_array[a];

  super_obj = completed_sh[index];
  hu =employment_obj.user_id;
  huemploy=employment_obj.employment_type;
  gu =super_obj.verification_user_id;
//alert(g+'gg');
if( hu == gu && huemploy == qualification_id ){
//alert(hu+'iiiiiiiiiiin');
employment_objad = sh_employment_records_array[a];
//alert('employ');
//alert(employment_objad.user_id+"emp----o"+employment_objad.employment_type)
//alert(employment_obja.user_id+'employment_records_array'+g);
}
}
}

var final = supervisor_final_command_array;
//alert(final);
if( final !== null){
for(a=0;a<supervisor_final_command_array.length;a++){
  supervisor_final_command = supervisor_final_command_array[a];
  superr_objj = completed_sh[index];

  hj =supervisor_final_command.verification_id;
  huemploy=supervisor_final_command.type;
  gj =superr_objj.verification_user_id;
  if( hj == gj && huemploy == qualification_id){
  // alert("if log");
  supervisor_final_commanda = supervisor_final_command_array[a];
// alert(supervisor_final_commanda.verification_id+'supervisor_final_commanda');
}

}
}

var final = coordinator_final_comment_array;
//alert(final);
if( final !== null){
for(a=0;a<coordinator_final_comment_array.length;a++){
  supervisor_final_command = coordinator_final_comment_array[a];
  superr_objj = completed_sh[index];

  hj =supervisor_final_command.verification_id;
  huemploy=supervisor_final_command.type;
  gj =superr_objj.verification_user_id;
  if( hj == gj && huemploy == qualification_id){
  // alert("if log");
  coordinator_final_commanda = coordinator_final_comment_array[a];
 //alert(coordinator_final_commanda.verification_id+'coordinator_final_commanda');
}

}
}

var supervisor_final_commanda=supervisor_final_commanda;
var coordinator_final_commanda=coordinator_final_commanda;


var eductional_objaa=eductional_objaa;
var employment_objad=employment_objad;
var address_objag=address_objag;

if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
//alert('currentob education succes');
if(supervisor_final_commanda !== undefined && coordinator_final_commanda !== undefined){
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("coordinator_final_commanda",JSON.stringify(coordinator_final_commanda));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
sessionStorage.setItem("currentobj_educational_records",JSON.stringify(eductional_objaa));
$.mobile.changePage($('#sh_verified_false_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
sessionStorage.setItem("currentobj_educational_records",JSON.stringify(eductional_objaa));
$.mobile.changePage($('#sh_verified_false_inside'), { transition: "none", changeHash: true, reverse: false });
}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//alert('currentob address succes');
if(supervisor_final_commanda !== undefined && coordinator_final_commanda !== undefined){

sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("coordinator_final_commanda",JSON.stringify(coordinator_final_commanda));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
sessionStorage.setItem("currentobja_addressid",JSON.stringify(address_objag ));
$.mobile.changePage($('#sh_verified_false_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
sessionStorage.setItem("currentobja_addressid",JSON.stringify(address_objag ));
$.mobile.changePage($('#sh_verified_false_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}

if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('currentob employment succes');
if(supervisor_final_commanda !== undefined && coordinator_final_commanda !== undefined){

sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("coordinator_final_commanda",JSON.stringify(coordinator_final_commanda));
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
sessionStorage.setItem("currentobj_employment_records",JSON.stringify(employment_objad));
$.mobile.changePage($('#sh_verified_false_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("currentobj",JSON.stringify(super_obj));
sessionStorage.setItem("currentobj_employment_records",JSON.stringify(employment_objad));
$.mobile.changePage($('#sh_verified_false_inside'), { transition: "none", changeHash: true, reverse: false });
return false;
}

}