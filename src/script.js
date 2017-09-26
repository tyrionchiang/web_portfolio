
var closeHashEven = false;

$(document).ready(function(){
	

  showPage();

  menuClickCheck();
  
  clickLR();
});


function clickLR() {
  $('.lightbox-arrow-left').click(function(){
    var hash = document.location.hash.split('.');
    var itemNum = parseInt(hash[2]);
    var lastItemNum = itemNum - 1;
    if (lastItemNum >= 0) {
      closeHashEven = true;
      document.location.hash = hash[0].substr()+'.'+hash[1]+'.'+lastItemNum;
      $(".remodal_style2").css("background-image", "url(img/pj_img/"+hash[0].substr(1)+'/'+lastItemNum+".jpg)");
    }else{
      console.log('outSize'+lastItemNum);
    }
  });
  $('.lightbox-arrow-right').click(function(){
    var hash = document.location.hash.split('.');
    var itemNum = parseInt(hash[2]);
    var nextItemNum = itemNum + 1;
    var maxNum = 0;
    if (hash[0] == '#p3d') {
      maxNum = p3dItemSize();
    }else if (hash[0] == '#photograph'){
      maxNum = photographItemSize();
    }
    if (nextItemNum < maxNum) {
      closeHashEven = true;
      document.location.hash = hash[0].substr()+'.'+hash[1]+'.'+nextItemNum;
      $(".remodal_style2").css("background-image", "url(img/pj_img/"+hash[0].substr(1)+'/'+nextItemNum+".jpg)");
    }else{
      console.log('outSize'+nextItemNum);
    }
  });
}


function menuClickCheck() {
  $('#btn_aboutme').click(function(){
    document.location.hash = '';
  });
  $('#btn_services').click(function(){
    document.location.hash = 'services';
  });
  $('#btn_unity').click(function(){
    document.location.hash = 'unity';
  });
  $('#btn_project').click(function(){
    document.location.hash = 'project';
  });
  $('#btn_3d').click(function(){
    document.location.hash = 'p3d';
  });
  $('#btn_photograph').click(function(){
    document.location.hash = 'photograph';
  });
}

$(window).on('hashchange.', hashEven);
function hashEven() {
  if (!closeHashEven) {
    var hash = document.location.hash.split('.');
    allRemodalClose();
    console.log(hash[1]);
    if (hash[1]) {
      demodalCheck();
    }else{
      pageCheck();
    }
  }else{
    closeHashEven = false;
  }
}

function demodalCheck() {
  var hash = location.hash.split('.');
  console.log('[data-remodal-id='+hash[1]+']');
  var inst = $('[data-remodal-id='+hash[1]+']').remodal();
  inst.open();

  if (hash[2]) {
    $('.remodal_style2').css('background-image', 'url(img/pj_img/'+hash[0].substr(1)+'/'+hash[2]+'.jpg)');
  }
}

function pageCheck() {
  var hash = document.location.hash;


  if (hash != '') {
    
    if (!$(hash).is(":visible")) {
      hideAllPage();
      $(hash).show();
    }
  }else{
    hideAllPage();
    $('#aboutme').show();
  }

}



function showPage() {
  var hash= document.location.hash;
  if (!hash) {
      hideAllPage();
      $('#aboutme').show();
      // $('#aboutme').delay(1500).show(0);
  }else{
      hash = hash.split('.');
      hideAllPage();
      $(hash[0]).show();

      hashEven();
  }
}

function hideAllPage() {
	$("#page > div").hide();
}

function test() {
  var str = document.location.hash + '.abc';
  var a = str.split('.',1)[0];

}