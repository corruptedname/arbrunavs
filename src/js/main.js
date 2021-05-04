console.log("javascript loaded properly")

document.getElementById("buttontopress").onclick = function() {check()};

function check() {
  str = document.getElementById('txt_box').value
  var value_minus_one = str.charAt(str.length-1);
  console.log(value_minus_one)
  var a = "ა";
  var e = "ე";
  var i = "ი";
  var o = "ო";
  var u = "უ";
  var d = "დ";
  var s = "ს";
  var v = "ვ";
  var t = "თ";

  if ((value_minus_one == a)) {
    //თუ ბოლო ასო ა არის a_check-ზე გადავდივართ
      a_check();
      console.log("a_check")
  }
  if ((value_minus_one == e)) {
    //თუ ბოლო ასო ე არის ხმოვან ფუძიან სახ-ზე გადავდივართ
      xm_fudz_sax();
      console.log("სახ_ხმოვანი")
  }
  if ((value_minus_one == i)) {
    //თუ ბოლო ასო ი არის i_check-ზე გადავდივართ
      i_check();
      console.log("i_check")
  }
  if ((value_minus_one == u)) {
    //თუ ბოლო ასო უ არის ხმოვან ფუძიან სახ-ზე გადავდივართ
      xm_fudz_sax();
      console.log("სახ_ხმოვანი")
  }
  if ((value_minus_one == d)) {
    //თუ ბოლო ასო დ არის ვითარებითზე გადავდივართ
      vitarebiti();
      console.log("ვითარებითი")
  }
  if ((value_minus_one == s)) {
    //თუ ბოლო ასო ა არის ვითარებითი-ზე გადავდივართ
      s_check();
      console.log("მიცემითი")
  }
  if ((value_minus_one == v)) {
    //თუ ბოლო ასო ვ არის წოდებითზე-ზე გადავდივართ
      wodebiti();
      console.log("წოდებითი")
  }
  if ((value_minus_one == o)) {
    //თუ ბოლო ასო ო არის წოდებითზე-ზე გადავდივართ
      wodebiti();
      console.log("წოდებითი")
  }

  if ((value_minus_one == t)) {
    moqmedebiti();
  }

}

function a_check() {

  str = document.getElementById('txt_box').value
  var value_minus_two = str.charAt(str.length-2);
  m = "მ";
  console.log(value_minus_two)
  
  if ((value_minus_two == m)) {
    motxrobiti();
  } else {
    xm_fudz_sax_in_a_check();
  }

  function motxrobiti() {
    console.log("მოთხრობითი")
    append_motxrobiti();
    function append_motxrobiti() {
      function create(htmlStr) {
        var frag = document.createDocumentFragment(),
            temp = document.createElement('div');
        temp.innerHTML = htmlStr;
        while (temp.firstChild) {
            frag.appendChild(temp.firstChild);
        }
        return frag;
    }
    var fragment = create('<div id=\"motxrobiti_to_append\" class=\"motxrobiti_to_append\"><h3>_____________________________________________</h3><h3>მოთხრობითი</h3><h3>_____________________________________________</h3></div>');
    document.body.insertBefore(fragment, document.body.childNodes[100000]);
    throw new Error("stopped the code (fake error message lol)")
    }
  }
  function xm_fudz_sax_in_a_check() {
    function create(htmlStr) {
      var frag = document.createDocumentFragment(),
          temp = document.createElement('div');
      temp.innerHTML = htmlStr;
      while (temp.firstChild) {
          frag.appendChild(temp.firstChild);
      }
      return frag;
    }
    var fragment = create('<div id=\"saxelobiti_to_append\" class=\"saxelobiti_to_append\"><h3>_____________________________________________</h3><h3>სახელობითი</h3><h3>_____________________________________________</h3></div>');
    document.body.insertBefore(fragment, document.body.childNodes[100000]);
    throw new Error("stopped the code (fake error message lol)");
  }

}

