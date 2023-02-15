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
      text: "VOCÊ ERROU A SENHA, TENTE NOVAMENTE",
      icon: "error",
      button: "FECHAR",
        });
  }

function validacao() {
      var login = document.getElementById('login').value;
      var senha = document.getElementById('senha').value;

      if (login == "admin" && senha == "admin") {
        window.Verdadeiro();
        location.href ="https://joserobson2301.github.io/webplacestore/";
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







  function escrever (){
    swal({
        text: 'O que você quer pesquisar?',
        content: "input",
        button: {
          text: "Search!",
          closeModal: false,
        },
      })
      .then(name => {
        if (!name) throw null;
       
        return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
      })
      .then(results => {
        return results.json();
      })
      .then(json => {
        const movie = json.results[0];
       
        if (!movie) {
          return swal("Não Encontramos");
        }
       
        const name = movie.trackName;
        const imageURL = movie.artworkUrl100;
       
        swal({
          title: "Encontramos:",
          text: name,
          icon: imageURL,
        });
      })
      .catch(err => {
        if (err) {
          swal(":(", "Não Encontramos", "error");
        } else {
          swal.stopLoading();
          swal.close();
        }
      });
  }
