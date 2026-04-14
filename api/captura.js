const video = document.getElementById('cameraFeed');
const canvas = document.getElementById('captureImage');
const botao = document.getElementById('captureButton');
const contexto = canvas.getContext('2d');
// Solicitar acesso à câmera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
        video.play();
    })
    .catch( erro => {
        console.error("erro ao acessar a camera:", erro);
    });
    //atribuir uma função para o botão de captura
    botao.addEventListener("click", () => {
        //desenhar o quadro atual do video na area do canvas
        contexto.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imagemDataURL = canvas.toDataURL("image/png");

        enviarImagemParaServidor(imagemDataURL);
    });

    function enviarImagemParaServidor(imagemDataURL){
        console.log("Enviando imagem para o servidor...");

        fetch("/", {
            method: "POST",
            body: JSON.stringify({ imagem: imagemDataURL }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        .then(resposta => resposta.json())
        .then(dados => {
            console.log("Resposta do servidor:", dados);
        }) 
        .catch( erro => {
            console.error("Erro ao enviar a imagem:", erro);
        })
    

    }
