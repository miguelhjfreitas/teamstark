$(document).ready(function(){
    $("#send").click(function(){
      
      var name = document.getElementById("inputNome").value;
      var email = document.getElementById("inputEmail").value;
      
        $.ajax({
            url:"handledata.php", 
            type: "POST",
            dataType: 'JSON',
            data: 'name='+name+'&email='+email,
            data: {name: name, email: email},
            success:function(result){
                  document.getElementById("inputNome").reset();
                  document.getElementById("inputEmail").reset();
                  alert(result);
                  Download(); //TODO: Function do download do ebook
            },
            error: function(){
               alert("Erro");
            }
         
        //prevent form from submitting
        return false;
    });
    req.console.error(function() { alert("Data not sent") });
  });
});
