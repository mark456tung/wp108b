header = '\
\
    <a class="active" href="#home">主頁</a> \
    <div class="dropdown">\
        <button class="dropbtn">上衣\
        <i class="fa fa-caret-down"></i>\
        </button>\
        <div class="dropdown-content">\
        <a href="#">短袖</a>\
        <a href="#">長袖</a>\
        <a href="#">背心</a>\
        <a href="#">外套</a>\
        </div>\
    </div>\
    \
    <div class="dropdown">\
        <button class="dropbtn">褲子\
        <i class="fa fa-caret-down"></i>\
        </button>\
        <div class="dropdown-content">\
        <a href="#">短褲</a>\
        <a href="#">長褲</a>\
        </div>\
    \
    </div>\
    <span style="float:right;color:white;font-size:30px;cursor:pointer" onclick="openNav()">&#9776; \
</div>\
\
<div id="mySidenav" class="sidenav">\
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>\
  <a href="#">about</a>\
  <a href="#">Services</a>\
  <a href="#">Clients</a>\
  <a href="#">Contact</a>\
</div>\
';
document.write(header);