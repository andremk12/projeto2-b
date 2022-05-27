# projeto2-b
A ideia da aplicação foi criar um gerador de senhas automaticos, tudo feito pelo o JavaScript. A utilização do Js consiste em nestas etapasa bsu:

1º- utilização das variáveis Let, para que seja declaradas uma única vez;
2º- A busca de valores no HTML através do Ids e o querySelector, assim podendo criar funções para botões com o comando do "onclick" e os outputs dados como "Innner.HTML";
3º- existem 3 funções no projeto: A primeira consiste na mudança dos valores no número de caractéres escolhidos(linha 14 e 15 do código), a segunda consiste na randomização da senha(pelo math.floor e math.random), por meio da estrutura de repetição for, em que quando presionado será sorteado um dos caractéres predeterminados no "let charset" será escolhido ate chegar no limite que o usuário escolheu(linha 20 a 27) e a terceira é o comando de copiar a senha gerada, sendo feito pelo navigator "navigator.clipboard.writeText" (linha 30 a 32);
