window.alerta()

function Verdadeiro() {
    swal({
      title: "",
      text: "A SENHA ESTÁ CORRETA",
      icon: "success",
      button: "FECHAR",
        });
  }

function Falso() {
    swal({
      title: "ERROU",
      text: "ERROU A SENHA",
      icon: "error",
      button: "FECHAR",
        });
  }

function validacao() {
      var login = document.getElementById('login').value;
      var senha = document.getElementById('senha').value;

      if (login == "admin" && senha == "admin") {
        window.Verdadeiro();
      }else{
        window.Falso();
      }
  }

  function alerta() {
    swal({
        title: "",
        text: "TEM CERTEZA QUE QUER ACESSAR ESSE SITE? -_-",
        icon: "info",
        buttons: true,
        dangerMode: false,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("SEU ACESSO FOI LIBERADO", {
            icon: "success",
          });
        } else {
          swal("SEU ACESSO FOI NEGADO!!!", {
            icon: "error",
          });
        }
      });
  }  