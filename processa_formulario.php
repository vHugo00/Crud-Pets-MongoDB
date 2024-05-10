<?php
// Verifica se o formulário foi submetido
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Conecta ao banco de dados
  $conexao = mysqli_connect("localhost", "root", "sua_senha", "seu_banco_de_dados");

  // Verifica a conexão
  if (!$conexao) {
    die("Erro ao conectar ao banco de dados: " . mysqli_connect_error());
  }

  // Obtém os dados do formulário
  $esposoNome = $_POST["esposoNome"];
  $esposoRG = $_POST["esposoRG"];
  $esposoCPF = $_POST["esposoCPF"];
  $esposoDataNasc = $_POST["esposoDataNasc"];
  $esposoLocalNasc = $_POST["esposoLocalNasc"];
  $esposaNome = $_POST["esposaNome"];
  $esposaRG = $_POST["esposaRG"];
  $esposaCPF = $_POST["esposaCPF"];
  $esposaDataNasc = $_POST["esposaDataNasc"];
  $esposaLocalNasc = $_POST["esposaLocalNasc"];
  $casalDataNasc = $_POST["casalDataNasc"];
  $endereco = $_POST["endereco"];
  $cep = $_POST["cep"];
  $cidade = $_POST["cidade"];
  $estado = $_POST["estado"];
  $email = $_POST["email"];
  $contatoEmergencia1 = $_POST["contatoEmergencia1"];
  $contatoEmergencia2 = $_POST["contatoEmergencia2"];

  // Query para inserir os dados no banco de dados
  $sql = "INSERT INTO dados_contrato (esposo_nome, esposo_rg, esposo_cpf, esposo_data_nasc, 
            esposo_local_nasc, esposa_nome, esposa_rg, esposa_cpf, esposa_data_nasc, 
            esposa_local_nasc, casal_data_nasc, endereco, cep, cidade, estado, email, 
            contato_emergencia1, contato_emergencia2)
            VALUES ('$esposoNome', '$esposoRG', '$esposoCPF', '$esposoDataNasc', 
            '$esposoLocalNasc', '$esposaNome', '$esposaRG', '$esposaCPF', '$esposaDataNasc', 
            '$esposaLocalNasc', '$casalDataNasc', '$endereco', '$cep', '$cidade', '$estado', 
            '$email', '$contatoEmergencia1', '$contatoEmergencia2')";

  // Executa a query
  if (mysqli_query($conexao, $sql)) {
    echo "Dados inseridos com sucesso!";
  } else {
    echo "Erro ao inserir os dados: " . mysqli_error($conexao);
  }

  // Fecha a conexão
  mysqli_close($conexao);
} else {
  // Se o formulário não foi submetido, redireciona de volta para a página do formulário
  header("Location: formulario.html");
  exit;
}
