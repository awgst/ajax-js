var xhr = new XMLHttpRequest();
function insert(){
    var nama = document.getElementById('nama').value;
    var nim = document.getElementById('nim').value;
    var email = document.getElementById('email').value;
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log("berhasil");
        }
    };
    xhr.open('POST', 'insert.php', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("nama="+nama+"&nim="+nim+"&email="+email);
    nama.setAttribute('value', '');
    nim.setAttribute('value', '');
    email.setAttribute('value', '');
    read();
}
function read(){
    var tabel = document.getElementById('tabel');
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200) {
            tabel.innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'read.php', true);
    xhr.send();
}