function i_check() {
  str = document.getElementById('txt_box').value
  var value_minus_two = str.charAt(str.length-2);
  t = "თ";
  s = "ს";
  console.log(value_minus_two)
  
  if ((value_minus_two == s)) {
    natesaobiti();
  }
  
  if ((value_minus_two == t)) {
    moqmedebiti();
  } 

  
  function natesaobiti() {
    console.log("ნათესაობითი");
    append_natesaobiti();
    function append_natesaobiti() {
      function create(htmlStr) {
        var frag = document.createDocumentFragment(),
            temp = document.createElement('div');
        temp.innerHTML = htmlStr;
        while (temp.firstChild) {
            frag.appendChild(temp.firstChild);
        }
        return frag;
    }
    var fragment = create('<div id=\"natesaobiti_to_append\" class=\"natesaobiti_to_append\"><h3>_____________________________________________</h3><h3>ნათესაობითი</h3><h3>_____________________________________________</h3></div>');
    document.body.insertBefore(fragment, document.body.childNodes[100000]);
    }
    throw new Error("stopped the code (fake error message lol)");
  }


  function moqmedebiti() {
    console.log("მოქმედებითი");
    append_moqmedebiti();
    function append_moqmedebiti() {
      function create(htmlStr) {
        var frag = document.createDocumentFragment(),
            temp = document.createElement('div');
        temp.innerHTML = htmlStr;
        while (temp.firstChild) {
            frag.appendChild(temp.firstChild);
        }
        return frag;
    }
    var fragment = create('<div id=\"moqmedebiti_to_append\" class=\"moqmedebiti_to_append\"><h3>_____________________________________________</h3><h3>მოქმედებითი</h3><h3>_____________________________________________</h3></div>');
    document.body.insertBefore(fragment, document.body.childNodes[100000]);
    }
    throw new Error("stopped the code (fake error message lol)");
  }

  function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
  }
  var fragment = create('<div id=\"saxelobiti_to_append\" class=\"saxelobti_to_append\"><h3>_____________________________________________</h3><h3>სახელობითი</h3><h3>_____________________________________________</h3></div>');
  document.body.insertBefore(fragment, document.body.childNodes[100000]);
  throw new Error("stopped the code (fake error message lol)");

}
function xm_fudz_sax() {
  function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
  }
  var fragment = create('<div id=\"saxelobiti_to_append\" class=\"saxelobiti_to_append\"><h3>_____________________________________________</h3><h3>სახელობითი</h3><h3>_____________________________________________</h3></div>');
  document.body.insertBefore(fragment, document.body.childNodes[100000]);
  throw new Error("stopped the code (fake error message lol)");
}

function vitarebiti() {
  function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
  }
  var fragment = create('<div id=\"vitarebiti_to_append\" class=\"vitarebiti_to_append\"><h3>_____________________________________________</h3><h3>ვითარებითი</h3><h3>_____________________________________________</h3></div>');
  document.body.insertBefore(fragment, document.body.childNodes[100000]);
  throw new Error("stopped the code (fake error message lol)");
}

function micemiti() {
  function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
  }
  var fragment = create('<div id=\"micemiti_to_append\" class=\"micemiti_to_append\"><h3>_____________________________________________</h3><h3>მიცემითი</h3><h3>_____________________________________________</h3></div>');
  document.body.insertBefore(fragment, document.body.childNodes[100000]);
  throw new Error("stopped the code (fake error message lol)");
}

function wodebiti() {
  function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
  }
  var fragment = create('<div id=\"wodebiti_to_append\" class=\"wodebiti_to_append\"><h3>_____________________________________________</h3><h3>წოდებითი</h3><h3>_____________________________________________</h3></div>');
  document.body.insertBefore(fragment, document.body.childNodes[100000]);
  throw new Error("stopped the code (fake error message lol)");
}

function s_check() {

  str = document.getElementById('txt_box').value
  var value_minus_two = str.charAt(str.length-2);
  i = "ი";
  console.log(value_minus_two)
  
  if ((value_minus_two == i)) {
    natesaobiti();
  } else {
    micemiti_in_s_check();
  }

  function natesaobiti() {
    console.log("ნათესაობითი");
    append_natesaobiti();
    function append_natesaobiti() {
      function create(htmlStr) {
        var frag = document.createDocumentFragment(),
            temp = document.createElement('div');
        temp.innerHTML = htmlStr;
        while (temp.firstChild) {
            frag.appendChild(temp.firstChild);
        }
        return frag;
    }
    var fragment = create('<div id=\"natesaobiti_to_append\" class=\"natesaobiti_to_append\"><h3>_____________________________________________</h3><h3>ნათესაობითი</h3><h3>_____________________________________________</h3></div>');
    document.body.insertBefore(fragment, document.body.childNodes[100000]);
    }
    throw new Error("stopped the code (fake error message lol)");
  }

  function micemiti_in_s_check() {
    function create(htmlStr) {
      var frag = document.createDocumentFragment(),
          temp = document.createElement('div');
      temp.innerHTML = htmlStr;
      while (temp.firstChild) {
          frag.appendChild(temp.firstChild);
      }
      return frag;
    }
    var fragment = create('<div id=\"micemiti_to_append\" class=\"micemiti_to_append\"><h3>_____________________________________________</h3><h3>მიცემითი</h3><h3>_____________________________________________</h3></div>');
    document.body.insertBefore(fragment, document.body.childNodes[100000]);
    throw new Error("stopped the code (fake error message lol)");
  }

}

function moqmedebiti() {
  console.log("მოქმედებითი");
  append_moqmedebiti();
  function append_moqmedebiti() {
    function create(htmlStr) {
      var frag = document.createDocumentFragment(),
          temp = document.createElement('div');
      temp.innerHTML = htmlStr;
      while (temp.firstChild) {
          frag.appendChild(temp.firstChild);
      }
      return frag;
  }
  var fragment = create('<div id=\"moqmedebiti_to_append\" class=\"moqmedebiti_to_append\"><h3>_____________________________________________</h3><h3>მოქმედებითი</h3><h3>_____________________________________________</h3></div>');
  document.body.insertBefore(fragment, document.body.childNodes[100000]);
  }
  throw new Error("stopped the code (fake error message lol)");
}